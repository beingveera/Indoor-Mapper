import react from 'react';

export default function Mechnlab1(){
	return(
		<>
			<div className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Mechnical Lab 2 :- This lab is come under the mechnical department where all lubrication and friction topics are coverd. ">
			Mechnical Lab 2
			</div>

		</>
		)
}

const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"12rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"100px",
	"font-size":"10px",
	"font-weight":"800",
	"box-shadow":"1px 1px 0px gray"
	
	}