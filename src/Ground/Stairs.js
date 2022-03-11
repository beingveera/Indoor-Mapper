import react from 'react';

function StairV(){
	return(
		<>
		<div style = {style1} data-bs-toggle="tooltip" data-bs-placement="top" title="Stairs goes to the First Floor">

		</div>

		</>
		)
}


function StairH(){
	return(
		<>
		<div style={style2} data-bs-toggle="tooltip" data-bs-placement="top" title="Stairs goes to the First Floor">

		</div>

		</>
		)
}

const style1 = {
	"height":"6rem",
	"width":"3rem",
	"background":"linear-gradient(white,black,white,black,white,black,white,black,white,black,white,black,white,black,white,black)",
	"border":"2px solid #000042",
	"position":'relative',
	"right":"-340px"
}


const style2 = {
	"height":"3rem",
	"width":"7rem",
	"background":"linear-gradient(white,black,white,black,white,black,white,black,white,black,white,black,white,black,white,black)",
	"border":"2px solid #000042",

}

export default StairV;
export {StairH};