import { seededRandom, seededShuffle } from "./random"

export default function createBoard(seed: string) {
    const dice = [
        ["T", "O", "E", "S", "S", "I"],
        ["A", "S", "P", "F", "F", "K"],
        ["N", "U", "I", "H", "M", "Qu"],
        ["O", "B", "J", "O", "A", "B"],
        ["L", "N", "H", "N", "R", "Z"],
        ["A", "H", "S", "P", "C", "O"],
        ["R", "Y", "V", "D", "E", "L"],
        ["I", "O", "T", "M", "U", "C"],
        ["L", "R", "E", "I", "X", "D"],
        ["T", "E", "R", "W", "H", "V"],
        ["T", "S", "T", "I", "Y", "D"],
        ["W", "N", "G", "E", "E", "H"],
        ["E", "R", "T", "T", "Y", "L"],
        ["O", "W", "T", "O", "A", "T"],
        ["A", "E", "A", "N", "E", "G"],
        ["E", "I", "U", "N", "E", "S"],
        ["H", "E", "E", "F", "S", "I"],
        ["R", "D", "L", "O", "N", "R"],
        ["T", "O", "E", "S", "S", "I"],
        ["A", "S", "P", "F", "F", "K"],
        ["N", "U", "I", "H", "M", "Qu"],
        ["O", "B", "J", "O", "A", "B"],
        ["L", "N", "H", "N", "R", "Z"],
        ["A", "H", "S", "P", "C", "O"],
        ["R", "Y", "V", "D", "E", "L"],
    ]

    // dice.sort(() => Math.random() - 0.5)

    seededShuffle(dice, 1)
    
    
    const newBoard = []

    for (let i = 0; i < 5; i++) {
        const row = []
        for (let j = 0; j < 5; j++) {
            const die = dice.pop()
            if (!!die) {
                const letter = die[Math.floor(seededRandom(seed) * die.length)]
                seed = seededRandom(seed).toString()
                row.push(letter)
            }
        }
        newBoard.push(row)
    }
    
    newBoard.push()
    
    return newBoard
}