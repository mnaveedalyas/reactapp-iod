import logo from './logo.svg';
import './App.css';

import WelcomeClass from './components/WelcomeClass';
import WelcomeParam from './components/WelcomeParam';
import WelcomeParamChildren from './components/WelcomeParamChildren';
import GreetingFunc from './components/GreetingFunc';
import UserClass from './components/UserClass';
import UserFunction from './components/UserFunction';
import PropsDisplayer from './components/PropsDisplayer';

function App() {

  

  return (
    <div className="App">
      

      <PropsDisplayer myparameters={"hello"} />

      <PropsDisplayer firstName={"mike"} lastName='Webb' age={22} address='hamilton' isworking={false} interests={['movies', 'games', 'dine outs']} />


      {/*
      
 
      <GreetingFunc />
      <UserClass />
      <UserFunction />

      <WelcomeClass />
      <WelcomeParam FName="David" LName="alyas" />

      <WelcomeParamChildren FName="naveed" LName="alyas">
        <p>my testing paragraph in Welcome</p> <button>Add Me</button>
      </WelcomeParamChildren>
      
      

      

      
      
      */}
    </div>
  );
}

export default App;
