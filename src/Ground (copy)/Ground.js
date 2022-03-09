import react from 'react';
import Accounts from './Accounts.js'
import WashroomB from './Washroom_Boys.js'
import WashroomG from './Washroom_Girls.js'
import Glab from './Ground_lab.js'
import Director from './Director.js'
import StudentS from './StudentS.js'
import Mechlab from './Mechlab.js'
import TPO from './TPO.js'
import Theater from './Theater.js'
import Garden from './Garden.js'
import Garden1 from './Garden1.js'
import Office from './Office.js';
import Mechlab1 from './Mechlab1.js';
import Incharge from './Incharge.js';
import ARVR from './ARVR.js';
import Sports from './Sports.js';
import Faculty from './Faculty.js';
import Class1 from './Class1.js';
import Cantin from './Cantin.js';



import Empty from './Empty.js';
import Empty1,{Empty2,Empty3} from './Empty1.js';
import Space,{Space1} from './Space.js';
import Border,{Border1} from './Border.js';
import Horizontal,{Vertical} from './Horizontal.js';
import {Small} from './Horizontal.js';


//import css
import './css/Ground.css';

export default function Ground(){
	return(
		<>
		<div className="line">
			<div className="cols-1">
				<Cantin />
				<Empty3 />
				<Mechlab1 />
				<Space />
				<Incharge />
				<WashroomG />
				<Empty />
				<Space />
				<Class1 />
				<Space />
				<Empty />
				<WashroomB />
				<StudentS />
				<Space />
				<Mechlab />
				<Space />
				<Space />
				

			</div>
		</div>

		<div className="line">
			<div className="cols-2">
				<Small />
				<Sports />
				<Horizontal />
				<ARVR />
			</div>

			<div className="cols-3">
 				<Garden />                               
				<Theater />
				<Garden1 />

			</div>

			<div className="cols-2">
				<Faculty />
				<Director />
			</div>

		</div>

		<div className="line">
			<div className="cols-3">
			<Glab />
			<Accounts />
			<Border1 />
			<Border />
			<Vertical />
			<Office />
			<Border />
			</div>
		</div>

		<div className="line">
			<div className="road">Road</div>
		</div>

		</>

		)
}