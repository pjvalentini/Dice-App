// Problem...my nieces are always loosing the dice to their board games.
// Solution...create a virtual roll of the dice using a computer.

// Using a function to generate a random Numberbetween 1-12.
// Correlating the value of two (6 sided dice).
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * max) + min;
}
// This Function lets me set the min and max values of each die(6 sided)
function getRandomDieRoll() {
	return getRandomNumber(1, 6);
}

var img = document.querySelector(".dice");
// This onclick function can allow me to isolate the values of both dice...
// if double are rolled, you can now see that in the document.
img.onclick = function() {
	var dice1 = document.querySelector(".dice1");
	var dice2 = document.querySelector(".dice2");
	dice1.innerText = getRandomDieRoll();
	dice2.innerText = getRandomDieRoll();
};

img.onclick();

// Next stage will be to animate the dice so that the numbers are no longer
// printed but now they will be displayed as the actial dice in an animation.
