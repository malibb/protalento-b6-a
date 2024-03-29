const express = require('express')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'la-puerca-está-en-la-pocilga'

const PORT = 3000

const server = express()

const songs = [
  {
    title: 'Infinity repeating',
    artist: 'Daft Punk'
  },
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
  },
  {
    title:'Bones',
    artist: 'Imagine Dragons'
  }
]

const validateJWT = (req, res, next) => {
  const authHeader = req.get('authorization')

  const accessToken = authHeader.split(' ')[1]

  jwt.verify(accessToken, SECRET_KEY, (error, decode) => {
    if(error) {
      res.status(401).send('Acceso denegado')
    }else {
      next()
    }
  })

}

server.use(express.json())
server.use('/auth',(req,res) => {
  const {email, password} = req.body

  const token = jwt.sign({email,password},SECRET_KEY,{expiresIn: '3m'})

  res.send({token})
})

server.use('/songs',validateJWT,(req,res) => {
  res.status(201).send({songs})
})

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})