import react from 'react';

export default function Theater(){
	return(
		<>
			<div className="room" style={css}>
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
	"background-color":"lightgray",
	"color":"black",
	"height":"250px",
	"width":"450px",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"140px",
	"font-size":"10px",
	"font-weight":"800",
	"border":"10px dashed #000042",
	"margin-top":"40px",
	"margin-left":"40px"
	}