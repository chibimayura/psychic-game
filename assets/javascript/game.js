//stores the score and life points
var winScore = 0;
var lossScore = 0;
var lifePoints = 10;

var alphabet = 'abcdefghijklmnopqrstuvwxyz' //stores the string of the alphabet
var ranAlphaIndex; //stores a random index number
var answer = pickAlphabet(); //stores the randomly selected alphabet from pickAlphabet()
var guess = []; //stores the keys the user types into an array

//selects which id to modify in the html
var win = document.querySelector("#win");
var loss = document.querySelector("#loss");
var life = document.querySelector("#life");
var guesses = document.querySelector('#guesses');

//prints the scores and lifepoints on the html screen
win.innerText = winScore;
loss.innerText = lossScore;
life.innerText = lifePoints;


//randomly picks an alphabet letter
function pickAlphabet(){
	ranAlphaIndex = Math.floor(Math.random() * alphabet.length);
	return alphabet[ranAlphaIndex];
}

//resets the lifePoints, answer, and guess log
function resetGame() {
	answer = pickAlphabet();								
	guess = [];
	lifePoints = 10;
	life.innerText = lifePoints;
	guesses.innerText = guess;
}

//logs the key press onto the screen
function guessingGame(event){
	var key = event.key;

	guess.push(key);

	//if user guesses the correct key +1 win score
	if(key != answer && lifePoints != 0){
		document.body.style.backgroundColor = "#ffffff"; //turns white to make it easier to see

		lifePoints--; //subtracts lifePoints by 1
		life.innerText = lifePoints; //prints current lifepoints on page
		guesses.innerText = guess; //updates the text in class guesses

	} else if(key == answer) {
		document.body.style.backgroundColor = "#b3ffb3"; //turns green bc you got the right answer

		resetGame();										
		winScore++; //adds winScore by 1
		win.innerText =  winScore; //updates current winScore on page

	} else if(lifePoints == 0){
		document.body.style.backgroundColor = "#ffb3b3"; //turns red when player loses

		resetGame();
		lossScore++; //adds lossScore by 1
		loss.innerText = lossScore; //updates current lossScore on page
	}
}

//runs the logGuess function on user key press
document.onkeyup = guessingGame;