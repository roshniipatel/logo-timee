const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to three characters for your logo.',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter a text color (either a keyword or hexadecimal number).',
      name: 'textColor',
    },
    {
      type: 'checkbox',
      message: 'Choose a shape for your logo',
      choices: ['circle', 'square', 'triangle'],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'Enter a shape color (either a keyword or hexadecimal number).',
      name: 'shapeColor',
    },
  ])

  .then((data) => {
    const logoOutput = generateLogo(data);
    fs.writeFile('logo.svg', logoOutput, (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  })