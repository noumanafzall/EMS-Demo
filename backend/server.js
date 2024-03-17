import express from "express";
import fs from 'fs'

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

 const employees = [
    {
        id: 100001,
        firstName : 'Araib',
        lastName : 'Khan',
        department: 'accounts',
        phone: '034514081947',
        role:'supervisor',
        location: 'Malir',
        age: 30,
        address:'Block B-34 gulshan',
        dateofjoining: '2023-03-27'
    },
    {
        id: 100002,
        firstName: 'Ahmed',
        lastName : 'Ayaz',
        department: 'supervision',
        phone: '034514081947',
        role:'supervisor',
        location: 'Saddar',
        age: 30,
        address:'Block B-34 gulshan',
        dateofjoining: '3/27/2023'
    },
    {
        id: 100003,
        firstName: 'Tahir',
        lastName : 'Zamman',
        department: 'supervision',
        phone: '034514081947',
        role:'supervisor',
        location: 'k-9',
        age: 30,
        address:'Block B-34 gulshan',
        dateofjoining: '3/27/2023'
    },
    {
        id: 100004,
        firstName: 'Jawad',
        lastName : 'Ahmed',
        department: 'supervision',
        phone: '034514081947',
        role:'supervisor',
        location:"Malir",
        age: 30,
        address:'Block B-34 gulshan',
        dateofjoining: '3/27/2023'
    },
    {
        id: 100005,
        firstName: 'Abdullah',
        lastName : 'Shafiq',
        department: 'supervision',
        phone: '034514081947',
        role:'supervisor',
        location: 'Saddar',
        age: 30,
        address:'Block B-34 gulshan',
        dateofjoining: '3/27/2023'
    },
    {
        id: 100006,
        firstName: 'Saad',
        lastName : 'Talib',
        department: 'supervision',
        phone: '034514081947',
        role:'supervisor',
        location: 'Bazaar',
        age: 30,
        address:'Block B-34 gulshan',
        dateofjoining: '3/27/2023'
    },
]


 app.get('/api/employees', (req, res) => {
    res.send(employees)
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