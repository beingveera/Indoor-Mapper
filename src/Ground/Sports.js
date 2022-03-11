import react from 'react';
import '../Components/Action.js';
export default function Sports(){
	return(
		<>
			<div id="sprts" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Sports Room :- Here you can issue the all type of sports equipments and also play here different games">
			Sports Room
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"9rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"90px",
	"fontSize":"10px",
	"fontWeight":"800"
	}