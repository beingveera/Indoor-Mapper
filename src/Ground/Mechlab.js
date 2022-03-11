import react from 'react';

export default function Accounts(){
	return(
		<>
			<div id="mechn1" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Mechnical Lab 1 : This lab is come under the mechnical department, where the vilocity and pressure topics are coverd.">
			Mechnical Lab 1
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