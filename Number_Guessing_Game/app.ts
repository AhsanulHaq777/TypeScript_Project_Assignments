#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import showBanner from 'node-banner';

(async () => {
    await showBanner('Guessing Game', 'Guess a number','green');
})();

let input = true;
async function guessingNumber(){
while(input){
    let randomNumber = Math.floor((Math.random() * 5) + 1);
    let userGuess;
    userGuess = (await inquirer.prompt({
        name: "guessNumber",
        type: "number",
        message: chalk.yellow("Guess Any Number From 1 To 5 ")
    }));
    userGuess = Math.floor(userGuess.guessNumber);
    if(userGuess < 6 && userGuess > 0) {
        if(userGuess === randomNumber){
            console.log(chalk.green(`
                CONGRATULATIONS...
                You Won!
            `));
        }
        else{
            console.log(chalk.red(`
                Computer Wins... 
                Number was ${randomNumber}
            `))
            input = false;
        }
    }
    else{
        console.log("Please enter from 1 to 5");
    }
}
   
    
}

setTimeout(() => {
    guessingNumber()
},1000);

