// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      name: "Project Title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "Description",
      message: "Give a brief description of the product",
    },
    {
      type: "list",
      name: "Table of Contents",
      choices: "[Installation, Usage, License, Contributing, Tests, Questions]",
    },
    {
      type: "confirm",
      name: "Installation",
      message: "Create your own code?",
    },
    {
      type: "input",
      name: "Usage",
      message: "What is the main files being used?",
    },
    {
      type: "input",
      name: "License",
      message: "Did you use a license, if so, what license?",
    },
    {
      type: "input",
      name: "Contributors",
      message: "List out who or what helped with the product:",
    },
    {
      type: "input",
      name: "Tests",
      message: "(Optional) Provide any bugs that were encountered:",
    },
    {
      type: "input",
      name: "Questions",
      message:
        "Provide questions YOU want to be answered for the betterment of the READme genreator:",
    },
  ])
  .then((response) => console.log(response));

questions();
// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("readme.md", data, (err) => {
    err ? console.log("Error writing READme file!") : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
