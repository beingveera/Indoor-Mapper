import React from 'react';

export default function StudentS(){
	return(
		<>
			<div id="stud" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Student Section :- If you have any query for regarding the Students, You can contact here.">
			Student Section
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"12.3rem",
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