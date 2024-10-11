#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome to my Quiz:")
console.log("You required maximum 4 points to pass this Quiz.")

let points = 0

//question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "Typescript is a superset of?",
        type: "list",
        choices: ["phyton", "c++", "java", "Javascript"]
    }
])

if(question1.one == "Javascript"){
    console.log("your answer is correct")
    points++
    console.log(`your point is ${points}`);
    
}else{
    console.log("your answer is incorrect")
}

//question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "Who is the founder of microsoft?",
        type: "list",
        choices: ["Elon Musk", "Bill Gates", "Mark Zukerberg", "Ali"]
    }
])

if(question2.two == "Bill Gates"){
    console.log("your answer is correct")
    points++
    console.log(`your point is ${points}`);
}else{
    console.log("your answer is incorrect")
}

//question 3

let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "Capital of Pakistan?",
        type: "list",
        choices: ["Karachi", "Punjab", "Islamabad", "KPK"]
    }
])

if(question3.three == "Islamabad"){
    console.log("your answer is correct")
    points++
    console.log(`your point is ${points}`);
}else{
    console.log("your answer is incorrect")
}

//question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Who is the current governor?",
        type: "list",
        choices: ["Ali", "Kamran Tessori", "Bilal", "Asad"]
    }
])

if(question4.four == "Kamran Tessori"){
    console.log("your answer is correct")
    points++
    console.log(`your point is ${points}`);
}else{
    console.log("your answer is incorrect")
}

//question 5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "NPM stands for ?",
        type: "list",
        choices: ["inquirer", "chalk", "github", "node package manager"]
    }
])

if(question5.five == "node package manager"){
    console.log("your answer is correct")
    points++
    console.log(`your point is ${points}`);
}else{
    console.log("your answer is incorrect")
}

//output condition

if(points >= 4 ){
    console.log('congratulation!')
    console.log(`your points:  ${points}`)
}else{
    console.log("you loss! Better luck next time ")
    console.log(`your points: ${points}`)
}
