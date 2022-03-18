import React from 'react';
import Accounts from './Accounts.js';

import Cantin from './Cantin.js';
import Mechlab1 from './Mechlab1.js';
import Incharge from './Incharge.js';
import WashroomG from './Washroom_Girls.js'
import Class1 from './Class1.js';
import WashroomB from './Washroom_Boys.js'
import StudentS from './StudentS.js'
import Mechlab from './Mechlab.js'



import PathV from './PathV.js';

import './css/Floor_0.css';



export default function Floor_0(){
	return(
		<>
			<div className="line0">
				
				<div className="cantin">
					<Cantin />
				</div>

				<PathV />

				<div className="Mech2">
					<Mechlab />
				</div>

				<div className="incharge">
					<Incharge />
				</div>

				<div className="girlsT">
					<WashroomG />
				</div>


				<div className="class-1">
					<Class1 />
				</div>

				<div className="boysT">
					<WashroomB />
				</div>

				<div className="Student">
					<StudentS />
				</div>

				<div className="Mech1">
					<Mechlab1 />
				</div>




			</div>
		</>
		)
}