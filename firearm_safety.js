var number = 0;
var numCorrect = 0;

$(function() {
	loadQuestion();
});

function loadQuestion() {
	$("#question" + number).remove();
	$("span").hide();
	number++;
	$("#question" + number).fadeIn({queue: false, duration: 1500});
	$("#question" + number).animate({marginLeft:'29%'}, 1000);
	$("#question" + number).css("position", "relative");
}
	
function displayCorrect() {
	$("span").text("Correct!");
	$("span").css("color", "#009933");
}

function displayWrong() {
	$("span").text("Wrong!");
	$("span").css("color", "#CC0000");
}

function checkAnswers() {
	$("span").show();
	if (number == 1) {
		if ($("input:radio[value=true]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers1").remove();
		$("#continue1").css("display", "block");
	} else if (number == 2) {
		if ($("input:radio[value=true]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers2").remove();
		$("#continue2").css("display", "block");
	} else if (number == 3) {
		if ($("input:radio[value=false]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers3").remove();
		$("#continue3").css("display", "block");
	} else if (number == 4) {
		if ($("input:radio[value=d]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers4").remove();
		$("#continue4").css("display", "block");
	} else if (number == 5) {
		if ($("input:radio[value=b]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers5").remove();
		$("#continue5").css("display", "block");
	} else if (number == 6) {
		if ($("input:radio[value=b]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers6").remove();
		$("#continue6").css("display", "block");
	} else if (number == 7) {
		if ($("input:radio[value=true]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers7").remove();
		$("#continue7").css("display", "block");
	} else if (number == 8) {
		if ($("input:radio[value=false]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers8").remove();
		$("#continue8").css("display", "block");
	} else if (number == 9) {
		if ($("input:radio[value=true]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers9").remove();
		$("#continue9").css("display", "block");
	} else if (number == 10) {
		if ($("input:radio[value=true]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers10").remove();
		$("#continue10").css("display", "block");
	} else if (number == 11) {
		if ($("input:radio[value=true]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers11").remove();
		$("#continue11").css("display", "block");
	} else if (number == 12) {
		if ($("input:radio[value=false]:checked").val()) {
			numCorrect++;
			displayCorrect();
		} else {
			displayWrong();
		}
		$("#answers12").remove();
		$("#continue12").css("display", "block");
	}
}

