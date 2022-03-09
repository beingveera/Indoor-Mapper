import react from 'react';


import Floor_0 from './Floor_0.js'
import Floor_1 from './Floor_1.js'
import Floor_2 from './Floor_2.js'
import Road from './Road.js';

import './css/Main.css';
export default function Main(){
	return(
		<>

		<div className="main">
		<Floor_0 />
		<Floor_1 />
		<Floor_2 />
		<Road />
		</div>


		</>


		)
}