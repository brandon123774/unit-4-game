// function getRandomNumber(min, max)  {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//}

//create the random number that is to be reached by the guesses
  var targetNumber = Math.floor(Math.random() * 19 + 101);

  $("#number-to-guess").text(targetNumber);

  //added in the wins and losses variables
  var wins = 0;
  var losses = 0;

  // create variable counter
  var counter = 0;

  //create variables from the HTML document
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var totalScoreText = document.getElementById("total-score-text");
    

  // create an array with the crystal numbers
  var crystalNumbers = [3, 12, 11, 4];

  // Create a for loop to create crystals for every crystalnumbers.
  for (var i = 0; i < crystalNumbers.length; i++) {

    // images of the crystals using jQuery to tag images in
    var imageCrystal1 = $("<img>");
    // var imageCrystal2 = $("<img>");
    // var imageCrystal3 = $("<img>");
    // var imageCrystal4 = $("<img>");

    // add the crystals to the crystal class to then show up on screen
    
    imageCrystal1.addClass("crystal-image");
    // imageCrystal2.addClass("crystal-image");
    // imageCrystal3.addClass("crystal-image");
    // imageCrystal4.addClass("crystal-image");

    // Link in the actual images of the four crystals
    imageCrystal1.attr("src", "assets/images/Dragon.png");
    // imageCrystal2.attr("src", "assets/images/Fire.png");
    // imageCrystal3.attr("src", "assets/images/Grass.png");
    // imageCrystal4.attr("src", "assets/images/Water.png");

    // the imageCrystals will have the set number data linked to them respectively from the crystalNumbers array
    imageCrystal1.attr("data-crystalvalue", crystalNumbers[i]);
    // imageCrystal2.attr("data-crystalvalue", crystalNumbers[i]);
    // imageCrystal3.attr("data-crystalvalue", crystalNumbers[i]);
    // imageCrystal4.attr("data-crystalvalue", crystalNumbers[i]);

    // the crystals will be present on the page/ appended to the webpage
    $("#crystals").append(imageCrystal1);
    // $("#crystals").append(imageCrystal2);
    // $("#crystals").append(imageCrystal3);
    // $("#crystals").append(imageCrystal4);
  }

  // need to click on a crystal
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

     var crystalValue = ($(imageCrystal1).attr("data-crystalvalue"));
     crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

    function restart() {
        console.log("RESTART")
        winsText.innerHTML = wins;
        lossesText.innerHTML = losses;
      
        // computerInput = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        // console.log(computerInput);
        // guessesLeft = 9;
        // lettersClicked = [];
        // guessesLeftText.innerHTML = guessesLeft;
        // guessesText.innerHTML = lettersClicked;
      }
      
      
      restart()

  });