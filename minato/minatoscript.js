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
function getsubmit(){
	document.getElementById("submit").disabled = false;

}	

var k =20;
var count  = 0;
function getNext(){
	let a = k;
	while(a<= 20 && a>=17){
		if(document.getElementById("op"+a).checked == true){
			if(document.getElementById("op"+a).value == 'naruto'){
				count = count+100;
				getcount(count);
				k =k-4;
				
				return 0;
			}else{
				k =k-4;
			    return 0;
			}

		}
		a--;
	}
	while(a<= 16 && a>=13){
	if(document.getElementById("op"+a).checked == true){
			if(document.getElementById("op"+a).value == 'Rasengan'){
				count = count+100;
				getcount(count);
				k =k-4;
			    return 0;
			}else{
				k =k-4;
			    return 0;
			}
		}
		a--;
	 	
		 }
	 while(a<= 12 && a>=9){
	if(document.getElementById("op"+a).checked == true){
			if(document.getElementById("op"+a).value == 'Flying Raijin'){
				count = count+100;
				getcount(count);
				k =k-4;
			    return 0;
			}else{
				k =k-4;
			    return 0;
			}
		}
		a--;
	 	
		 }
	 while(a<= 8 && a>=5){
	if(document.getElementById("op"+a).checked == true){
			if(document.getElementById("op"+a).value == 'yellow'){
				count = count+100;
				getcount(count);
				k =k-4;
			    return 0;
			}else{
				k =k-4;
			    return 0;
			}
		}
		a--;
	 	
		 }
	while(a<= 4 && a>=1){
	if(document.getElementById("op"+a).checked == true){
			if(document.getElementById("op"+a).value == '10'){
				count = count+100;
				getcount(count);
				k =k-4;
			    return 0;
			}else{
				k =k-4;
			    return 0;
			}
		}
		a--;
	 	
		 }
}
function getcount(count){
var i =0;
			document.getElementById("sc").innerHTML = count;
			document.getElementById("cr").innerHTML = count/(i+100);
		 i = i+100;


}