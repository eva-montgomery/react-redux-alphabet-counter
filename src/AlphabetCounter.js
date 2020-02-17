import {
    createStore
} from 'redux';

import {
    rootReducer
} from './reducers';

import React from 'react';
import Alphabet from './container/AlphabetContainer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

export default function AlphabetCounter() {
    return (
        <Provider store={store}> 
            <Alphabet />
        </Provider>
        )
}