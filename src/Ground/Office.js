import react from 'react';

export default function Office(){
	return(
		<>
			<div className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Office Room :- The all of college offical work is managed at here,the only faculity is allow to come at here.">
			Office
			</div>

		</>
		)
}

const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"19.2rem",
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