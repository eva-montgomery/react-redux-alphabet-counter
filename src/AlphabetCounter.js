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

export default class AlphabetCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dropdown:'letters'}
    }
    
    _handleClick = (event) => {
        this.setState({
            dropdown: event.target.value
        })
    }

    render() {
        return (
            <Provider store={store}> 
                <Alphabet dropdown={this.state.dropdown}/>
                <select value={this.state.dropdown} onChange={this._handleClick}>
                    <option value='letters'>
                        lower case
                    </option>
                    <option value='capsLetters'>
                        upper case
                    </option>
                </select>
            </Provider>
        )
    };
}