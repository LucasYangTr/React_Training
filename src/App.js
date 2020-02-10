import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Person1">
        <p>This is children props</p>
      </Greet>
      <Greet name="Person2">
        <button>Action</button>
      </Greet>
      <Greet name="Person3"/>
      ----------------------------
      <Welcome name="Person1"/>
      <Welcome name="Person2"/>
      <Welcome name="Person3"/>
    </div>
  );
}

export default App;
