import React from 'react';
import './css/Header.css'
import Outdoor from './Outdoor.js';
import Map from './Map.js';
import About from './About.js'
import './Action.js'
import Home from './Home.js';
import imag from './img/lokesh.jpeg'
import images from './Team.js';
export default function Header(){
	return(
		<>

    <div class="modal fade" style={fades} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Team Members</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="container">
              <div className="row mx-5">
                  {
                    images.map((item,index)=>{
                        return(
                          <>
                          <div className="col-2">
                            <img src={item.imag} style={imagStyle}/>
                            <button className="btn btn-warning" style={btns} disabled>{item.Name}</button>
                          </div>

                          </>
                        )
                    })  
                  }
              </div>
          </div>



        </div>
      </div>
    </div>

		<nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">Indoor Navigation</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className="btn btn-dark" style={{"width":"150px"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Team Members</button>
        </div>
      </nav>
		</>

		)
}



const imagStyle={
  "height":"100px",
  "width":"100px",
  "margin":"10px 10px",
  "border":"1px solid lightgray",
  "borderRadius":"50px",
  "postion":"absolute",
  "left":"100px"
}


const display={
  "display":"block"
}


const fades = {
  "height":"400px",
  "width":"750px",
  "position":"absolute",
  "left":"250px",
  "top":"150px",
 "paddingBottom":"10px"
}


const btns ={
  "width":"100px",
  "margin":"0px 0px 10px 10px"
}