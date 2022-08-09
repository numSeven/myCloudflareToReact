// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HTTP from "axios"

function App() {
  function handleSubmit(e:any) {
    // e.preventDefault();
    console.log('You clicked submit.');
    HTTP.get('/api')
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onClick={handleSubmit}>点一下</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          tstst
        </a>
      </header>
    </div>
  );
}

export default App;
