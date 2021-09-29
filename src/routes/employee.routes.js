const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// All employees
router.get('/', employeeController.findAll);

// Create a new employee
router.post('/', employeeController.create);

// find by id
router.get('/:id', employeeController.findById);

// Update by id
router.put('/:id', employeeController.update);

// Delete
router.delete('/:id', employeeController.delete);

module.exports = router;