#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.yellowBright("\n \t Welcome to Word Counter App"))
console.log("=".repeat(50));


let counter = await inquirer.prompt([{

    name : "sentence",
    type : "input",
    message : "Enter words to count:"

}])

let words = counter.sentence.trim().split(" ");

console.log("=".repeat(50));

console.log(chalk.bold("Sentence Words.."));
console.log((words));

console.log("=".repeat(50));
console.log(chalk.bold(`- word counter: ${chalk.bold.blueBright(words.length)}`));

console.log("=".repeat(50));
