import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})


 app.get('/api/locations', (req, res) => {
    const locations = [ 'Malir','Bazaar','k3','k9']
    res.send(locations)
 })

 app.get('/api/employees', (req, res) => {
    const employees = [
        {
            id: 123515,
            firstname : 'Araib',
            lastName : 'Khan',
            department: 'accounts',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123512,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123351,
            firstname: 'Araib',
            lastName : '',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123651,
            firstname: '',
            lastName : 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location:"Malir",
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 126352,
            firstname: 'Muhammad',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123853,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123154,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123155,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123136,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123156,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123157,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123158,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 189679,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 123181,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
        {
            id: 128991,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor',
            location: 'Saddar',
            age: 30,
            address:'Block B-34 gulshan',
            dateofjoining: '3/27/2023'
        },
    ]
    res.send(employees)
 })
const port = process.env.PORT || 3000

app.listen( port, () => {
    console.log(`Serving At  http://localhost:${port}`)
})