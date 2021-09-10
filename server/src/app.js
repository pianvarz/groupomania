console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config.js')
const { sequelize } = require('./models')
const db = require('./models');

const userRoutes = require('./routes/user.js')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

db.sequelize.sync() //Confirming MySQL Connection
.then(() => { 
    app.listen(config.port) 
    console.log(`Database connected listening to ${config.port}!`)
})
.catch(error => console.log(error));

app.use('/api/auth', userRoutes)

module.exports = app

