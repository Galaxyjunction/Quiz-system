import inquirer from "inquirer";

///Printing a Welcome note.-----
console.log("\n\n----Welcome to Quiz game----\n" );
console.log("#You have to gain 4 points to win.\n");

let points = 0

///Question02------
let question01 = await inquirer.prompt([
    {
        name: "one",
        type: "list",
        message: "Typescript is a superset of which language?",
        choices: ["Python", "C++", "Javascript", "Java"]
    }
]) 
if(question01.one === "Javascript"){
    console.log("Your answer is correct.")
    points++
}else{
    console.log("Incorrect answer.")
}

///Question02------
let question02 = await inquirer.prompt([
    {
        name: "two",
        type: "list",
        message: "How do you define a custom type in typescript?",
        choices: ["Interface", "Typedof", "Type", "Both A and C"]
    }
]) 
if(question02.two === "Both A and C"){
    console.log("Your answer is correct.")
    points++
}else{
    console.log("Incorrect answer.")
}

///Quesion03-----
let question03 = await inquirer.prompt([
    {
        name: "three",
        type: "list",
        message: "Which typescript feature allows for declaring new names for existing types?",
        choices: ["Aliases", "Enums", "Interfaces", "Decorators"]
    }
]) 
if(question03.three === "Aliases"){
    console.log("Your answer is correct.")
    points++
}else{
    console.log("Incorrect answer.")
}

//Question04---

let question04 = await inquirer.prompt([
    {
        name: "four",
        type: "list",
        message: "How do you create an instance of a Typescript Class?",
        choices: ["new MYClass()", "MyClass.new", "MyClass.create()", "Instance MyClass()"]
    }
]) 
if(question04.four === "new MYClass()"){
    console.log("Your answer is correct.")
    points++
}else{
    console.log("Incorrect answer.")
}
///Question05----

let question05 = await inquirer.prompt([
    {
        name: "five",
        type: "list",
        message: "Which of the following is NOT a valid type of data type?",
        choices: ["Void", "Any", "Dynamic", "Tuple"]
    }
]) 
if(question05.five === "Dynamic"){
    console.log("Your answer is correct.")
    points++
}else{
    console.log("Incorrect answer.")
}
// Printing Either user Won or Loss------
if(points>= 4){
    console.log("Congratulations! You won.");
    console.log(`You earned: ${points} points. `);
}else{
    console.log("Unfortunately, you loss.");
    console.log(`You earned: ${points} points`);
}




