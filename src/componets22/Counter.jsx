import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 3);
    };
    const decrement = () => {
        setCount(count - 2);
    };
    useEffect(() => {
      console.log("inside effect");
},[count]);


  return (
    <div>
    <p>{count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>

  )
}

export default Counter;