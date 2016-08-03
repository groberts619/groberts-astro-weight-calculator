function theAnswer(){
	var x = document.getElementById("weight").value;
	var y = document.getElementById("planets").value;
	var z = x * y;
	if (!isNaN(z) ){
		document.getElementById("answerField").innerHTML="Your weight is " + Math.round(z) + " space pounds!";
		}
		else {
	  	document.getElementById("answerField").innerHTML="Not a valid input";
		}
	}