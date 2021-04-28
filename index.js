const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const questions = [
  {
    type: "input",
    message: "What would you like your Project Title to be called?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the command to run the test(s)",
    name: "test",
  },
  {
    type: "input",
    message: "What do you need to install to use this application?",
    name: "install",
  },
  {
    type: "input",
    message: "How does someone use this app?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who created this project?",
    name: "credit",
  },
  {
    type: "checkbox",
    message: "Choose your license.",
    name: "license",
    choices: ["GNU", "MIT", "Apache"],
  },
];
inquirer.prompt(questions).then((answers) => {
  writeToFile("projectAnswer.md", generateMarkdown(answers));
});

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function generateMarkdown(data) {
  console.log(data);
  return `# Title 
  ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
##Install
To install necessary dependencies, run the following command:
\`\`\`
${data.install}
\`\`\`
##Test
To test the program run the following command:
\`\`\`
${data.test}
\`\`\`

##Usage
${data.usage}
##Credit
  ${data.credit}
 ## License 
 This project is licensed under ${data.license} license.
##Access
To gain access to this file go to (https://github.com/BE-Gee/Good-readme)
 
 `;
}
