import react from 'react';

export default function StudentS(){
	return(
		<>
			<div className="room" style={css}>
			Student Section
			</div>

		</>
		)
}


const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"100px",
	"width":"150px",
	"border":"2px solid #000042",
	"border-right":"none",

	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"90px",
	"font-size":"10px",
	"font-weight":"800"
	}