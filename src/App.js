import react from 'react';
import './App.css';

import Main from './Ground/Main.js';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Table from './Components/Table.js';


/*


 <div className="upper">
      <Header />
    </div>

    <div className="middle">
      <div> 
      <Sidebar />

      </div>
      
      <div className="map">
        <Main />
      </div>
    </div>

*/


export default function App(){
  return(
    <>
  
  <Table />

    </>
    )
}