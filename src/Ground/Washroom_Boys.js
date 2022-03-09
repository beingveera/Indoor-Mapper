import react from 'react';

export default function WashroomB(){
	return(
		<>
			<div className="room" style={area} data-bs-toggle="tooltip" data-bs-placement="top" title="Boys WashRoom 👦🏻👦🏻👦🏻">
	
			<p style={title}>Boys Wash Room</p>

			</div>

		</>
		)
}


const title={
	"font-size":"10px",
	"background-color":"blue",
	'color':'white',
	"padding":"1px 3px",
	"box-shadow":"1px 1px 0px gray"
}



const area = {
	"background-color":"lightgray",
	"color":"black",
	"height":"3rem",
	"width":"4rem",
	"border":"2px solid #000042",
	"font-weight":"800",
	"padding-top":'20px',
	"text-align":"center",
	"box-shadow":"1px 1px 0px gray"
	
	}