import react from 'react';

export default function WashroomG(){
	return(
		<>
			<div className="room" style={area}>

			<p style={title}>Girls Washroom</p>

			</div>

		</>
		)
}

const title={
	"font-size":"10px",
	"background-color":"indigo",
	"color" : 'white'
}




const area = {
	"background-color":"lightgray",
	"color":"black",
	"height":"100px",
	"width":"10px",
	"border":"2px solid #000042",
	"flex": '1',
	"justify-content" : "center",
	"text-align":"center",
	"display":"block",
	"vertical-align":"middle",
	"line-height":"70px",
	"font-weight":"800"
	}