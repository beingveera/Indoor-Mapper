import React from 'react';
import '../Components/Action.js'
import '../Components/Reaction.js';
export default function Class1(){
	return(
		<>
			<div id="clss" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Class Theater : - This is the only class on the ground floor, which is near to the MP Theater.">
			Class
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"10rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"90px",
	"fontSize":"10px",
	"fontWeight":"800",
	"boxShadow":"1px 1px 0px gray"
	
	}