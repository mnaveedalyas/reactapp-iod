import logo from './logo.svg';
import './App.css';

import WelcomeClass from './components/WelcomeClass';
import WelcomeParam from './components/WelcomeParam';
import WelcomeParamChildren from './components/WelcomeParamChildren';
import GreetingFunc from './components/GreetingFunc';
import UserClass from './components/UserClass';
import UserFunction from './components/UserFunction';
import PropsDisplayer from './components/PropsDisplayer';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import Counter from './components/Counter';
import LifcycleA from './components/LifcycleA';
import Clock from './components/Clock';
import ClockWithLifeCycle from './components/ClockWithLifeCycle';

function App() {

  
  return (
    <div className="App">
      

      <ClockWithLifeCycle />
      
      
      
      {/*

      <ClockWithLifeCycle />
      <Clock date={new Date()} />
      <FunctionClick />
      <ClassClick />

      <Clock />
      <Counter />
      <EventBinding />

      <LifcycleA /> 

      <PropsDisplayer myparameters={"hello"} />

      <PropsDisplayer firstName={"mike"} lastName='Webb' age={22} address='hamilton' isworking={false} interests={['movies', 'games', 'dine outs']} />

 
      <GreetingFunc />
      <UserClass />
      <UserFunction />

      <WelcomeClass />
      <WelcomeParam FName="David" LName="alyas" />
      <WelcomeParam FName="David" LName="alyas" />

      <WelcomeParamChildren FName="naveed" LName="alyas">
        <p>my testing paragraph in Welcome</p> <button>Add Me</button>
      </WelcomeParamChildren>
      
      

      

      
      
      */}
    </div>
  );
}

export default App;
