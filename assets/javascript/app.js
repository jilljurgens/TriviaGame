$(document).ready(function() {
	// create timer and wrap it around the funtions

	

	// create for loop to display questions and answers
	// create on click function to check if answer is correct or not. update wins, losses
	// create function to repopulate new question/anser
	// create out of time variable to count how many questions they ran out of time on
	// show the number of correct/incorrect/out of time at the end of the game
	var totalCorrect = 0;
	var totalWrong = 0;
	var outOfTime = 0;
	var curIndex = 0;

	var Questions = [{
			question: "this is my question",
			answers: [{
					correct: false,
					answer: "wronglu"
				},
				{
					correct: true,
					answer: "truly"
				},
				{
					correct: false,
					answer: "nope"
				},
				{
					correct: false,
					answer: "nada"
				}
			]
		},
		{
			question: "t22his is my question",
			answers: [{
					correct: false,
					answer: "wro22nglu"
				},
				{
					correct: true,
					answer: "tr22uly"
				},
				{
					correct: false,
					answer: "n22ope"
				},
				{
					correct: false,
					answer: "n22ada"
				}
			]

		},
				{
			question: "Julia Roberts starred with Richard Gere in the 1990 film Pretty Woman and which other film of the 1990s ... ?",
			answers: [{
					correct: false,
					answer: "My Best Friend's Wedding"
				},
				{
					correct: true,
					answer: "Runaway Bride"
				},
				{
					correct: false,
					answer: "Muriel's Wedding"
				},
				{
					correct: false,
					answer: "Father Of The Bride"
				}
			]

		}
	];
	
	//this is the timer function set for 30 seconds
	var n = 30;
	setTimeout(timer,1000);
		function startTimer() {
			n--;
			if (n>0){
				setTimeout(startTimer,1000);
			}
			$("#timer").text(n);
			//console.log(timer);	
   		 }
   	//this is a function to stop the timer	 
	function stopTimer() {
    clearTimeout(n);
	}


	function getNewQandA() {
		$("#question").text(Questions[curIndex].question);
		for (i = 0; i < Questions[curIndex].answers.length; i++) {
			var current = Questions[curIndex].answers[i]
			$("#answer" + parseInt(i + 1)).attr({
				correct: current.correct
			}).text(current.answer);
		}
		

	}
	//this is to call the first question and start the game
	getNewQandA();
	startTimer();

	// to get new ?, do curIndex ++
	function gameOver(){
		$("#previousStat").text("Game Over!You got " + totalCorrect + " Correct, " + totalWrong + " Wrong, and " + outOfTime + " you ran out of time. Refresh the page to play again!");
	}


	function checkAnswer() {
		var answer = $(this).attr('correct');
		console.log(answer);
		 if (answer == 'true') {
			console.log("true");
			$("#previousStat").html("Correct!");
			totalCorrect++;
			console.log(totalCorrect);
			curIndex++;
			getNewQandA();

		}
		else if (answer == 'false') {
			console.log("false");
			$("#previousStat").html("Incorrect");
			totalWrong++;
			console.log(totalWrong);
			curIndex++;
			getNewQandA();
		}
		else if (timer == 0){
			outOfTime++;
			console.log(outOfTime);
			getNewQandA();
		}
		else if (curIndex == Questions.length){
			console.log("game over");
			$(".answerbtn").hide();
			$("#question").hide();
			$("#timer").hide();
			gameOver();

			//write out html to show correct,incorrect, out of time
		}
		;

		console.log("curIndex: " + curIndex);
	}

	$(".answerbtn").on("click", checkAnswer);

});