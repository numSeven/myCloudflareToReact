// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from "axios"

function App() {
  function getData(e:any) {
    // e.preventDefault();
    Axios.get('/api/getData',{params:{name:'aaa'}})
  }
  function setData(e:any) {
    // e.preventDefault();
    Axios.post('/api/setData',{name:'aaa',val:123})
  }
  let  a = []
  console.log(a.length);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onClick={getData}>获取数据</button>
        <button onClick={setData}>提交数据</button>
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
