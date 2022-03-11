import react from 'react';

function Border(){
	return(
		<>
		<span style={space}></span>

		</>
		)
}

function Border1(){
	return(
		<>
		<span style={space1}></span>

		</>
		)
}

const space = {
	"height":"100px",
	"width":"100px",
	"backgroundColor":"white",
	"border":"2px solid #000042"
}


const space1 = {
	"height":"100px",
	"width":"400px",
	"backgroundColor":"white",
	"border":"2px solid #000042"
}

export default Border;
export {Border1};
