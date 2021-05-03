import logo from './logo.svg';
import './App.css';

/** @namespace App/renderHeaderContents */
function renderHeaderContents() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  )
}

/** @namespace App/App */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {renderHeaderContents()}
      </header>
    </div>
  );
}

export default App;
