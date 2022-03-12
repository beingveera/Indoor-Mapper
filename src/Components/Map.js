import react from 'react';
import './css/Map.css'
export default function Maps(){

	// function initMap() {
	//   const myLatLng = { lat: 24.619266162610764, lng:73.85573136424358};
	//   const map = new google.maps.Map(document.getElementById("map"), {
	//     zoom: 4,
	//     center: myLatLng,
	//   });

	//   new google.maps.Marker({
	//     position: myLatLng,
	//     map,
	//     title: "Hello World!",
	//   });
	// }


	return(
		<>
		<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1078.354530926057!2d73.8537723895723!3d24.6189337441671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967dd6f3fb82267%3A0xa3d6f9776c71bd6c!2sGeetanjali%20Institute%20of%20Technical%20Studies%20(GITS)!5e0!3m2!1sen!2sin!4v1646979019962!5m2!1sen!2sin"></iframe>

		</>
		)
}
