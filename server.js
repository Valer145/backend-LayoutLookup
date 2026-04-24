const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middlewares/errorHandler')
const cors = require("cors")

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

// Rutas
app.use('/api/styles', require('./routes/styleRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))   

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`.yellow.bold))