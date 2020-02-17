import React from 'react';

function Alphabet(props) {
    console.log(props);
    return (

        <div>

            <h1>{props[props.dropdown]}</h1>
                <button onClick={props.handleDecrement}>-</button>
                <button onClick={props.handleIncrement}>+</button>
                <button onClick={props.handleReset}>Reset</button>
           
        </div>    
    );
}

export default Alphabet;

    