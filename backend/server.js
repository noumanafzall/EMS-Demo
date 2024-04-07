import express from "express";
import {employees} from "./employees.js"
import { dealers } from "./dealers.js";

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})


 // Middleware to parse JSON and URL-encoded request bodies
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));


 app.get('/api/locations', (req, res) => {
    const locations = [ 'Malir','Bazaar','saddar','k9']
    res.send(locations)
 })



 app.get('/api/employees', (req, res) => {
    res.send(employees)
 })

 app.get('/api/dealers', (req, res) => {
    res.send(dealers)
 })

 app.put('/api/employees/:id', (req, res) => {
    const id = req.params.id;
    const updatedEmployee = req.body;

    const index = employees.findIndex(employee => employee.id === parseInt(id));
    if (index !== -1) {
        employees[index] = updatedEmployee;
        res.send('Employee details updated successfully');
        
    } else {
        res.status(404).send('Employee not found');
    }
 })

 // Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


const port = process.env.PORT || 3000

app.listen( port, () => {
    console.log(`Serving At  http://localhost:${port}`)
})