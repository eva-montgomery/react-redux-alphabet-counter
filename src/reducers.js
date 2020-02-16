import {
    INCREMENT,
    DECREMENT,
    RESET
} from "./actions"


export function letters(state="m", action) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let newState = state;

    switch(action.type) {
        case INCREMENT:
            let letterIndexIncrement = alphabet.indexOf(state)
            letterIndexIncrement += 1
            if (letterIndexIncrement === alphabet.length) {
                letterIndexIncrement = 0
            }
            mewState = alphabet[letterIndexIncrement]
            break;
        case DECREMENT:
            let letterIndexDecrement= alphabet.indexOf(state)
            letterIndexDecrement -= 1
            if (letterIndexDecrement < 0) {
                letterIndexDecrement = alphabet.length -1
            }
            mewState = alphabet[letterIndexDecrement]
            break;

        case RESET:
            newState = "m";
            break;
    }
    
    return (newState)
}
