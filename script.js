//WRITE YOUR CODE BELOW

// Set a variable for game choices in an array i.e. [R, P, S]


// Eventually get playerChoice by using var playerChoice = prompt("What do you choose?") - R, P, S
// Then write out all the possible variations
// if playerChoice == computerChoice    - tie
// if playerChoice == R && computerChoice == P    - lose
// if playerChoice == R && computerChoice == S    - win

// if playerChoice == P && computerChoice == R     - win 
// if playerChoice == P && computerChoice == S      - lose

// if playerChoice == S && computerChoice == R      - lose
// if playerChoice == S && computerChoice == P      - win


var gameChoices = ["R", "P", "S"]
var gameWins = 0;
var gameLosses = 0;
var gameTies = 0;
var gameRounds = 0;
var gameRoundsChoice = prompt("How many rounds would you like to play?");



while (gameRoundsChoice > gameRounds) {

    var playerChoice = prompt("Rock, Paper, or Scissors?");
    var computerChoice = Math.floor(gameChoices.length * Math.random());
    computerChoice = gameChoices[computerChoice];

if (playerChoice == computerChoice) {
    alert("You tied! Computer chose " + computerChoice); gameTies++; gameRounds++;    
}


else if (playerChoice == "R" && computerChoice == "S"
|| playerChoice == "P" && computerChoice == "R"
|| playerChoice == "S" && computerChoice == "P") {
    alert ("You won! Computer chose " + computerChoice); gameWins++; gameRounds++;
}

else {
    alert ("You lost! Computer chose " + computerChoice); gameLosses++; gameRounds++;
}
}

alert("That's it! You won " + gameWins + ". " + "You lost " + gameLosses + ". " + "You tied " + gameTies + ".");


// var computerChoice = Math.floor(gameChoices.length)
// 
// 
// 
// 
// 
// var random_choice = Math.floor(number_of_options * Math.random());
// var computer_choice = game_options[random_choice]
// 
// // var numberOfOptions = computerOptions.length;

// var randomIndex = Math.floor(numberOfOptions * Math.random());



// var computerChoice;
// var playerChoice;






// var sushiLike = confirm("Do you like sushi?");
// var whatSushi = prompt("What kind of sushi do you like?");

// alert(sushiLike);
// alert(whatSushi);