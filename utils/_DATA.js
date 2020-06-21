export const decks = {
    "8xf0y6ziyjabvozdd253nd": {
        deckTitle: "Science",
        id: "8xf0y6ziyjabvozdd253nd",
        questionAnswers: [
            {
                question: "Sound travels faster through water than air.",
                answer: "correct"
            },
            {
                question: "K is the chemical symbol for krypton.",
                answer: "incorrect"
            },
            {
                question: "Jupiter has only one moon.",
                answer: "incorrect"
            }
        ]
    },
    "am8ehyc8byjqgar0jgpub9": {
        deckTitle: "Football",
        id: "am8ehyc8byjqgar0jgpub9",
        questionAnswers: [
            {
                question: "Pele is the youngest winner of the World Cup",
                answer: "correct"
            },
            {
                question: "Lionel Messi is not the only player who won six ballon d'or",
                answer: "incorrect"
            }
        ]
    }

}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDeck(deckTitle){
    return {
        deckTitle ,
        id: generateUID(),
        questionAnswers : []
    }
}