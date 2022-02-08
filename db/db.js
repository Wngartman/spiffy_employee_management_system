
const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.role_name, department.department_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    findAllDepartments(){
        return this.connection.promise().query(
        "SELECT department_name FROM department"
        );
    }

    findAllRoles(){
        return this.connection.promise().query(
            "SELECT role_name FROM role"
        );
    }
    addNewDepartment(){
        // console.log(deptRes)
        return this.connection.promise().query(
            "INSERT INTO department (department_name) VALUES(?)", deptRes);
    }

    addNewRole(){
        console.log("Adding New Role Attempted")
    }
    // Create a new employee
    createNewEmployee(){

    }

}

module.exports = new DB(connection);
