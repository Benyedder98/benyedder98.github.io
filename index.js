//const username = prompt("What is Your Username?");// here we get users name

// A function that generates the random number
function randomNumber(range){
    randomGuess = Math.floor(Math.random() * (range- 1) + 1 )// to avoid the number 0 popping up
    return randomGuess;
}
function beginGame(){
    let play = true;// this is used to control the games state(whether or not , the user is playing)
    let range = 2;// this is  the initial setting for level 1
    while(play){// this loop makes the game start and ensures its continuous
        let randomGuess = randomNumber(range);// this generates the random guess using earlier defined function
        console.log(`This is level ${range-1}`);// shows current level
        let userInput = prompt("guess a number");// gets the users guess
        if(userInput == randomGuess || userInput=="X"){// compares the users input  with random number , added x as a cheat code 
            console.log(`The hidden number is ${randomGuess}`);
            console.log(`yayy ${username}, you guessed the number correctly`);
            range += 1;// this increases the level and the range of the guess
        }else{// ends game if users guess is wrong
            console.log(`${username}, you guessed wrongly`);
            console.log("exiting game ............");
            play = false;// ends the loop
            let playAgain = confirm("would you like to play again");// checks if user is still interested
            if(playAgain) beginGame();//restarts game
            console.log(`Bye ${username}, you can type 'beginGame()' into the console to restart the game`);//ends game finally
        }
    }
}
beginGame();// initiates function that begins game
