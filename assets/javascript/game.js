
// start up the document function

$(document).ready(function () {

    //create the random number that is to be reached by the guesses
    var targetNumber = Math.floor(Math.random() * 101 + 19);
    console.log(targetNumber);

    //create random numbers for each of the crystal images
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    //console.log(crystal1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    //console.log(crystal2);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    //console.log(crystal3);
    var crystal4 = Math.floor(Math.random() * 12 + 1);
    //console.log(crystal4);

    // create variable for number to attempt to match 
    $("#randomNum").text("Number to Guess: " + targetNumber);

    // players current result score
    var result = 0;
    $("#score").text(result);

    //added in the wins and losses variables
    var wins = 0;
    $(".wins").text("Wins: " + wins);

    var losses = 0;
    $(".losses").text("Losses: " + losses);

    //create functions that can restart the game after the goal has either been reached or gone over and lost
    function won() {
        wins++;
        $(".wins").text("Wins: " + wins);
    }

    function lost() {
        losses++;
        $(".losses").text("Losses: " + losses);
    };

    //a function for going over the number generated
    function overload() {
        if (result > targetNumber)
            result = 0;
        $("#randomNum").text(result);

        targetNumber = Math.floor(Math.random() * 101 + 19);
        console.log(targetNumber);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        console.log(crystal1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        console.log(crystal2);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        console.log(crystal3);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        console.log(crystal4);

        $("#randomNum").text("Number to Guess: " + targetNumber);

    }
    // function on what occurs when each crystal is clicked on
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

    $(".crystal2").on("click", function () {
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
    $(".crystal3").on("click", function () {
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
    $(".crystal4").on("click", function () {
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

});
