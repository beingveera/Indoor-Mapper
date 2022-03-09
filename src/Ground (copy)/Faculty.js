import react from 'react';

export default function Faculty(){
	return(
		<>
			<div className="room" style={css}>
			Faculty Room
			</div>

		</>
		)
}


const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"160px",
	"width":"160px",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"130px",
	"font-size":"10px",
	"font-weight":"800",
	"margin-left":"36px"
	}