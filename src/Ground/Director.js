import react from 'react';
import '../Components/Reaction.js';

export default function Accounts(){
	return(
		<>
			<div id="dir" className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Director Room :- This is room for the college director which always open for the complain.">
			Director Room
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"7.5rem",
	"width":"6rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"90px",
	"fontSize":"10px",
	"fontWeight":"800",
	"marginTop":"40px",
	"marginLeft":"2rem",
	"position":"relative",
	"top":"98px",
	"right":"0px"


	}