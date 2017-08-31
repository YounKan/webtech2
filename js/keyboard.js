

function add (str){

	document.getElementById("write").innerHTML = document.getElementById('write').innerHTML + str;

}

function del (){
	var g = document.getElementById('write').innerHTML;
	var x = document.getElementById("write").innerHTML.length;
	document.getElementById('write').innerHTML = g.substring(0,x-1);
}
function spacebar (str){
	document.getElementById("write").innerHTML = document.getElementById('write').innerHTML + ' ';
	
}

function tab (str){
	document.getElementById("write").innerHTML = document.getElementById('write').innerHTML + '      ';
	
}


function enter (str){
	document.getElementById("write").innerHTML = document.getElementById('write').innerHTML + "\n";
	
}
