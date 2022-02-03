const { prompt } = require("inquirer");
const { val } = require("jshint/src/options");
const db = require("./db/db");

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
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        if(choice === "VIEW_EMPLOYEES"){
            viewEmployees();
            console.log("Epic")
        } else {
            quit();
        }
    })
}

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) =>{
        console.log("/n");
        console.table(employees)
    })
    .then(() => menu());
}

function quit() {
    console.log("Goodbye!");
    process.exit();
};

menu();