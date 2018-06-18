$(document).ready(readyFunction);

function readyFunction() {

	var currentDay;

	$("#monday").click(mondayClick);
	$("#tuesday").click(tuesdayClick);
	$("#wednesday").click(wednesdayClick);
	$("#thursday").click(thursdayClick);
	$("#friday").click(fridayClick);				

	function mondayClick() {
		currentDay = "monday";
		answerQuestion();
	}

	function tuesdayClick() {
		currentDay = "tuesday";
		answerQuestion();
	}

	function wednesdayClick() {
		currentDay = "wednesday";
		answerQuestion();
	}

	function thursdayClick() {
		currentDay = "thursday";
		answerQuestion();
	}

	function fridayClick() {
		currentDay = "friday";
		answerQuestion();
	}

	// TODO: Edit this function so that we can
	// determine if the user has class today 
	// depending on what day they select.
	function answerQuestion() {

	}

}