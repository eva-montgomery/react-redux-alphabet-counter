import {
    INCREMENT,
    DECREMENT,
    RESET
} from "./actions"

import {combineReducers} from 'redux';

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
            newState = alphabet[letterIndexIncrement]
            break;
        case DECREMENT:
            let letterIndexDecrement= alphabet.indexOf(state)
            letterIndexDecrement -= 1
            if (letterIndexDecrement < 0) {
                letterIndexDecrement = alphabet.length -1
            }
            newState = alphabet[letterIndexDecrement]
            break;

        case RESET:
            newState = "m";
            break;
    }
    
    return (newState)
}

export function capsLetters(state="M", action) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const ALPHABET = alphabet.map(letter => letter.toUpperCase());
    let newState = state;

    switch(action.type) {
        case INCREMENT:
            let letterIndexIncrement = ALPHABET.indexOf(state)
            letterIndexIncrement += 1
            if (letterIndexIncrement === ALPHABET.length) {
                letterIndexIncrement = 0
            }
            newState = ALPHABET[letterIndexIncrement]
            break;
        case DECREMENT:
            let letterIndexDecrement = ALPHABET.indexOf(state)
            letterIndexDecrement -= 1
            if (letterIndexDecrement < 0) {
                letterIndexDecrement = ALPHABET.length -1
            }
            newState = ALPHABET[letterIndexDecrement]
            break;

        case RESET:
            newState = "M";
            break;
    }
    
    return (newState)
}

export const rootReducer = combineReducers({letters, capsLetters});