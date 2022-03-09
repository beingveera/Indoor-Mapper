import react from 'react';

export default function StudentS(){
	return(
		<>
			<div className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Student Section :- If you have any query for regarding the Students, You can contact here.">
			Student Section
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
	"line-height":"90px",
	"font-size":"10px",
	"font-weight":"800",
	"box-shadow":"1px 1px 0px gray"
	
	}