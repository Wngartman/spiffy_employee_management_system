
const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.role_name, department.department_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    findAllDepartments() {
        return this.connection.promise().query(
            "SELECT department_name FROM department"
        );
    }

    findAllRoles() {
        return this.connection.promise().query(
            "SELECT role_name FROM role"
        );
    }
    addNewDepartment() {
        console.log("Added " + deptRes + " to list of Departments!")
        return this.connection.promise().query(
            "INSERT INTO department (department_name) VALUES(?)", deptRes);
        response.forEach((department) => { deptNamesArray.push(department.department_name); });
    }

    addNewRole() {
        return this.connection.promise().query(
            "INSERT INTO role SET ?",
            roleRes,
            console.log(`${roleRes.role_name} was added to roles!`)
        );

    }
    addNewEmployee() {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?",
            empRes,
            console.log(`${empRes.first_name + empRes.last_name} was added to employees!`)
        );

    }

    listDepartments() {
        return this.connection.promise().query(
            "SELECT * FROM department");
    }

}

module.exports = new DB(connection);
