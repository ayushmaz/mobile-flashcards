import {
    ADD_DECK,
    RECEIVE_DECKS,
} from '../actions/index'

export default function decks(state={} , action){
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                "decks":{
                    ...state.decks,
                    [action.deck.id]:
                    {
                        ...action.deck
                    }
                }
            }

        case RECEIVE_DECKS :
            return {
                ...state,
                "decks" : action.decks
            }
    }

}