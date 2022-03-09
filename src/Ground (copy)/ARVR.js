import react from 'react';

export default function ARVR(){
	return(
		<>
			<div className="room" style={css}>
			AR/VR Lab
			</div>

		</>
		)
}


const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"120px",
	"width":"100px",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"90px",
	"font-size":"10px",
	"font-weight":"800"
	}