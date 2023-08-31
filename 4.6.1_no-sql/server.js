const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000

const server = express()

server.use(express.json())

const mongooseConnect = async () => {
  try{
    await mongoose.connect('mongodb+srv://guirdo:JrJI0klpEOwRf7yL@cluster0.2irewjx.mongodb.net/')
    console.log('Conexión exitosa')
  }catch(error){
    console.error(error)
  }
}

mongooseConnect()

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})