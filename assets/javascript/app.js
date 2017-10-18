$(document).ready(function() {

	var totalCorrect = 0;
	var totalWrong = 0;
	var outOfTime = 0;
	var curIndex = 0;

	var Questions = [{
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

		},{
			question: "Which group released its debut album The Sign in 1993 ... ?",
			answers: [{
					correct: false,
					answer: "ABBA"
				},
				{
					correct: false,
					answer: "a-ha"
				},
				{
					correct: false,
					answer: "Backstreet Boys"
				},
				{
					correct: true,
					answer: "Ace of Base"
				}
			]

		},{
			question: "Which character was introduced in the 1992 video game Sonic The Hedgehog 2 ... ?",
			answers: [{
					correct: true,
					answer: "Tails"
				},
				{
					correct: false,
					answer: "Yoshi"
				},
				{
					correct: false,
					answer: "Clank"
				},
				{
					correct: false,
					answer: "Slippy Toad"
				}

			]

		},{
			question: "Dolly, born in 1996 as the first successfully cloned mammal, was which type of animal... ?",
			answers: [{
					correct: false,
					answer: "Cow"
				},
				{
					correct: true,
					answer: "Sheep"
				},
				{
					correct: false,
					answer: "Dog"
				},
				{
					correct: false,
					answer: "Pig"
				}

			]

		},{
			question: "What was featured on the cover of the 1991-released album Nevermind by Nirvana ... ?",
			answers: [{
					correct: false,
					answer: "A man drinking beer in a bar"
				},
				{
					correct: false,
					answer: "A musician smashing his guitar"
				},
				{
					correct: true,
					answer: "A naked baby under water"
				},
				{
					correct: false,
					answer: "Dali's The Persistence of Memory"
				}

			]

		},{
			question: "Who played the mysterious young man Paul in the 1993 film Six Degrees Of Separation ... ?",
			answers: [{
					correct: true,
					answer: "Will Smith"
				},
				{
					correct: false,
					answer: "Kevin Bacon"
				},
				{
					correct: false,
					answer: "Brad Pitt"
				},
				{
					correct: false,
					answer: "Jamie Foxx"
				}

			]

		},{
			question: "George Clooney starred as Dr. Douglas Ross on which TV series from 1994-99 ... ?",
			answers: [{
					correct: false,
					answer: "Chicago Hope"
				},
				{
					correct: false,
					answer: "Dr. Quinn, Medicine Woman"
				},
				{
					correct: false,
					answer: "Crossing Jordan"
				},
				{
					correct: true,
					answer: "ER"
				}

			]

		},{
			question: "Which video game series that began in 1996 features Raccoon City and dealings with zombies ... ?",
			answers: [{
					correct: false,
					answer: "The Sims"
				},
				{
					correct: true,
					answer: "Resident Evil"
				},
				{
					correct: false,
					answer: "Call Of Duty"
				},
				{
					correct: false,
					answer: "God Of War"
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
    clearTimeout();
	}
	//			clearTimeout(startTimer);



	function getNewQandA() {
		if (curIndex == Questions.length){
			console.log("game over");
			gameOver();
			return;
			//out of time not working, game over not working, reset timer not working
		}
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

	//var clearTimer = setTimeout(timer, 1000);
	



	function checkAnswer() {
		var answer = $(this).attr('correct');
		//console.log(answer);
		 if (answer == 'true') {
			console.log("true");
			$("#previousStat").html("Correct!");
			totalCorrect++;
			console.log(totalCorrect);
			curIndex++;
			stopTimer();
			//clearTimeout(clearTimer);
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
			curIndex++;
			console.log(outOfTime);
			getNewQandA();
		}

		console.log("curIndex: " + curIndex);
	}

	$(".answerbtn").on("click", checkAnswer);

		// to get new ?, do curIndex ++
	function gameOver(){
		$("#previousStat").text("Game Over!   Refresh the page to play again!");
		$("#showCorrect").text("You got " + totalCorrect + " correct!");
		$("#showIncorrect").text("You got " + totalWrong +" incorrect.");
		$("#showTimeOut").text("You ran out of time " +  outOfTime + " times.");
		$(".answerbtn").hide();
		$("#question").hide();
		$("#timer").hide();
	}

});