var answer = Math.round(Math.random() * 100);

var game = function() {
	
	var userGuess = parseInt(document.getElementsByName("userGuess")[0].value);
	
	var guessMax = 100;
	var guessMin = 1;
	
	function {
		
		if (userGuess < guessMin) {
			alert("Guess again, low");
		}
		else if {
		userGuess > guessMax);
		}
	}
	
	/*function() {
	
		if (answer > userGuess) {
		alert("Nope! Too low!");
		}
		else if (userGuess == NaN) {
		alert("Not a number, guess again!");
		}
		else if (answer < userGuess) {
		alert("Nope! Too high!");
		}
		else {
		alert("You Guessed it correctly! Genius!");
		}
	
	}*/
	
}

var limits = function() {
	
	if(answer > 100) {
		alert("Your guess was too high, guess again!");
	}
	else if (answer <= 0) {
		alert("Your guess was too low, guess again!");
	}
}

console.log(answer);

console.log("Hello World!");