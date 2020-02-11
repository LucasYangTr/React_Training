import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message/> */}
      {/* <Greet name="Person1" career="Developer">
        <p>This is children props</p>
      </Greet>
      <Greet name="Person2" career="Senior Developer">
        <button>Action</button>
      </Greet>
      <Greet name="Person3" career="Staff Developer"/> */}
      ----------------------------
      {/* <Welcome name="Person1" career="Developer"/>
      <Welcome name="Person2" career="Senior Developer"/>
      <Welcome name="Person3" career="Staff Developer"/> */}
    </div>
  );
}

export default App;
