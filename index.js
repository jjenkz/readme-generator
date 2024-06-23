// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer
    .prompt([
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
        type: "list",
        name: "tableOfContents",
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
        message: "What is the main files being used?",
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
    ])
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error("Error during prompt:", error);
    });
};
questions();

// TODO: Create a function to write README file
function writeToFile() {
  const content = `
  # Project Title
  ## Description
  ### Table of Contents
  ### Installation
  ### Usage
  ### License
  ### Contributors
  ### Tests
  ### Questions`;

  fs.writeFile("README.md", content, (err) => {
    err
      ? console.log("Error writing READme file!")
      : console.log("READme file successfully created!");
  });
}
writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
