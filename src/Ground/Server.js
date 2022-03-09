import react from 'react';

export default function server(){
	return(
		<>
			<div className="room" style={css}>
			Server Room
			</div>

		</>
		)
}


const css = {
	"background-color":"lightgray",
	"color":"black",
	"height":"3rem",
	"width":"9rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"flex",
	"vertical-align":"middle",
	"line-height":"40px",
	"font-size":"10px",
	"font-weight":"800",
	}