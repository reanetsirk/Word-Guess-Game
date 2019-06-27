// import * as  from "";



    var computerChoices = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    var wins = 0
    var losses = 0
    var guessesLeft = 9
    var lettersGuesses =[]
    var computerGuesses = []

    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var guessesRemaining = document.getElementById('guessesLeft')
    var userGuesses = document.getElementById('userGuesses')
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
   
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    // create a function to reset the game

    function resetGame() {
        guessesLeft = 9;
        guessesRemaining.textContent = "Guesses Left: " + guessesLeft;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("reset computer guess=" + computerGuess);
        lettersGuesses = []
        userGuesses.textContent = "User guesses thus far: " + lettersGuesses;
    }
    
    // this runs on every key press
    document.onkeyup = function(event) {
    // capture letter press in a variable
    console.log("computer guess=" + computerGuess)
    var userGuess = event.key;
    console.log(userGuess)
    // decrementing guesses left by 1 for every key press
    guessesLeft--
    guessesRemaining.textContent = "Guesses Left: " + guessesLeft; 

    console.log(guessesLeft)
    // push userGuess which is the letter pressed into the lettersGuessed array so the user can see 
    // their past guesses
     lettersGuesses.push(userGuess)
     console.log(lettersGuesses)

     userGuesses.textContent = "User Guesses Thus Far: " + lettersGuesses.join(", ")

    

    if (userGuess === computerGuess) {
        // increment wins variable
        wins++;


        // write html to page
 winsText.textContent = "Wins: " + wins;
        // reset game
        resetGame();

    }

    if (guessesLeft === 0) {
        losses++;
        // write html to page
        lossesText.textContent = "Losses: " + losses;
        // reset game
        resetGame();
    }
    }
    // directionsText.textContent = "";


    // userChoiceText.textContent = "You chose: " + userGuess;
    //     // computerChoiceText.textContent = "The computer chose: " + computerGuess;
    //     winsText.textContent = "wins: " + wins;
    //     losesText.textContent = "losses: " + losses;

    //     var html = "<p>So, you think your a Phychic, huh?</p>" +
    //       "<p>Wins: " + wins + "</p>" +
    //       "<p>Losses: " + losses + "</p>" +
    //       "<p>Guesses left: " + guessesLeft + "</p>" +
    //       "<p>Your guesses so far: " + lettersGuessed + "</p>";

    // }

//  <script type="text/javascript" src="asset/javascript/java.js"> </script> 
