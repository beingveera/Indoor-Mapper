import react from 'react';
import '../Components/Action.js';
import '../Components/Reaction.js';

export default function Accounts(){
	return(
		<>
			<div id="acc" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Accounts Section :- The all fee or finalcial issues are solving at here.">
				Account
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"8.9rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"90px",
	"fontSize":"10px",
	"fontWeight":"800",
	"Postion":"absolute",
	"right":"100px",
	}