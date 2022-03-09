import react from 'react';

export default function Sports(){
	return(
		<>
			<div className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Sports Room :- Here you can issue the all type of sports equipments and also play here different games">
			Sports Room
			</div>

		</>
		)
}


const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"9rem",
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