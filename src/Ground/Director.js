import react from 'react';

export default function Accounts(){
	return(
		<>
			<div className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Director Room :- This is room for the college director which always open for the complain.">
			Director Room
			</div>

		</>
		)
}


const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"7.5rem",
	"width":"6rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"90px",
	"font-size":"10px",
	"font-weight":"800",
	"margin-top":"40px",
	"margin-left":"2rem"
	}