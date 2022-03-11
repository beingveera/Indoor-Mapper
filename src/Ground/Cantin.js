import react from 'react';
import '../Components/Reaction.js';

export default function Cantin(){
	return(
		<>
			<div id="cant"className="room" style={css} data-bs-toggle="tooltip" data-bs-placement="top" title="Cantin :- Cantin is nere to th sports room , which is open between 09:00 AM to 06:00 PM.">
			Cantin
			</div>

		</>
		)
}


const css = {
	"backgroundColor":"lightgray",
	"color":"black",
	"height":"6rem",
	"width":"9rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justifyContent" : "center",
	"textAlign":"center",
	"display":"flex",
	"verticalAlign":"middle",
	"lineHeight":"90px",
	"fontSize":"10px",
	"fontWeight":"800",
	"boxShadow":"1px 1px 0px gray"
	
	}