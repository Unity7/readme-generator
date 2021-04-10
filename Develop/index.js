// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your project title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub Username",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of your project",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your project's description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "install",
    message: "Enter the installation instructions for your project",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your project's installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information for your project",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your project's usage information!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter the contribution guidelines for your project",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          "Please enter the contribution guidelines for your project!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Enter the test instructions for your project",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your test instructions for your project!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["MIT", "Apache", "GPL", "N/A"],
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("./README.md", data, (err) => {
    // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
    if (err) {
      console.log("there was an error");
      return;
    } else {
      console.log("File created!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app

init()
  .then(generateMarkdown)
  .then((response) => {
    writeToFile(response);
  });
//   .then((markdown) => {
//     return console.log(markdown);
// return writeToFile(data);
//   });
