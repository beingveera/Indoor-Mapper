import React from 'react';
import './css/Header.css'
import Outdoor from './Outdoor.js';
import Map from './Map.js';
import About from './About.js'
import './Action.js'
import Home from './Home.js';


export default function Header(){
	return(
		<>
		<nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">Indoor Navigation</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>
		</>

		)
}