import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vicky');

  return (
    <main className="page">
      <div className="card">
        <p className="eyebrow">React starter</p>
        <p>hello xbb</p>
        <h1>Hello, {name}</h1>
        <p>
          Edit <code>src/App.jsx</code> and refresh your browser to experiment.
        </p>

        <label className="field">
          Your name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Type here"
          />
        </label>

        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </main>
  );
}
