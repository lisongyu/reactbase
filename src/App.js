import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import FirstCom from './components/classcomponent'
import FunctionDemo from './components/fn'
// 父子组件引用
import Parent from './components/parent'
import RouterDemoTest from './components/routerDemo'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <RouterDemoTest></RouterDemoTest>
        <Parent></Parent>
        <FirstCom title={'我是标题'}></FirstCom>
        <Hello></Hello>
        <FunctionDemo></FunctionDemo>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
