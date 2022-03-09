import react from 'react';
import axios from 'axios';

export default function Table(){
			axios.get('https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev')
			.then((vals)=>{
				console.log(vals);
			})
			.error((err)=>{
				console.log(err);
			})

	return(
		<>
		


		</>
		)
}