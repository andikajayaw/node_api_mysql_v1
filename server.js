const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server
const port = process.env.PORT || 5000;

// parse request 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Employee routes
const employeeRoutes = require('./src/routes/employee.routes');

// using as middleware
app.use('/api/v1/employees', employeeRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});