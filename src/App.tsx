// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from "axios"

function App() {
  function getData(e:any) {
    // e.preventDefault();
    // Axios.get('/api/getData',{params:{name:'aaa'}})
    Axios.get('https://mycloudflare_init.11980762821814.workers.dev/api/getData',{params:{name:'aaa'}})
  }
  function setData(e:any) {
    // e.preventDefault();
    // Axios.get('/api/setData')
    Axios.post('https://mycloudflare_init.11980762821814.workers.dev/api/setData',{name:'aaa',val:'123'})
    // Axios.get('https://mycloudflare_init.11980762821814.workers.dev/api/setData')
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
          tstst111
        </a>
      </header>
    </div>
  );
}

export default App;
