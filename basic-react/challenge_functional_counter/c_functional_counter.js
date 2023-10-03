//Fuctional Component Counter
const { useState } = React;
const { render } = ReactDOM;

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
    setCount(count + 1);
    };

    const decrement = () => {
    setCount(count - 1);
    };
    return (
        <div>
            <h1>Pengenalan React Tingkat Dasar</h1>
            <h2>Counter</h2>
            <h1>{count.toString().padStart('0')}</h1>
            <button onClick={decrement}>- 1</button>
            <button onClick={increment}>+ 1</button>
        </div>
    );
}

// Render the Counter component to the root div
render(<Counter />, document.getElementById('root'));
