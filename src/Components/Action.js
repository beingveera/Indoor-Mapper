window.addEventListener('load',Main);

function Main(){

document.getElementById('Accounts').addEventListener('click',Accounts);
document.getElementById('office').addEventListener('click',Office);
document.getElementById('director').addEventListener('click',Director);
document.getElementById('faculty').addEventListener('click',Faculty);
document.getElementById('mech1').addEventListener('click',Mech1);
document.getElementById('student').addEventListener('click',Student);
document.getElementById('btoilet').addEventListener('click',Btoilet);
document.getElementById('theater').addEventListener('click',Theater);
document.getElementById('gtoilet').addEventListener('click',Gtoilet);
document.getElementById('incharge').addEventListener('click',Incharge);
document.getElementById('mech2').addEventListener('click',Mech2);
document.getElementById('cantin').addEventListener('click',Cantin);
document.getElementById('sports').addEventListener('click',Sports);
document.getElementById('arvr').addEventListener('click',Arvr);
document.getElementById('cplab').addEventListener('click',Cplab);
document.getElementById('mp').addEventListener('click',MP);

	
	function Accounts(){
		const acc = document.getElementById('acc');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042";
		document.getElementById('Accounts').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Office(){
		const acc = document.getElementById('officeRoom');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('office').setAttribute("class","btn btn-info")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}

	function Director(){
		const acc = document.getElementById('dir');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042";
		document.getElementById('director').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Faculty(){
		const acc = document.getElementById('facul');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('faculty').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}


	function Mech1(){
		const acc = document.getElementById('mechn1');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('mech1').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Student(){
		const acc = document.getElementById('stud');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('student').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}


	function Btoilet(){
		const acc = document.getElementById('Boys');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('btoilet').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Theater(){
		const acc = document.getElementById('clss');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('theater').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}


	function Gtoilet(){
		const acc = document.getElementById('Girls');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('gtoilet').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Incharge(){
		const acc = document.getElementById('inchi');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('incharge').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}


	function Mech2(){
		const acc = document.getElementById('mechn2');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('mech2').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Cantin(){
		const acc = document.getElementById('cant');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('cantin').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}


	function Sports(){
		const acc = document.getElementById('sprts');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('sports').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}


	function Arvr(){
		const acc = document.getElementById('Av');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('arvr').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Cplab(){
		const acc = document.getElementById('clab');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('cplab').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mp').setAttribute("class","btn btn-secondary disabled")
	}
	

	function MP(){
		const acc = document.getElementById('Mp');
		acc.style.backgroundColor= "rgba(0,255,0,.8)";
		acc.style.color="#000042"
		document.getElementById('mp').setAttribute("class","btn btn-info")
		document.getElementById('office').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('director').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('faculty').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('student').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('btoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('theater').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gtoilet').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('incharge').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mech2').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cantin').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('sports').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arvr').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cplab').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Accounts').setAttribute("class","btn btn-secondary disabled")
	}
	


}