import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './ComponentC';
import CounterOne from './CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree'
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
// import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <br></br>
      <HookCounter />
      <br></br>
      <HookCounterTwo />
    <br></br>
      <HookCounterThree />
      <br></br>
      <HookCounterFour />
      <br></br>
          <ClassCounterOne />
          <br></br>
          <HookCounterOne />
    <br></br>
<ClassMouse />
<br></br>
<HookMouse />
<br></br>
<MouseContainer />
<br></br>
<IntervalClassCounter />
<br></br>
<IntervalHookCounter />
<br></br>
<DataFetching />
<br></br>

<UserContext.Provider value={'Mike'}>
  <ChannelContext.Provider value={'Codevolution'}>
    <ComponentC />
  </ChannelContext.Provider>
</UserContext.Provider>

<br></br>
<CounterOne />
<br></br>
<CounterTwo />
<br></br>
<CounterThree />
<br></br>
{/* <ComponentA />
<ComponentB />
<ComponentC /> */}

    </div>
  );
}

export default App;
