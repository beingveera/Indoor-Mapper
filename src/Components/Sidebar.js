import React,{useState} from 'react';
import './Action.js';

import image from './img/map.png';
import map from './img/final.png';

import Accounts from '../Ground/Accounts.js'

import './css/Sidebar.css';

// import location ,{Floor} from './Position.js';

export default function Sidebar(){

	function Reload(){
		window.location.reload();
	}
		
	return(
		<>

		<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		  <div class="modal-dialog modal-xl">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="staticBackdropLabel">Map Navigation</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
		        <img src={map} style={ima}/>
		      </div>
		    </div>
		  </div>
		</div>

		<div className="outer">
		 	
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Start">
			  Start Point
			</button>

		    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#End">
			  End Point
			</button>

			 <button type="button" className="btn btn-secondary" onClick={Reload}>
			  Reset Position
			</button>


			<div className=" my-3 container">
				<div className="end"><p className="tag">Start Point</p></div>
				<div className="start"><p className="tag">End Point</p></div>
			</div>

			<div>
				<img src={image} height = "150px" width="230px"/>
			</div>


			<div className="modal fade"  id="Start" tabindex="-1" aria-labelledby="StartLabel" aria-hidden="true">
			  <div className="modal-dialog">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="StartLabel">Select Your Start Position</h5>
			        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			      </div>
			      <div className="modal-body">
			        
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="Accounts">Accounts</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="office">College Office</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="director">Director Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="faculty">Faculty Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="mech1">Mech Lab 1</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="student">Student Section</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="btoilet">Boys Toilet</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="theater">Theater Class</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="gtoilet">Girls Toilet</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="incharge">Incharge Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="mech2">Mech Lab 2</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="cantin">Cantin</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="sports">Sports Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="arvr">AR/VR Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="cplab">CP Lab </button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-primary" id="mp">MP Theater</button>

			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>

			<div className="modal fade" id="End" tabindex="-1" aria-labelledby="EndLabel" aria-hidden="true">
			  <div className="modal-dialog">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="EndLabel">Select Your End Position</h5>
			        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			      </div>
			      <div className="modal-body">
			        	

			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="Acc">Accounts</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="off">College Office</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="dirs">Director Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="fac">Faculty Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="mec">Mech Lab 1</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="stu">Student Section</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="bto">Boys Toilet</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="the">Theater Class</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="gto">Girls Toilet</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="inc">Incharge Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="mec1">Mech Lab 2</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="can">Cantin</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="spo">Sports Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="arv">AR/VR Room</button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="cpl">CP Lab </button>
			        <button type="button" style={{"margin-left":"25px"}} className="btn btn-danger" id="mpt">MP Theater</button>

			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>

		</div>

		</>
		)
}


const ima = {
	"height":"500px",
	"width":"1100px"

}