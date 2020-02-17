import React from 'react';

function Alphabet({
    letters,
    capsLetters,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    return (
    
        <div>
            <h1>{letters}</h1>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleReset}>Reset</button>
            <h1>{capsLetters}</h1>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleReset}>Reset</button>
        </div>    
    );
}

export default Alphabet;

    