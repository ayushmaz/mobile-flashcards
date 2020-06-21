export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"
export const ADD_CARD = "ADD_CARD"

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}

export function addCard({id , question , answer}){
    console.log( "there",id ,question , answer )
    return{
        type: ADD_CARD,
        id,
        question,
        answer
    }
}