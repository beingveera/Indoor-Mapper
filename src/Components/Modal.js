import React,{useState} from 'react';
import './Reaction.js';

export default function Modal(){
		const [state,SetState] = useState(false);


	return(
	<>
		<button type="button" class="btn btn-primary" id="modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
		  Launch static backdrop modal
		</button>

		<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
		        ...
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        <button type="button" class="btn btn-primary">Understood</button>
		      </div>
		    </div>
		  </div>
		</div>

	</>

		)
}
