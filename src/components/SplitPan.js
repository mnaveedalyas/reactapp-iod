
import React from "react";

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left} - Test at left side
      </div>
      <div className="SplitPane-right">
        {props.right} - Test at right side
      </div>
    </div>
  );
}

function SplitPanInterface(){

  return (
    <SplitPane
      left={
        <h1>Left </h1>
      }
      right={
        <h1>Right </h1>
      } />
  );
}

export default SplitPanInterface