import {AsyncStorage} from 'react-native'
import {decks} from '../utils/_DATA.js'
import { Notifications, Permissions } from 'expo'
const DECKS_STORAGE_KEY = "mobile-flashcards:decks"
const NOTIFICATION_KEY = "mobile-flashcards:notification"


export function getData(){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(data => {
        return data === null ? setInitialData() : JSON.parse(data)
    })
}

export function setInitialData(){
    AsyncStorage.setItem(DECKS_STORAGE_KEY , JSON.stringify(decks))
    return decks
}

export async function setDeck(deck){
    try{
        const newDeck = {
            [deck.id]:{
                ...deck
            }
        }
        console.log(newDeck)
        await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(newDeck))
    }catch{
        console.error("failed")
    }
  
    const deckAfter = await getData()
    console.log("deckAfter" , deckAfter)
}



export async function removeItem(){
    try{
        await AsyncStorage.clear()
    }catch{

    }
}


export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
  function createNotification () {
    return {
      title: 'Attempt quiz',
      body: "📖 Don't forget to attempt quiz today!",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }
  
  export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(21)
                tomorrow.setMintutes(30)
  
                Notifications.scheduleLocalNotificationsAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }