import React, {Component} from "react";

class Counter extends Component {
 
 constructor(props){
    super(props);
    this.state = {
        count : 0
    }
    this.incrementFive = this.incrementFive.bind(this);
 }
 
 incrementCounter(){

  this.setState( { count : this.state.count + 1} );
  console.log('1- this.state.count -- '+this.state.count);
  //this.state.count = this.state.count + 2;
  
  console.log('2- this.state.count -- '+this.state.count); //3

  //console.log('display -- '+30);
  this.setState( { count : this.state.count + 1} );
  console.log('3- this.state.count -- '+this.state.count); //4

  this.setState( { count : this.state.count + 1} );
  
  
  /*
    this.setState( prevState => ({
            count : prevState.count +1
        }),
        ()=> {
          console.log('my counter is :'+this.state.count);
        }
    )
    */
 };

 incrementFive(){
  this.setState( { count : this.state.count + 5} );
  /*
    this.setState( prevState => ({
            count : prevState.count +5
        }),
        ()=> {
          console.log('my counter is :'+this.state.count);
        }
    )
    */
 };
 render(){
    return( 
    <div>
        <div>Count: {this.state.count} </div>
        <button onClick={ () => this.incrementCounter()} >Increment</button>
        <button onClick={ this.incrementFive } >Increment Five</button>
        <button onClick={this.incrementCounter.bind(this)} >Increment 1</button>
    </div>
        
    )
 }

}

export default Counter