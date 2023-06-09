const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');
 
// function to generate the data for logo
function generateLogo(data) {

  // circle data
  if (data.shape == "circle") {
    const shape = new Circle(data.shapeColor);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.createShape(data.shapeColor)}
  <text font-size="60" x="150" y="120" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  </svg>`
  }

  // square data
  if (data.shape == "square") {
    var shape = new Square(data.shapeColor);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   ${shape.createShape(data.shapeColor)}
  <text font-size="60" x="150" y="120" fill="${data.textColor}" text-anchor="middle">${data.text}</text>
  </svg>`
  }

  // triangle data 
  if (data.shape == "triangle") {
    var shape = new Triangle(data.shapeColor);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.createShape(data.shapeColor)}
    <text font-size="60" x="150" y="155" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`
  }
}

// questions for the user to answer
promptQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter up to (3) characters for your logo:',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter a color keyword (OR a hexadecimal number) for your text:',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Choose a shape for your logo:',
      choices: ['circle', 'square', 'triangle'],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'Enter a shape color (either a keyword or hexadecimal number):',
      name: 'shapeColor',
    },
  ])
  .then((data) => {
    console.log(data);
    const logoOutput = generateLogo(data);
    // creates the file named 'logo.svg' and shows your desired logo
    fs.writeFile('logo.svg', logoOutput, (err) =>
      err ? console.error(err) : console.log('Success! logo.svg is generated!')
    );
  })
  .catch(err => console.error(err))

}

// calling the function so questions are asked in the terminal
promptQuestions();

module.exports = generateLogo