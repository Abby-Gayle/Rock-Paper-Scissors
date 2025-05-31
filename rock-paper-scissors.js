//this game will be entirly on the console for now will update later
//1.the user will have to type in rock, paper or scissors
//2.then the computer kicks in will either make a random choice of rock, paper, or scissors
//3.the user will either win lose or get a tie
//4.each time the player playes one of the scores will go up wiether win lose or tie

//this function is for the computer choice
function getComputerChoice(){
    //make rock, paper, scissors = 1, 2, 3
    let randomNumber = Math.floor(Math.random() * 3) + 1; //math.floor rounds down the result and math.random makes a number between 0 and 1 (never exactly zero or one)
    switch (randomNumber){
        case 1:
            console.log("ROCK");
            break;
        case 2:
            console.log("PAPER");
            break;
        case 3:
            console.log("SCISSORS");
            break;
    }
}

//how to get a human choice now
//user will need instruction to enter (rock, paper, or scissors)
function getHumanChoice(){
    //might make parameter a word
    word = prompt("Enter rock, paper, scissors: ");
    word = word.toLowerCase(); //this gets the users input and makes it lowercase always
    console.log(word);
}

//variables to keep track of player scores
///global scope variables 
humanScore = 0;
computerScore = 0;

