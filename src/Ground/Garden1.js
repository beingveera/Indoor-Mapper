import react from 'react';

export default function Garden1(){
	return(
		<>
			<div className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Garden 2">
			Garden
			</div>

		</>
		)
}

const css = {
	"backgroundColor":"green",
	"color":"white",
	"height":"14rem",
	"width":"16rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"140px",
	"fontSize":"10px",
	"fontWeight":"800",
	"border":"1rem solid darkgreen",
	}