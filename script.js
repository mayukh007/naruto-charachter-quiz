var a = true;
function getNav(){
	if( a == true){
	document.getElementById("s2").style.visibility = "hidden";
	document.getElementById("s1").style.transform = "rotate(26deg)";
	document.getElementById("s3").style.transform = "rotate(-26deg)";
	document.getElementById("nav1").style.height = "100vh";
	document.getElementById("a1").style.visibility = "visible";
	document.getElementById("a2").style.visibility = "visible";
	document.getElementById("a3").style.visibility = "visible";
	a = false;
}
	else{
	document.getElementById("s2").style.visibility = "visible";
	document.getElementById("s1").style.transform = "rotate(0deg)";
	document.getElementById("s3").style.transform = "rotate(0deg)";
	document.getElementById("nav1").style.height = "0vh";
	document.getElementById("a1").style.visibility = "hidden";
	document.getElementById("a2").style.visibility = "hidden";
	document.getElementById("a3").style.visibility = "hidden";
	a = true;
}	

}
function getQ(){
	document.getElementById("h").style.visibility = "hidden";
	document.getElementById("con").style.visibility="visible";
	document.getElementById("foot").style.top = "160vh";
}
function getH(){
	document.getElementById("h").style.visibility = "visible";
	document.getElementById("con").style.visibility="hidden";
	getNav();
	document.getElementById("foot").style.top = "100vh";
}
