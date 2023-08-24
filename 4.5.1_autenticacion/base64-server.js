const express = require('express')
const basicAuth = require('basic-auth')
const PORT = 3000

const server = express()

const usuario = {
  username: 'laura@domain.com',
  password: 'contrasena123'
}

server.use('/recurso-protegido', autenticacion,(req, res) => {
  res.send('Hola! Soy un recurso protegido')
})

server.use('/recurso-publico',(req,res) => {
  res.send('Hola! Soy un recurso publico')
})

const autenticacion = (req,res, next) => {
  // Authorization: Basic jsfasdjfsjd
  const crendenciales = basicAuth(req) 

  if(crendenciales.name === usuario.username && crendenciales.pass === usuario.password){
    next()
  } else {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Acceso denegado: usuario o contraseña invalida')
  }
}

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})
