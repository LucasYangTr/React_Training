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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      {/* <Stylesheet className={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
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
