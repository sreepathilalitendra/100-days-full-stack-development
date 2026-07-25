import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    const increase = () => {

        setCount(count + 1);

    };

    const decrease = () => {

        if (count > 0) {

            setCount(count - 1);

        }

    };

    const reset = () => {

        setCount(0);

    };

    return (

        <div className="container">

            <h1>⚛️ React useState Hook</h1>

            <h2>Counter: {count}</h2>

            <button onClick={increase}>
                Increment
            </button>

            <button onClick={decrease}>
                Decrement
            </button>

            <button onClick={reset}>
                Reset
            </button>

        </div>

    );

}

export default App;