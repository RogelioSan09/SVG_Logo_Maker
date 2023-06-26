// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const {Circle, Triangle, Square, Text} = require('./utils/shapes.js');

// Created an array of questions for user input
const questions = [];

// Prompts user for text, text-color, shape and shape-color of the logo.
questions.push(
    {
    type: 'input',
    message: 'Provide up to three letters for your text logo:',
    name: 'text',
    validate: function(input) {
        return input.length < 3
        }
    },
    {
    type: 'list',
    message: 'Provide text color for the logo:',
    name: 'textColor',
    choices: [
        'orange', 
        'blue', 
        'green', 
        'yellow', 
        'black', 
        'pink',
    ]
    },
    {
    type: 'input',
    message: 'Choose a shape:',
    name: 'shape',
    choices: [
        'circle', 
        'triangle', 
        'square',
    ]
    },
    {
    type: 'list',
    message: 'Provide color of the logo shape:',
    name: 'shapeColor',
    choices: [
        'orange',
        'blue',
        'green',
        'yellow',
        'black',
        'pink',
    ]
    },
);

// Created a function to write SVG file
function writeToFile(fileName, SVGContent) {
    // Used the fs.writeFile method to create the file
    fs.writeFile(fileName, SVGContent, (err) =>
        err ? console.log(err) : console.log('The logo has been created!')
    );
}

function init() {
    // declared a variable to store the file name
    const fileName = 'logo.svg';
    // Passed the array of questions to the prompt method, then stored the user's responses in a variable called data
    inquirer.prompt(questions).then((data) => {
        // Called the generateSVG function and passed in the data variable
        const SVGContent = generateSVG(data);
        // Called the writeToFile function and passed in the fileName and SVGContent variables
        writeToFile(fileName, SVGContent);
    });
};

init();