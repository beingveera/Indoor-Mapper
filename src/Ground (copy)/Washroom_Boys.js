import react from 'react';

export default function WashroomB(){
	return(
		<>
			<div className="room" style={area}>
	
			<p style={title}>Boys Washroom</p>

			</div>

		</>
		)
}


const title={
	"font-size":"10px",
	"background-color":"blue",
	'color':'white'
}



const area = {
	"background-color":"lightgray",
	"color":"black",
	"height":"100px",
	"width":"1rem",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"block",
	"vertical-align":"middle",
	"font-weight":"800",
	"line-height":"70px"
	}