



function love (gain){
	document.getElementById("write").innerHTML = document.getElementById('write').innerHTML + gain;
	
}

function lov (){
	var g = document.getElementById('key').innerHTML;
	var x = document.getElementById("key").innerHTML.length;
	document.getElementById('key').innerHTML = g.substring(0,x-1);
}
function bar (gain){
	document.getElementById("key").innerHTML = document.getElementById('key').innerHTML + ' ';
	
}
function cle (){
	document.getElementById("key").innerHTML = ' ';
}
