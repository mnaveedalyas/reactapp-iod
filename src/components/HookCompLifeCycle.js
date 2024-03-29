import React, { Component } from 'react'

export default class HookCompLifeCycle extends Component {
  constructor(){
    console.log("constructor function is called");
    super();
    this.state = {
        count:0
    };
    this.changeCountHandle = this.changeCountHandle.bind();
  }  

  changeCountHandle = () => {
    this.setState({count: this.state.count +1});
  }
  componentDidMount(){
    document.title = `You have clicked ${this.state.count} times - componentDidMount is called`; 
    console.log(document.title);
    document.getElementById("myMsg").innerHTML = `You have clicked ${this.state.count} times - mount`;
  }

  componentDidUpdate(){
    document.title = `You have clicked ${this.state.count} times - componentDidUpdate is called`; 
    console.log(document.title);
    document.getElementById("myMsg").innerHTML = `You have clicked ${this.state.count} times - update`;
  }

  //onClick={ () => this.setState({count: this.state.count +1})}

  render() {
    return (
      <div>
        <h1>Component lifecycle without Hooks</h1>
        <p>You clicked {this.state.count} times</p>
        <button  onClick={this.changeCountHandle}>Click Me</button>
        <p id="myMsg"></p>
      </div>
    )
  }
}
