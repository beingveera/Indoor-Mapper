import react from 'react';
import './css/Header.css'
import Outdoor from './Outdoor.js';
import Map from './Map.js';
import About from './About.js'

import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

export default function Header(){
	return(
		<>
    <Router>
		<nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">Indoor Navigation</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Outdoor">OutDoor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Outdoor">Team</Link>
              </li>
              
            </ul>
          </div>

        </div>
      </nav>

      <Routes>
        <Route path="/Outdoor" exact element={<Outdoor />} />
        <Route path="/About" exact element={<About />} />

      </Routes>

      </Router>
		</>

		)
}