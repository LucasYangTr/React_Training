import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';

class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <Form /> */}
        -----------------------
        <Table />
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
      </div>
    );
  }
}

export default App;
