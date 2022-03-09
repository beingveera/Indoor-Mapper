import react from 'react';

export default function Garden(){
	return(
		<>
			<div className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Garden 1">
			Garden
			</div>

		</>
		)
}

const css = {
	"background-color":"green",
	"color":"white",
	"height":"14rem",
	"width":"16rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"140px",
	"font-size":"10px",
	"font-weight":"800",
	"border":"1rem solid darkgreen",
	}