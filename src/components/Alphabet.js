import React from 'react';

function Alphabet({
    count,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Alphabet;

    