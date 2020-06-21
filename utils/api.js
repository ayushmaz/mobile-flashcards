import {AsyncStorage} from 'react-native'
import {decks} from '../utils/_DATA.js'
export const DECKS_STORAGE_KEY = "mobile-flashcards:decks"


export function setInitialData(){
    AsyncStorage.setItem(DECKS_STORAGE_KEY , JSON.stringify(decks))
    return decks
}