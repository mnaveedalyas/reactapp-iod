import React, { Component } from "react";

class WelcomeParam extends Component{

    render(){
        
        const {FName, LName} = this.props;
        return(
            <div>
                <h1>{FName} {LName}! Welcome to React World - Class Component</h1>
            </div>
        ) 

    }

}

export default WelcomeParam