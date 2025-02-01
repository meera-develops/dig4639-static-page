import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Header';
import MainContent from './components/Content';
import End from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Static Page Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Welcome to my project.
          This project has been created by Meera Bhola for DIG 4639.
        </p>
      </div>
      <p className="read-the-docs">
        There is a GitHub repo created to store and share this assignment
      </p>
      <Title />
      <MainContent />
      <End />
    </>
  )
};

export default App
