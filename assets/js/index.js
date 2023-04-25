const inquirer = require('inquirer');

function logoPrompts() {
    inquirer.prompt(prompts);
    // Prompts user for color, shape, text for the logo, and to save the generated SVG
    inquirer.prompts([
        {
        type: 'input',
        message: 'Choose a color?',
        name: 'color'
        }
    ])
    .then(function userColor(color){
        const logoColor = color;
        console.log(logoColor);
    })
    inquirer.prompts([
        {
        type: 'input',
        message: 'Choose a shape?',
        name: 'shape'
        }
    ])
    .then(function userShape(shape){
        const logoShape = shape;
        console.log(logoShape);
    })
    inquirer.prompts([
        {
        type: 'input',
        message: 'Provide text for the logo:',
        name: 'text'
        }
    ])
    .then(function userText(text){
        const logoText = text;
        console.log(logoText);
    })
    inquirer.prompts([
        {
        type: 'input',
        message: 'Would you like to save the generated SVG?',
        name: 'save'
        }
    ])
    .then(function saveLogo(save){
        const saveSVG = save;
        console.log(saveSVG);
    })

    writeFile();
}

function writeFile(newFile, data) {
    renderLogo(newFile, data);
}

const fileName = 'generateLogo';
function init() {
    logoPrompts();
}

init();