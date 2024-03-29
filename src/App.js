import React from 'react';
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
import ClockWithOutLifeCycle from './components/ClockWithOutLifeCycle';
import ClockWithLifeCycle from './components/ClockWithLifeCycle';
import Reservation from './components/Reservation';
import Form from './components/Form';
import CodeSplitting from './components/CodeSplitting'
import ErrorComponent from './components/ErrorComponent';
import ErrorComponentBoundary from './components/ErrorComponentBoundary';

import HookUseState from './components/HookUseState';
import HookCompLifeCycle from './components/HookCompLifeCycle';
import HookUseEffect from './components/HookUseEffect';
import HookContextProvider from './components/HookContextProvider';
import ContextProviderExample from './components/contexts/ContextProviderExample'
import RouteExample from './components/routing/RouteExample';
import SignIn from './components/MUI/SignIn';
import MUIButton from './components/MUI/MUIButton';
import HookUseRef from './components/HookUseRef';
import Parent from './components/Portal/PortalExmple';
import ParentPortal from './components/Portal/ParentPortal';
import CustomTextInput from './components/Ref/CustomTextInput';
import NameForm from './components/UncontrolledComp/NameForm';
import FileInput from './components/UncontrolledComp/FileInput';
import LiftingUpState from './LiftingUpState';

import WelcomeDialog from './components/Composition';
import SplitPanInterface from './components/SplitPan';
import OutletExample from './components/routing/outletExample';
import NavigateExample from './components/routing/NavigateExample';

function App() {

  
  return (
    <div className="App">
      <React.StrictMode>
        <RouteExample />
      </React.StrictMode>
      
      
      
      {
      /*
      <RouteExample/> 


      <OutletExample/>
      <ContextProviderExample />
       <HookContextProvider />

      

      <HookUseState />
      <HookCompLifeCycle />
      <HookUseEffect />

      <WelcomeDialog />
      <SplitPanInterface />
      <Reservation />
      <NameForm />

        <ClockWithOutLifeCycle date = {new Date()} />
      
      <ClockWithLifeCycle />

      <Reservation />
      <NameForm />

      <CodeSplitting />

      <ErrorComponentBoundary />
      <ErrorComponent />  

      <RouteExample />

      slide 11
      <UserClass />
      <UserFunction />
      
      <GreetingFunc />  
      <UserClass />
      <UserFunction />


      // slide 20 props
        <PropsDisplayer myparameters={"hello"} />

      // slide 21
        <PropsDisplayer firstName={"mike"} lastName='Webb' age={22} address='hamilton' isworking={false} interests={['movies', 'games', 'dine outs']} />

      // slide 25-26
      <WelcomeClass />
      <GreetingFunc />   
      
      //slide 28 - 30
      <WelcomeParam FName="David" LName="alyas" />

      <WelcomeParamChildren FName="naveed" LName="alyas">
        <p>my testing paragraph in Welcome</p> <button>Add Me</button>
      </WelcomeParamChildren>
      
      // Slide 35 - 42 setState
      <FunctionClick />
      <ClassClick />
      <EventBinding />
      <Counter />
      
      //Slide 43 - lifting update state
      <LiftingUpState />

      // Slide 45 - 50
      <LifcycleA />

      //Slide 51
      <ClockWithOutLifeCycle date = {new Date()} />
      //Slide 52
      <ClockWithLifeCycle />
      
      //Slide 53
      <Form />  
      //slide 63
      <NameForm />

      //slide 64
      <Reservation />
      // Slide 65 - Composition
      <WelcomeDialog />
      <SplitPanInterface />

      //slide 73 / 81
      <CodeSplitting />

      //Slide 82 - error boudary and lazy loadging
      <ErrorComponentBoundary />
      <ErrorComponent />  



     
      
      <Form />
      
      <HookUseRef />
      <Parent />
      <ParentPortal />
       
      
      <NameForm />
      <FileInput />
      <NameForm />

      
      // Mod 7 Slide 6
      <HookUseState />
      <HookCompLifeCycle />

      // Mod 7 Slide 8-13
      <HookUseEffect />
      
      
      //Mod 7 Slide 20 - 32
      <HookContextProvider />
      <ContextProviderExample />
      
      //Mod 7 Slide 34 - 45
      <RouteExample />
      //Mod 7 Slide 41
      <NavigateExample />
      //Mod 7 Slide 42
      <OutletExample/>
      
      //mod 7 slide 51-51
      <SignIn />
      <MUIButton />

      //mod 7 slide 62 
      <CustomTextInput />
      

      
      






      

      
      
      

      

      
      
      */}
    </div>
  );
}

export default App;
