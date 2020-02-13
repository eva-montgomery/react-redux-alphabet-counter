import {
    INCREMENT,
    DECREMENT,
    RESET
} from "./actions"


export function letters(state=11, action) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let newState = state;

    switch(action.type) {
        case INCREMENT:
            for (let i = 0; i < alphabet.length; i++) {
                if (alphabet.length > 25) { 
                    return alphabet.lengths - 25
                }
            } break;
        case DECREMENT:
            for (let i = 25; i < alphabet.length;  i--) {
                if (alphabet.length < 0) { 
                    return alphabet.lengths - 25
                }

            } break;

        case RESET:
            newState = 11;
    }
    return newState;
}