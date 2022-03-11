import react from 'react';
import '../Components/Action.js'
import '../Components/Reaction.js';

export default function ARVR(){
	return(
		<>
			<div id="Av" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="AR/VR Lab :- This lab is single AR/VR lab in the CSE department ,which is front of the Sports Room.">
			AR/VR Lab
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"7rem",
	"width":"9rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"90px",
	"fontSize":"10px",
	"fontWeight":"800",
	}