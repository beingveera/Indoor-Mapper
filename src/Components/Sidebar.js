import react,{useState} from 'react';

import Accounts from '../Ground/Accounts.js'

import './css/Sidebar.css';

import location ,{Floor} from './Position.js';

export default function Sidebar(){
		
				return(
		<>
		<div className="outer">
		 	
			<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Start">
			  Start Point
			</button>

		    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#End">
			  End Point
			</button>


			<div class="modal fade"  id="Start" tabindex="-1" aria-labelledby="StartLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="StartLabel">Select Your Start Position</h5>
			        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			      </div>
			      <div class="modal-body">
			        
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Accounts</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >College Office</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Director Room</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Faculty Room</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Mech Lab 1</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Student Section</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Boys Toilet</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Theater Class</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Girls Toilet</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Incharge Room</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Mech Lab 2</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Cantin</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >Sports Room</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >AR/VR Room</button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >CP Lab </button>
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-primary" >MP Theater</button>

			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>

			<div class="modal fade" id="End" tabindex="-1" aria-labelledby="EndLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="EndLabel">Select Your End Position</h5>
			        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			      </div>
			      <div class="modal-body">
			         {
			        	location.map((points)=>{
			        		return(
			        <button type="button" style={{"margin-left":"25px"}} class="btn btn-danger">{points}</button>
			        		)
			        	})
			        }
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>

		</div>

		</>
		)
}