import react from 'react';
import Glab from './Ground_lab.js'
import Accounts from './Accounts.js'
import Outdoor from './Outdoor.js';
import Office from "./Office.js";
 
import "./css/Floor_2.css";

import PathV from './PathV.js';
import PathH from './PathH.js';
import StairV,{StairH} from './Stairs.js';


export default function Floor_2(){
	return(
		<>
			<div className="line2">
				<div className="lab">
					<Glab />
				</div>

				<div className="accounts">
					<Accounts />
					
				</div>

				<div className="path">
					<Outdoor />
				</div>

				<div className="star">
					<StairV />
				</div>

				<div className="office">
					<Office />
				</div>



			</div>
		</>
		)
}