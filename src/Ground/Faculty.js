import React from 'react';
import '../Components/Reaction.js';

export default function Faculty(){
	return(
		<>
			<div id="facul" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Faculty Room :- This room is bacially for the faculites staff.  ">
			Faculty Room
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"9rem",
	"width":"6rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"90px",
	"fontSize":"10px",
	"fontWeight":"800",
	"marginLeft":"2rem",
	"position":"absolute",
	"right":"0px",
	"top":"95px"

	}