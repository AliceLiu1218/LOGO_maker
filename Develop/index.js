// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const logo_file = require('./utils/generatelogo');

let htmlContent;

// Create an array of questions for user input
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
    choices: ['circle', 'rect', 'tri'],
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

// Create a function to write logo html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Write file Success!')
    );
}

// Funciton to process user input data
function processDATA(shape,shape_color,text_color,text) {
    
    switch(shape) {
        case 'circle':
            console.log("circle shape logo should be generated");
            htmlContent = logo_file.circle_logo(shape_color,text_color,text);
            break;
            
        case 'rect':
            console.log("rect shape logo should be generated");
            htmlContent = logo_file.rect_logo(shape_color,text_color,text);
            break;
            
        case 'tri':
            console.log("tri shape logo should be generated");
            htmlContent = logo_file.tri_logo(shape_color,text_color,text);
            break;
            
    }
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log("Information was saved successfully!!")
            console.log(data);
            
            processDATA(data.shape,data.shape_color,data.text_color,data.text);
            const filename = `${data.file_name}.html`;
            writeToFile(filename, htmlContent)
           
          })
}

// Function call to initialize app
init();
