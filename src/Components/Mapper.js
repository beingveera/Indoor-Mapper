import react,{useState} from 'react';
import './Action.js';

import Accounts from '../Ground/Accounts.js'

import './css/Mapper.css';

// import location ,{Floor} from './Position.js';

export default function Sidebar(){

	function Reload(){
		window.location.reload();
	}
		
	return(
		<>
		<div className="outer">

			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Start">
			  Satalite View
			</button>

		    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#End">
			  Line View
			</button>

			 <button type="button" className="btn btn-secondary" onClick={Reload}>
			  Mask View
			</button>


			 <button type="button" className="btn btn-info" onClick={Reload}>
			  Reset
			</button>
		</div>

		</>
		)
}