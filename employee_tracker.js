// Dependencies
const inquirer = require('inquirer');
//const connection = require('./js/connection');

// Initializes Content Management Systems
function employeeTracker() {
    
    // Welcome message
    console.log(`    +===========================================+
    |                                           |
    |    Welcome to Employee Tracker CLI App    |
    |                                           |
    +===========================================+`)

    // Prompts user for action
    inquirer.prompt(optionsPrompt).then( ({option}) => {
        console.log(`You selected to ${option}`);
    });
};

// Prompts
const optionsPrompt = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Employees by Department', 'View All Employees by Roles', 'View All Employees by Manager', 'View All Department', 'View All Roles', new inquirer.Separator(), 'Add Employee', 'Add Roles', 'Add Department', new inquirer.Separator(), 'Update Roles', new inquirer.Separator(), 'Exit']
    }
];

employeeTracker();