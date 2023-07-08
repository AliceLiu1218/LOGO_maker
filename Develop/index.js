// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'text',
    message: 'What characters do you want for text, up to three charcaters?',
  },
  {
    type: 'input',
    name: 'text_color',
    message: 'What color do you wna the text to be?',
  },
  {
    type: 'list',
    message: 'What shape do you want the logo to be?',
    name: 'shape',
    choices: ['circle', 'rectangle', 'triangle'],
  },
  {
    type: 'input',
    name: 'shape_color',
    message: 'what background color do you want?',
  },
  {
    type: 'input',
    name: 'file_name',
    message: 'What file name do you want to save the logo as?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log("Information was saved successfully!!")
            console.log(data);
            // const filename = `${data.project_title}.md`;
            // writeToFile(filename, data)
           
          })
}

// Function call to initialize app
init();
