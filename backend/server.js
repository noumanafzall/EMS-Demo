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
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123512,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123351,
            firstname: 'Araib',
            lastName : '',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123651,
            firstname: '',
            lastName : 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 126351,
            firstname: 'Muhammad',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123851,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123151,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123151,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123151,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123151,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123151,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123151,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 189671,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123181,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 128991,
            firstname: 'Araib',
            lastName : 'Niazi',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
    ]
    res.send(employees)
 })
const port = process.env.PORT || 3000

app.listen( port, () => {
    console.log(`Serving At  http://localhost:${port}`)
})