import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})


 app.get('/api/locations', (req, res) => {
    const locations = [ 'Malir','Bazaar','k3','k9'
    ]
    res.send(locations)
 })
const port = process.env.PORT || 3000

app.listen( port, () => {
    console.log(`Serving At  http://localhost:${port}`)
})