

function add (str){
	if(str == "clear"){
		var c = " ";
		document.getElementById('write').innerHTML = c;
	}else{
	document.getElementById("write").innerHTML = document.getElementById('write').innerHTML + str;
	}
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
