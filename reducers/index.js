import {
    ADD_DECK,
    RECEIVE_DECKS,
    ADD_CARD
} from '../actions/index'

export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                "decks": {
                    ...state.decks,
                    [action.deck.id]:
                    {
                        ...action.deck
                    }
                }
            }

        case RECEIVE_DECKS:
            return {
                ...state,
                "decks": action.decks
            }

        case ADD_CARD:
            const { question, answer, id } = action
            console.log(id)
            const newQuestionAnswer = state.decks[id.deckID].questionAnswers.concat([{
                question,
                answer
            }])
            console.log(state)
            return {
                ...state,
                "decks": {
                    ...state.decks,
                    [id.deckID]: {
                        ...state.decks[id.deckID],
                        questionAnswers : state.decks[id.deckID].questionAnswers.concat([{
                            question,
                            answer
                        }])
                    }
                }
            }
    }

}