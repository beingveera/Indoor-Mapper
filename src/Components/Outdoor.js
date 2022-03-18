import React from 'react';
import Maps from './Map.js';
import Mapper from './Mapper.js'

export default function Outdoor(){
	return(
		<>
			<Mapper />
			<div className="maps">
				<Maps />
			</div>
		</>

		)
}