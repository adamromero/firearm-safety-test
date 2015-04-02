$(function() {
	//function loadQuestion() {
		$("#question1").fadeIn({queue: false, duration: 1500});
		$("#question1").animate({marginLeft:'+=475px'}, 1000);
	//}
	function checkAnswers() {
		var numCorrect = 0;
		if (document.frmQuestions.optQuestion1[0].checked) {
			numCorrect++;
		} 
		if (document.frmQuestions.optQuestion2[0].checked) {
			numCorrect++;
		} 
	}
});
