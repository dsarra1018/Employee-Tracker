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

// Functions

// Prompts the user to select an action
function optionFunction() {
    inquirer.prompt(optionsPrompt).then( ({option}) => {
        switch(option) {
            case 'View All Employees':
                viewAllEmployee();
                optionFunction();
                break;
            case 'View All Employees by Department':
                viewEmployeeByDept();
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
                viewAllDept();
                optionFunction();
                break;
            case 'View All Roles':
                viewAllRoles();
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
                addDept();
                break;
            case 'Update Roles':
                console.log(option);
                optionFunction();
                break;
            case 'Exit':
                console.log('Good-bye!');
                connection.end();
                break;
        };
    });
};

// Allows the user to view all the employees on the database
function viewAllEmployee() {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
    });
};

// Allows the user to view all the employees by department on the database
function viewEmployeeByDept() {
    connection.query("SELECT employee.first_name, employee.last_name FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON role.department_id = department.id ORDER BY department.id", (err, res) => {
        if (err) throw err;
        console.table(res);
    });
};

// Allows the user to view all the departments on the database
function viewAllDept() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
    });
};

// Allows the user to view all the roles on the database
function viewAllRoles() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
    });
};

// Allows the user to add a department on the 'department' table
function addDept() {
    inquirer.prompt(addDeptPrompt).then(dept => {
        connection.query("INSERT INTO department (name) VALUES (?);", [dept.name], (err, res) => {
            if (err) throw err;
            console.log(`${dept.name} has been successfully added into the department table.`);
            optionFunction();
        })
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

const addDeptPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'What department would you like to create?'
    }
]

employeeTracker();