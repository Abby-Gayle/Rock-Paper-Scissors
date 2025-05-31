//this game will be entirly on the console for now will update later
//1.the user will have to type in rock, paper or scissors
//2.then the computer kicks in will either make a random choice of rock, paper, or scissors
//3.the user will either win lose or get a tie
//4.each time the player playes one of the scores will go up wiether win lose or tie

    //variables to keep track of player scores
    //global scope variables 
    humanScore = 0;
    computerScore = 0;

//this function is for the computer choice
function getComputerChoice(){
    //make rock, paper, scissors = 1, 2, 3
    let randomNumber = Math.floor(Math.random() * 3) + 1; //math.floor rounds down the result and math.random makes a number between 0 and 1 (never exactly zero or one)
    switch (randomNumber){
        case 1:
            word = "rock";
            return word;
        case 2:
            word = "paper";
            return word;
        case 3:
            word = "scissors";
            return word;
    }
}

//how to get a human choice now
//user will need instruction to enter (rock, paper, or scissors)
function getHumanChoice(){
    //might make parameter a word
    word = prompt("Enter rock, paper, scissors: ");
    word = word.toLowerCase(); //this gets the users input and makes it lowercase always
    return word;
    
}

//this a function for a round takes two parameters user input and cpu input (LETS PLAY)
function playRound(humanChoice, computerChoice){
    //rock beats scissors
    //paper beats rock
    //scissors beats paper
    switch(humanChoice){
        case "rock":
            console.log(`You chose: ${humanChoice} Opponent chose: ${computerChoice}`);
            if(computerChoice == "rock"){
                console.log("Tie Hmm... seems like no one wins");
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            else if(computerChoice == "paper"){
                console.log("Winner winner chicken dinner");
                humanScore +=1;//increases human score by one
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            else{
                console.log("You Lost obviously");
                computerChoice+=1; //increases computer score by one
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            break;
        case "paper":
            if(computerChoice == "paper"){
                console.log("Tie Hmm... seems like no one wins");
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            else if(computerChoice == "rock"){
                console.log("Winner winner chicken dinner");
                humanScore +=1;//increases human score by one
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            else{
                console.log("You Lost obviously");
                computerChoice+=1; //increases computer score by one
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            break;
        case "scissors":
             if(computerChoice == "scissors"){
                console.log("Tie Hmm... seems like no one wins");
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            else if(computerChoice == "paper"){
                console.log("Winner winner chicken dinner");
                humanScore +=1;//increases human score by one
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            else{
                console.log("You Lost obviously");
                computerScore+=1; //increases computer score by one
                console.log(`You: ${humanScore} CPU: ${computerScore}`);
            }
            break;
    }

}

//variables that get the user and computer input for arguments
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {//playGame function
    //we will play five rounds
    i = 0; //this is the starting index for the loop
    for( ; i < 6; i++){ //this makes iterate five times
        playRound(humanSelection, computerSelection);   //calls the function playRound to play a round of the game  
    }
}
playGame();
