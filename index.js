const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const routes = require('./routes/products')


const app = express()
const port = 3000;

mongoose.connect(config.dbURL, {useNewUrlParser: true})
.then( ()=> console.log('Successful connection to the database'))
.catch( err => console.log('Error in connection database: ', err))

app.use(bodyParser.json())
app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('Hello api with Express!')
})

app.listen(port, ()=>{
    console.log(`server initialized in http://localhost:${port}`)
})