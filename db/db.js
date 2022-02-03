
const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.role_name, department.department_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
    // Find all emplyees exept the given employee id

    // Create a new employee

    // Remove an employee with the given id

    // Update the given employee's role
}

module.exports = new DB(connection);