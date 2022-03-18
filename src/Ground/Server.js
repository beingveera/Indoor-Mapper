import React from 'react';

export default function server(){
	return(
		<>
			<div className="room" style={css}>
			Server Room
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"3rem",
	"width":"9rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"40px",
	"fontSize":"10px",
	"fontWeight":"800",
	}