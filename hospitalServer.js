const express = require('express')
const mongoose = require('mongoose')
const app = express()


//routes

app.get('/', (req, res) => {
    res.send('Hello API')
})

app.get('/patientRecords', (req, res) => {
    res.send('no records yet')
})



mongoose.
connect('mongodb://localhost:27017')
.then(() => {
    console.log('connected to mongoDB compass')
    app.listen(3000, () => {
        console.log('Node API is running on port 3000')
    })
}).catch(() => {
    console.log(error)
})