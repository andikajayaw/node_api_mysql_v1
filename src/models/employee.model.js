'use strict';

var dbConn = require('../../config/db.config');

var Employee = (employee) => {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Employee.create = (newEmp, result) => {
    dbConn.query("INSERT INTO employees set ?", newEmp, (err, res) => {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}
Employee.findById = (id, result) => {
    dbConn.query("SELECT * FROM employees WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("Error :", res);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}
Employee.findAll = (result) => {
    dbConn.query("SELECT * FROM employees", (err, res) => {
        if (err) {
            console.log("Error: ", res);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Employee.update = (id, employee, result) => {
    dbConn.query("UPDATE employees SET first_name = ?, last_name = ?, email = ?, phone = ?, organization = ?, designation = ?, salary = ?, WHERE id = ?",
        [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
}

Employee.delete = (id, result) => {
    dbConn.query("DELETE FROM employees WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.log("Error", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = Employee;