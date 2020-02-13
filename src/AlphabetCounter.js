import {
    createStore
} from 'redux';

import {
    letters
} from './reducers';

import React from 'react';
import Alphabet from './container/AlphabetContainer';
import { Provider } from 'react-redux';

const store = createStore(letters);

export default function AlphabetCounter() {
    return (
        <Provider store={store}> 
            <Alphabet />
        </Provider>
        )
}