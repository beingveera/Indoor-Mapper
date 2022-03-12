window.addEventListener('load',Main);

function Main(){

document.getElementById('Acc').addEventListener('click',Accounts);
document.getElementById('off').addEventListener('click',Office);
document.getElementById('dirs').addEventListener('click',Director);
document.getElementById('fac').addEventListener('click',Faculty);
document.getElementById('mec').addEventListener('click',Mech1);
document.getElementById('stu').addEventListener('click',Student);
document.getElementById('bto').addEventListener('click',Btoilet);
document.getElementById('the').addEventListener('click',Theater);
document.getElementById('gto').addEventListener('click',Gtoilet);
document.getElementById('inc').addEventListener('click',Incharge);
document.getElementById('mec1').addEventListener('click',Mech2);
document.getElementById('can').addEventListener('click',Cantin);
document.getElementById('spo').addEventListener('click',Sports);
document.getElementById('arv').addEventListener('click',Arvr);
document.getElementById('cpl').addEventListener('click',Cplab);
document.getElementById('mpt').addEventListener('click',MP);

	
	function Accounts(){
		const acc = document.getElementById('acc');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('Acc').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Office(){
		const acc = document.getElementById('officeRoom');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('off').setAttribute("class","btn btn-warning")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}

	function Director(){
		const acc = document.getElementById('dir');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('dirs').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Faculty(){
		const acc = document.getElementById('facul');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('fac').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}


	function Mech1(){
		const acc = document.getElementById('mechn1');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('mec').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Student(){
		const acc = document.getElementById('stud');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('stu').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}


	function Btoilet(){
		const acc = document.getElementById('Boys');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('bto').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Theater(){
		const acc = document.getElementById('clss');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('the').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}


	function Gtoilet(){
		const acc = document.getElementById('Girls');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('gto').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Incharge(){
		const acc = document.getElementById('inchi');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('inc').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}


	function Mech2(){
		const acc = document.getElementById('mechn2');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('mec1').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Cantin(){
		const acc = document.getElementById('cant');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('can').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}


	function Sports(){
		const acc = document.getElementById('sprts');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('spo').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}


	function Arvr(){
		const acc = document.getElementById('Av');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('arv').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}

	
	function Cplab(){
		const acc = document.getElementById('clab');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('cpl').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mpt').setAttribute("class","btn btn-secondary disabled")
	}
	

	function MP(){
		const acc = document.getElementById('Mp');
		acc.style.backgroundColor="rgba(255,0,0,.8)";
		acc.style.color="white"
		document.getElementById('mpt').setAttribute("class","btn btn-warning")
		document.getElementById('off').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('dirs').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('fac').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('stu').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('bto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('the').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('gto').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('inc').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('mec1').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('can').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('spo').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('arv').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('cpl').setAttribute("class","btn btn-secondary disabled")
		document.getElementById('Acc').setAttribute("class","btn btn-secondary disabled")
	}
	


}