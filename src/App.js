import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
// import myComponent from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersionList from './components/PersionList';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Noyon" heroName="Programmer">
        <p>This is chield property!</p>
      </Greet> */}
      {/* <Greet /> */}
      {/* <myComponent /> */}
      {/* <Welcome name="Noyon" heroName="programmer"/> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <NameList />
      {/* <PersionList /> */}
    </div>
  );
}

export default App;
