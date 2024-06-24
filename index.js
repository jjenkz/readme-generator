// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of the product",
  },
  {
    type: "checkbox",
    name: "tableOfContents",
    message: "Choose all that apply:",
    choices: [
      "Installation",
      "Usage",
      "License",
      "Contributing",
      "Tests",
      "Questions",
    ],
  },
  {
    type: "confirm",
    name: "installation",
    message: "Create your own code?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the main files being used?",
  },
  {
    type: "input",
    name: "license",
    message: "Did you use a license, if so, what license?",
  },
  {
    type: "input",
    name: "contributors",
    message: "List out who or what helped with the product:",
  },
  {
    type: "input",
    name: "tests",
    message: "(Optional) Provide any bugs that were encountered:",
  },
  {
    type: "input",
    name: "questions",
    message: "Questions? Provide an email or contact:",
  },
];

// TODO: Create a function to write README file
function writeToFile(questions) {
  fs.writeFile("README.md", questions, (err) => {
    err
      ? console.error("Error writing READme file!")
      : console.log("READme file successfully created!");
  });
}
writeToFile(questions);

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error("Error during prompt:", error);
    });
}

// Function call to initialize app
init();
