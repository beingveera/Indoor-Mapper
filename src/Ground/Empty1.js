import react from 'react';

function Empty(){
	return(
		<>
		<span style={space}></span>

		</>
		)
}

const space = {
	"height":"100px",
	"width":"140px",
	"backgroundColor":"white",
	"borderTop":"2px solid #000042"
}


const space1 = {
	"height":"100px",
	"width":"70px",
	"backgroundColor":"white",
	"borderTop":"2px solid #000042"
}

const space2 = {
	"height":"100px",
	"width":"25px",
	"backgroundColor":"white",
	"borderTop":"2px solid #000042"
}

function Empty2(){
	return(
		<>
			<span style={space1}></span>

		</>
		)
}

function Empty3(){
	return(
		<>
			<span style={space2}></span>

		</>
		)
}



export default Empty;
export {Empty2,Empty3};