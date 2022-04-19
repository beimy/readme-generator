// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    //page we are building then passing into writefile
    const pageHTML = generateMarkdown(data);

    fs.writeFile('./YOUR-README.md', pageHTML, err =>{
        if(err) throw new Error(err);

        console.log('ReadMe Generated');
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README GENREATOR', 'README GENERATOR');
}

// Function call to initialize app
init();
