import react from 'react';
import './App.css';

import Main from './Ground/Main.js';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Table from './Components/Table.js';
import Map from './Components/Map.js';
import Mapper from './Components/Mapper.js';

import BarLoader from "react-spinners/HashLoader";
import React, { useState, useEffect } from 'react';

export default function App(){

  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(()=>{

    setTimeout(() => {
    setIsLoading(false);
    }, 4000);  
    })
    

  const override = {
  "position": "absolute",
  "top": "40%",
  "left": "45%"
};


   // <>
   //  <BarLoader color={"#000042"} isLoading={isLoading} css={override} size={150} />

   // </>
   //  :  

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

 