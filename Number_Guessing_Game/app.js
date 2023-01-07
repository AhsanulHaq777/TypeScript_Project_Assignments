import inquirer from 'inquirer';
//console.log(randomNumber);
async function guessingNumber() {
    let randomNumber = Math.floor((Math.random() * 5) + 1);
    let userGuess;
    userGuess = (await inquirer.prompt({
        name: "guessNumber",
        type: "number",
        message: "Guess Any Number From 1 To 5 "
    }));
    userGuess = Math.floor(userGuess.guessNumber);
    if (userGuess < 6 && userGuess > 0) {
        if (userGuess === randomNumber) {
            console.log(`
                CONGRATULATIONS...
                You Won!
            `);
        }
        else {
            console.log(`
                Computer Wins... 
                Number was ${randomNumber}
            `);
        }
    }
    else {
        console.log("Please enter from 1 to 5");
    }
}
guessingNumber();
