const { response } = require("express");
const { prompt } = require("inquirer");
const { addNewDepartment, addNewRole } = require("./db/db");
const db = require("./db/db");
require('console.table');
const connection = require("./db/connection");

function menu() {
    prompt([
        {
            type: 'list', 
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: "View Employee List",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View all departments",
                    value: "ALL_DEPARTMENTS"
                },
                {
                    name: "View all roles",
                    value: "ALL_ROLES"
                },
                {
                    name: "Add new department",
                    value: "NEW_DEPARTMENT"
                },
                {
                    name: "Add new role",
                    value: "NEW_ROLE"
                },
                {
                    name: "Add new employee",
                    value: "NEW_EMPLOYEE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        if (choice === "VIEW_EMPLOYEES") {
            viewEmployees();
        }
        if (choice === "QUIT") {
            quit();
        }
        if (choice === "ALL_DEPARTMENTS") {
            viewDepartments();
        }
        if (choice === "ALL_ROLES") {
            viewRoles();
        }
        if (choice === "NEW_DEPARTMENT") {
            addNewDepartments();
        }
        if (choice === "NEW_ROLE") {
            addNewRoles();
        }
        if (choice === "NEW_EMPLOYEE") {
            addNewEmployees();
        }
    })
}

function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows
            console.log("\n");
            console.table(employees)
        })
        .then(() => menu());
}
// Quit function
function quit() {
    console.log("Goodbye!");
    process.exit();
}
menu();
// View departments
function viewDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows
            console.log("\n");
            console.table(departments)
        })
        .then(() => menu());
}
// View the roles
function viewRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows
            console.log("\n");
            console.table(roles)
        })
        .then(() => menu());
}
// Add new department
function addNewDepartments() {
    prompt([
        {
            name: "DEPARTMENT_NAME",
            type: "input",
            message: "What department would you like to add?",
        }]).then(answer => {
            deptRes = answer.DEPARTMENT_NAME
            db.addNewDepartment(deptRes)
        })
        .then(() => menu())

}

// Add a new role
function addNewRoles() {
    prompt([
        {
            name: "role_name",
            type: "input",
            message: "What is their title?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is their salary?"
        },
        {
            name: "department_id",
            type: "input",
            message: "What is their department id?",
        }

    ])
        .then(answer => {
            roleRes = answer
            db.addNewRole(roleRes)
        })
        .then(() => menu())
}
// Add an new employee
function addNewEmployees() {
    prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is their first name?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is their last name?"
        },
        {
            name: "role_id",
            type: "input",
            message: "What is their role id?",
        },
        {
            name: "manager_id",
            type: "input",
            message: "What is their manager id?",
        }

    ])
        .then(answer => {
            empRes = answer
            db.addNewEmployee(empRes)
        })

        
        .then(() => menu())
}
