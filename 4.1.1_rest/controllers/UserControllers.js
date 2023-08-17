const usersData = require('../models/UserFakeData')
const users = usersData.module

module.exports = {
    getUsers: (req, res) => {
        res.status(200).send(users);
        //res.json(users)
      },
    getOneUser: (req, res) => {
      const idUser = req.params.id
      const user = users.find(element => element.id == idUser)
      if(user){
        res.status(200).send(user)
      } else {
        res.status(404).send({message: 'El usuario no existe'})
      }
    },
    createUser: (req, res) => {
      const newUser = req.body

      if(newUser.name.length > 2){
        users.push(newUser)
        res.status(200).send({message: 'Usuario creado exitosamente!'})
      } else {
        res.status(400).send({message: 'Nombre de usuario debe ser de 3 o más caracteres'})
      }
      
    },
    putUser: (req, res) => {
      const idUser = req.params.id
      const { name, email, password } = req.body

      // Obtenemos la posición del usuario en el arreglo
      const oldUserPosition = users.findIndex(element => element.id == idUser)

      if(!oldUserPosition) {
        res.status(400).send({message: 'Usuario no existe'})
      }

      if(name.length > 2){
        users[oldUserPosition].name = name
        users[oldUserPosition].email = email
        users[oldUserPosition].password = password
  
        res.status(200).send({message: 'Usuario modificado'})
      }else {
        res.status(400).send({message: 'Nombre del usuario debe ser de 3 o más caracteres'})
      }
      
    },
    updateUser: (req, res) => {
      const idUser = req.params.id
      const { name } = req.body

      // Obtenemos la posición del usuario en el arreglo
      const oldUserPosition = users.findIndex(element => element.id == idUser)

      if(!oldUserPosition) {
        res.status(400).send({message: 'Usuario no existe'})
      }

      if(name.length > 2){
        users[oldUserPosition].name = name
  
        res.status(200).send({message: 'Nombre del Usuario modificado'})
      }else {
        res.status(400).send({message: 'Nombre del usuario debe ser de 3 o más caracteres'})
      }
    },
    deleteUser: (req, res) => {
      const idUser = req.params.id

      // Obtenemos la posición del usuario en el arreglo
      const oldUserPosition = users.findIndex(element => element.id == idUser)

      if(!oldUserPosition) {
        res.status(400).send({message: 'Usuario no existe'})
      }

      users.splice(oldUserPosition,1)

      res.status(200).send({message: 'Usuario eliminado!'})
    },
};