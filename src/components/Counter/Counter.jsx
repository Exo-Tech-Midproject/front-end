import React, { useState, useEffect } from 'react';

const Counter = ({ minimum, maximum }) => {
    const [count, setCount] = useState(0);

    const counter = (minimum, maximum) => {
        for (let i = minimum; i <= maximum; i++) {
            ((i) => {
                setTimeout(() => {
                    setCount(i);
                }, (i - minimum) * 0.2);
            })(i);
        }
    };

    useEffect(() => {
        counter(minimum, maximum);
    }, [minimum, maximum]);

    const displayCount = count >= 1000 ? (count / 1000).toFixed(1) + 'K' : count; // Format the count to display in thousands if it's equal to or exceeds 1000

    return (
        <div>
            {displayCount}
        </div>
    );
};

export default Counter;