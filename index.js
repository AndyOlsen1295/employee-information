//required files and programs.
const inquirer = require("inquirer");
// const generateHtml = require("./html.js")
const fs = require("fs");
const Engineer = require("./lib/Engineer");
// const generateManager = require("./employees/generateManager")
// const generateDeveloper = require("./empolyees/generateDeveloper")
const team = []

// these questions will be how we pull in info on the Manager. 
const manager = [
  {
    type: 'input',
    name: 'managerName',
    message: 'What is the Managers Name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is their ID?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their Email?',
  },
  {
    type: 'input',
    name: 'office',
    message:'What is their office number?',
  },
];

// these through manager constructor. turn into object in constructor, then move to team array.




//these questions will be how we pull in info on the Employees.
const intern = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the Employees name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is their ID?',
  },
    {
    type: 'input',
    name: 'email',
    message: 'Please add their Email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school did they attend?',
  },
  
  //   if (list == 'y') {
  //   //start back at the beginning of employees questions list!
  //   return(employees);
  // } else {
  //   //be done
  //   close
  // }
];

const engineer = [ // change employee to engineer.
    {
    type: 'input',
    name: 'name',
    message: 'What is the Engineers name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is their ID?',
  },
    {
    type: 'input',
    name: 'email',
    message: 'Please add their Email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is their Github?', // Github
  },
]


// function to write HTML
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
};

function initManager() {
  inquirer.prompt (manager) .then ((answers=> {
    console.log(answers)
   // run answers through manager constructor
   // push new manager to global team array
   menu()
  }))
};

function initIntern() {
  inquirer.prompt (intern) .then ((answers=>{
    console.log(answers)
    // run answers through manager constructor
    // push new manager to global team array
    menu()
  }))
};

function initEngineer() {
  inquirer.prompt (engineer) .then ((answers=>{
    console.log(answers)
    // run answers through engineer constructor
    const emp = new Engineer(answers.name, answers.id, answers.email, answers.github)
    // push new manager to global team array
    team.push(emp)
    menu()
  }))
};

const menu = () => {
  inquirer.prompt ([
    {
      type: 'list',
      name: 'choice',
      message:'what type of empolyee do you want to create?',
      choices:['intern', 'engineer','create team']
    }
  ]).then (answers => {
    if (answers.choice === 'intern') {
      initIntern()
    } else if (answers.choice === 'engineer') {
      initEngineer()
    } else {
      //run global team array through the HTML function.
      // save the output of the html function to a file.
    }
  }) 
}

initManager();
