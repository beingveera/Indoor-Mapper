import react from 'react';

export default function Office(){
	return(
		<>
			<div className="room" style={css}>
			Office
			</div>

		</>
		)
}

const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"100px",
	"width":"200px",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"100px",
	"font-size":"10px",
	"font-weight":"800",
	}