import react from 'react';

export default function Class1(){
	return(
		<>
			<div className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Class Theater : - This is the only class on the ground floor, which is near to the MP Theater.">
			Class
			</div>

		</>
		)
}


const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"10rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"90px",
	"font-size":"10px",
	"font-weight":"800",
	"box-shadow":"1px 1px 0px gray"
	
	}