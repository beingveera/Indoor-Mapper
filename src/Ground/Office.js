import React from 'react';
import '../Components/Action.js'
export default function Office(){
	return(
		<>
			<div id="officeRoom" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Office Room :- The all of college offical work is managed at here,the only faculity is allow to come at here.">
			Office
			</div>

		</>
		)
}

const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"19.2rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"100px",
	"fontSize":"10px",
	"fontWeight":"800",
	"position":"absolute",
	"right":"0"
	}