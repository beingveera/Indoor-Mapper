import react from 'react';
import '../Components/Action.js'

export default function WashroomB(){
	return(
		<>
			<div id="Boys" className="room" style={area} data-bs-toggle="tooltip" data-bs-placement="top" title="Boys WashRoom 👦🏻👦🏻👦🏻">
	
			<p style={title}>Boys Wash Room</p>

			</div>

		</>
		)
}


const title={
	"fontSize":"10px",
	"backgroundColor":"blue",
	'color':'white',
	"padding":"1px 3px",
	"boxShadow":"1px 1px 0px gray"
}



const area = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"3rem",
	"width":"4rem",
	"border":"2px solid #000042",
	"fontWeight":"800",
	"padding-top":'20px',
	"textAlign":"center",
	"boxShadow":"1px 1px 0px gray"
	
	}