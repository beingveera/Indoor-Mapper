import React from 'react';

import Sidebar from './Sidebar.js';
import Header from './Header.js';
import Main from '../Ground/Main.js'

import './Action.js';
export default function Home(){
  return(
      <>
          <div className="upper">
            <Header />
          </div>
      
          <div className="middle">
            <Sidebar />
          </div> 
           
          <div className="map">
              <Main />
          </div>

      </>
    )
}