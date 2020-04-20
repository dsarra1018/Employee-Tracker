// Dependencies
const inquirer = require('inquirer');
const connection = require('./js/connection');

// Initializes Content Management Systems
function employeeTracker() {
    
    // Welcome message
    console.log(`    +===========================================+
    |                                           |
    |    Welcome to Employee Tracker CLI App    |
    |                                           |
    +===========================================+`)

    // Prompts user for action
    optionFunction();
    
};

// Function
function optionFunction() {
    inquirer.prompt(optionsPrompt).then( ({option}) => {
        switch(option) {
            case 'View All Employees':
                viewAllEmployee();
                optionFunction();
                break;
            case 'View All Employees by Department':
                console.log(option);
                optionFunction();
                break;
            case 'View All Employees by Roles':
                console.log(option);
                optionFunction();
                break;
            case 'View All Employees by Manager':
                console.log(option);
                optionFunction();
                break;
            case 'View All Department':
                console.log(option);
                optionFunction();
                break;
            case 'View All Roles':
                console.log(option);
                optionFunction();
                break;
            case 'Add Employee':
                console.log(option);
                optionFunction();
                break;
            case 'Add Roles':
                console.log(option);
                optionFunction();
                break;
            case 'Add Department':
                console.log(option);
                optionFunction();
                break;
            case 'Update Roles':
                console.log(option);
                optionFunction();
                break;
            case 'Exit':
                console.log('Good-bye!');
                break;
        };
    });
};

function viewAllEmployee() {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
    })
}

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