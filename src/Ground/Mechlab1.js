import React from 'react';
import '../Components/Action.js'

export default function Mechnlab1(){
	return(
		<>
			<div id="mechn2" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Mechnical Lab 2 :- This lab is come under the mechnical department where all lubrication and friction topics are coverd. ">
			Mechnical Lab 2
			</div>

		</>
		)
}

const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"12rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"100px",
	"fontSize":"10px",
	"fontWeight":"800",
	"boxShadow":"1px 1px 0px gray",
	"position":"absolute",
	"right":"0px"
	
	}