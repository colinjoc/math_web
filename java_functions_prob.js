function show_ans_1() {
	document.getElementById('answer_1').style.display = "block";
}

function check_ans_1(){
	var input = document.getElementById('input_ans_1');
	if (input.value==0.5){
		document.getElementById('correct_1').style.display = "block";
        	document.getElementById('incorrect_1').style.display = "none";	
		document.getElementById('correct_1').style.color = "green";			
		}	
	else{
		document.getElementById('incorrect_1').style.display = "block";	
        	document.getElementById('correct_1').style.display = "none";	
		document.getElementById('incorrect_1').style.color = "red";			
		}
}

/*--------------------------------------------------------*/
function show_ans_2() {
	document.getElementById('answer_2').style.display = "block";
}

function check_ans_2(){
	var input = document.getElementById('input_ans_2');
	if (input.value==0.25){
		document.getElementById('correct_2').style.display = "block";
        	document.getElementById('incorrect_2').style.display = "none";	
		document.getElementById('correct_2').style.color = "green";			
		}	
	else{
		document.getElementById('incorrect_2').style.display = "block";	
        	document.getElementById('correct_2').style.display = "none";	
		document.getElementById('incorrect_2').style.color = "red";			
		}
}
/*--------------------------------------------------------*/
function show_ans_3() {
	document.getElementById('answer_3').style.display = "block";
}

