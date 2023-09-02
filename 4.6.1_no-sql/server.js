const express = require('express')
const mongoose = require('mongoose')
const TaskRoutes = require('./routes/TaskRoutes')
const PORT = 3000

const server = express()

server.use(express.json())

server.use('/api/v1/tasks', TaskRoutes)

const mongooseConnect = async () => {
  try{
    await mongoose.connect('mongodb+srv://guirdo:JrJI0klpEOwRf7yL@cluster0.2irewjx.mongodb.net/TaskApp?retryWrites=true&w=majority')
    console.log('Conexión exitosa')
  }catch(error){
    console.error(error)
  }
}

mongooseConnect()

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})