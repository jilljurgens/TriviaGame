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
	



	//this is to go through the questions array with a for loop to display questions/answers
	function getNewQandA() {
		if (curIndex == Questions.length){
			gameOver();
			return;
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

	
	//this is the timer function set for 20 seconds
	var timeLeft = 20;
	var elem = $("#timer");
	var timerId = setInterval(countdown, 1000);

	function countdown() {
  		if (timeLeft == 0) {
   		curIndex ++;
    	getNewQandA();
 		outOfTime++;
 		timeLeft = 20;
 		}	

 		else {
     		$("#timer").text(timeLeft + ' seconds remaining');
    		timeLeft--;
 		}

	}



	function checkAnswer() {
		var answer = $(this).attr('correct');
		//console.log(answer);
		 if (answer == 'true') {
			$("#previousStat").html("Previous Answer was Correct!");
			totalCorrect++;
			curIndex++;
			getNewQandA();
			timeLeft = 20;
			countdown();

		}
		else if (answer == 'false') {
			$("#previousStat").html("Previous Answer was Incorrect");
			totalWrong++;
			curIndex++;
			getNewQandA();
			timeLeft = 20;
			countdown();
		}

	}

// This is the on click function to run the function to see if they got it correct
	$(".answerbtn").on("click", checkAnswer);

// This is to display the stats when the game is over
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