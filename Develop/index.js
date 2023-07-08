// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const logo_file = require('./utils/generatelogo');



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
function processDATA(shape) {
    const htmlContent =``;
    switch(shape) {
        case 'circle':
            console.log("circle shape logo should be generated");
            htmlContent = logo_file.htmlContent_circle;
            return htmlContent;
            
        case 'rect':
            console.log("rect shape logo should be generated");
            htmlContent = logo_file.htmlContent_rect;
            return htmlContent;
            
        case 'tri':
            console.log("tri shape logo should be generated");
            htmlContent = logo_file.htmlContent_tri;
            return htmlContent;
            
    }
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log("Information was saved successfully!!")
            console.log(data);
            const shape = data.shape;
            const shape_color = data.shape_color;
            processDATA(shape);
            const filename = `${data.file_name}.html`;
            writeToFile(filename, htmlContent)
           
          })
}

// Function call to initialize app
init();
