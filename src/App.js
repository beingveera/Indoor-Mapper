import react from 'react';
import './App.css';

import Main from './Ground/Main.js';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Table from './Components/Table.js';
import Map from './Components/Map.js';
import Mapper from './Components/Mapper.js';




export default function App(){

// <div className="upper">
//       <Header />
//     </div>

//     <div className="middle">
//       <div> 
//       <Sidebar />

//       </div>
      
//       <div className="map">
//         <Main />
//       </div>
//     </div>



  return(
    <>

    <div className="upper">
      <Header />
   </div>

   <div className="middle">
      <Mapper />
   </div> 

    <Map />
    </>
    )
}

 