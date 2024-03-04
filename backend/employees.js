app.get('/', (req, res) => {
    res.send('Server is ready')
})


 app.get('/api/employees', (req, res) => {
    const employees = [
        {
            id: 123515,
            name: 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123512,
            name: 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123351,
            name: 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123651,
            name: 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 126351,
            name: 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123851,
            name: 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123151,
            name: 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
        {
            id: 123151,
            name: 'Araib',
            department: 'supervision',
            phone: '034514081947',
            role:'supervisor'
        },
    ]
    res.send(employees)
 })
 const port = process.env.PORT || 3000