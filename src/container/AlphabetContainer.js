import {
    connect
} from 'react-redux';


import Alphabet from '../components/Alphabet';
import { actionIncrement, actionDecrement, actionReset } from '../actions';

function mapStateToProps(state) {
    return {
        count: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleIncrement: () => {
            dispatch(actionIncrement())
        },
        handleDecrement: () => {
            dispatch(actionDecrement())
        },
        handleReset: () => {
            dispatch(actionReset())
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Alphabet);