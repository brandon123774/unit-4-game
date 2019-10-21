# unit-4-game

## Table of Contents
* Introduction
* Interesting bits of code
* Technologies Used
* How to use


## Introduction
In this program, there are four crystals and each of them have different values. The object of the game is to click on the crystals and reach the exact score of the number that the computer has generated. If the score is reached exactly, you win. However, if you are to go passed the score, you lose. 

## Bits of code

* This was used to tell the program that the user went passed the number that they were supposed to get and that the game will reset

 function overload() {
        if (result > targetNumber)
            result = 0;
        $("#score").text(result);

        targetNumber = Math.floor(Math.random() * 102 + 19);
        //console.log(targetNumber);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        //console.log(crystal1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        //console.log(crystal2);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        //console.log(crystal3);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        //console.log(crystal4);

        $("#randomNum").text("Number to Guess: " + targetNumber);

    }

* This is code in jquery that is used to demonstrate that the image of the first crystal is to be clicked for this function to take place

  $(".crystal1").on("click", function () {
        result = result + crystal1;
        console.log(result);
        $("#score").text(result);

        if (result === targetNumber) {
            won();
        } else if (result > targetNumber) {
            lost();
            overload();
        }
    })
	
## Technologies
Project is created using the following:
* HTML
* CSS
* Javascript
* JQuery

# How to use
 Begin by clicking on a crystal and checking out what value it has. Then click on other crystals in order to reach the score of the computer generated number that appears on the screen.


	
