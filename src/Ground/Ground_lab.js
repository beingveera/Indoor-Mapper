import react from 'react';
import '../Components/Action.js';
export default function Glab(){
	return(
		<>
			<div id="clab" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Computer Lab :- This lab come under the department of CSE, where the all exams and learning will completed.">
			Computer Lab
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"17rem",
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