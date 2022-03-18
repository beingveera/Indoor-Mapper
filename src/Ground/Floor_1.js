import React from 'react';

import Sports from './Sports.js';
import Garden from './Garden.js'
import Theater from './Theater.js'
import Garden1 from './Garden1.js'
import Faculty from './Faculty.js';
import ARVR from './ARVR.js';
import Server from './Server.js';
import Director from './Director.js'


import PathV from './PathV.js';
import PathH from './PathH.js';

import StairV,{StairH} from './Stairs.js';

import './css/Floor_1.css';

export default function Floor_1(){
	return(
		<>
			<div className="line1">
				
				<div className="left-part">
					<Sports />
					<StairH />
					<ARVR />
				</div>

				<PathV />

				<div className="Mech2">
					<Garden />
				</div>

				<PathV />

				<div className="theater">
					<Theater />
				</div>

				<PathV />

				<div className="theater">
					<Garden1 />
				</div>

				<div className="theater">
					<Faculty />
					<Director />
				</div>

				

			</div>
		</>
		)
}