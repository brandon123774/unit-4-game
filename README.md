# unit-4-game

## Table of Contents
* Introduction
* Interesting bits of code
* Technologies Used
* How to use


## Introduction
In this program, there are four crystals and each of them have different values. The object of the game is to click on the crystals and reach the exact score of the number that the computer has generated. If the score is reached exactly, you win. However, if you are to go passed the score, you lose. 

## Bits of code

* This was used to print out the values of wins, losses, and total score onto the DOM or onto the wbpage itself
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalScoreText = document.getElementById("total-score-text");

* This is code in jquery that is used to demonstrate that the image of the id crystal is to be clicked for this function to take place
 $(".crystal-image").on("click", function() {
	
## Technologies
Project is created using the following:
* HTML
* CSS
* Javascript
* JQuery

# How to use
 Begin by clicking on a crystal and checking out what value it has. Then click on other crystals in order to reach the score of the computer generated number that appears on the screen.


	
