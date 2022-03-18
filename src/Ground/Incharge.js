import React from 'react';
import '../Components/Action.js'

export default function Incharge(){
	return(
		<>
			<div id="inchi" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Incharge Room :- All types of complain regarding the cleanness, security and stolen things are ragistred at here.">
			Incharge Room
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
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
	"boxShadow":"1px 1px 0px gray"
	
	}