var number = 0;
var numCorrect = 0;

$(function() {
	loadQuestion();
});

function loadQuestion() {
	$("#question" + number).remove();
	$("span").hide();
	if (number == 15) {
		showScore();
	}
	
	number++;
	$("#question" + number).fadeIn({queue: false, duration: 1500});
	if (number % 2 == 0) {
		$("#question" + number).css("float", "right");
		$("#question" + number).css("margin-top", "75px");
		$("#question" + number).animate({marginRight:'31%'}, 1000);
	} else {
		$("#question" + number).animate({marginLeft:'29%'}, 1000);
	}
	$("#question" + number).css("position", "relative");
}

function retake() {
	location.reload();
}
	
function showScore() {
	$("#review").show();
	$("#review").html("You got " + numCorrect + " out of 15 correct. <br/>Your score is " 
		+ Math.round((numCorrect / 15) * 100) + "% <br/><button onclick='retake();'>Retake Test</button>");
}
	
function displayCorrect() {
	$("span").text("Correct!");
	$("span").css("color", "#006600");
}

function displayWrong() {
	$("span").text("Wrong!");
	$("span").css("color", "#990000");
}

function checkAnswers() {
	$("span").show();
	var answerKey = {1 : "true", 2 : "true", 3 : "false", 4 : "d", 
		5 : "b", 6 : "b", 7 : "true", 8 : "false", 9 : "true", 10 : "true",
		11 : "true", 12 : "false", 13 : "true", 14 : "true", 15 : "true"};

	if ($("input:radio[value=" + answerKey[number] + "]:checked").val()) {
		numCorrect++;
		displayCorrect();
	} else {
		displayWrong();
	}
	$("#answers" + number).remove();
	$("#continue" + number).css("display", "block");	
}


