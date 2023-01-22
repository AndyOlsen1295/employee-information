//required files and programs.
const inquirer = require("inquirer");
const generateHtml = require("./html.js")
const fs = require("fs");
const generateManager = require("./employees/generateManager")
const generateDeveloper = require("./empolyees/generateDeveloper")

// these questions will be how we pull in info on the Manager. 
const manager = [
  {
    type: 'input',
    name: 'managerName',
    message: 'What is the Managers Name?',
  },
  {
    type: 'input',
    time: 'managerTenure',
    message: 'How long have they been with the company?',
  },
  {
    type: 'input',
    time: 'managerExperience',
    message: 'How long have they been in the coding industry?',
  },
  {
    type: 'input',
    contact: 'managerContact',
    message:'Please add their Email, Phone Number, or Github account',
  },
];

//these questions will be how we pull in info on the Employees.
const employees = [
  {
    type: 'input',
    name: 'employeeName',
    message: 'What is the Employees name?',
  },
  {
    type: 'input',
    time: 'employeeTenure',
    message: 'How long have they been with the company?',
  },
  {
    type: 'input',
    time: 'employeeExperience',
    message: 'How long have they been in the coding industry?',
  },
  {
    type: 'input',
    contact: 'employeeContact',
    message: 'Please add their Email, Phone Number, or Github account information',
  },
  {
    type: 'input',
    list: 'additionalEmployees',
    message: 'do you have any other employees you would like to add? "Y/N"',
  },
  
  //   if (list == 'y') {
  //   //start back at the beginning of employees questions list!
  //   return(employees);
  // } else {
  //   //be done
  //   close
  //}
];


// function to write HTML
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
};

function initManager() {
  inquirer.prompt (manager) .then ((answers=> {
    console.log(answers)
    const managerHtml = generateHtml(answers)
    writeToFile ('test.html', HTML) 
  }))
};

function initEmployees() {
  inquirer.prompt (employees) .then ((answers=>{
    console.log(answer)
    const employeeHTML = generateHtml(answers)
    writeToFile ('test.html',HTML)
  }))
};

initManager();
initEmployees();