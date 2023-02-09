import React from "react";



function FunctionClick(){
	
  const avalue="this is mt testing";

	function clickHandler(){
		console.log('button is clicked with Function');
	}

	return(
		<div>
			<button onClick={clickHandler}> {avalue} Click - Function</button>
		</div>
	)
}

export default FunctionClick