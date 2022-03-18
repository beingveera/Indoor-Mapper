import React from 'react';

export default function Theater(){
	return(
		<>
			<div id="Mp" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="MP Theater :- The Center of the Block ,which is used for small Events.">
			MP_Theater
			<span style={left}></span>
			<span style={right}></span>
			<span style={top}></span>
			<span style={bottom}></span>

			</div>

		</>
		)
}


const left={
}
const right={}
const top={}
const bottom={}



const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"14rem",
	"width":"14rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"140px",
	"fontSize":"10px",
	"fontWeight":"800",
	"border":"1rem dashed #000042",
	}