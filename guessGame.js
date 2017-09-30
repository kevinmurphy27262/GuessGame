var userGuess = parseInt(document.getElementsByName("userGuess"), 10);

var answer = Math.round(Math.random() * 100);

var game = function() {
	
	if (answer > 50) {
		console.log("That's high!");
	}
	else {
		console.log("That's low!");
	}
	
}

console.log(answer);

console.log(game());

console.log("Hello World!")