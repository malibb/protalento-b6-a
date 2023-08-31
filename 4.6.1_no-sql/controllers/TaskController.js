const task = require('../models/Task')

const getAllTasks = async (req, res) => {
  const tasks = await task.getAll()
  res.status(201).send({tasks})
}

const insertTask = async (req, res) => {
  const { title, description, deadline, done } = req.body

  await task.insertTask({ title, description, deadline, done })
    .then((response) => {
      res.status(201).send({message: 'Tarea agregada'})
    })
    .catch((error) => {
      res.status(401).send({message: 'Error, datos invalidos'})
    })
}

const updateTask = async (req,res) => {
  const { id } = req.params
  const { title, description, deadline, done } = req.body

  await task.updateTask(id, { title, description, deadline, done })
  .then((response) => {
    res.status(201).send({message: 'Tarea actualizada'})
  })
  .catch((error) => {
    res.status(401).send({message: 'Error, datos invalidos'})
  })
}

const removeTask = async (req,res) => {
  const { id } = req.params

  await task.removeTask(id)
  .then((response) => {
    res.status(201).send({message: 'Tarea Eliminada'})
  })
  .catch((error) => {
    res.status(401).send({message: 'Error, tarea no encontrada'})
  })
}

const getOneTask = async (req,res) => {
  const { id } = req.params

  const result = await task.getTask(id)
  res.status(201).send({task: result})
}

module.exports = {
  getAllTasks,
  insertTask,
  updateTask,
  removeTask,
  getOneTask
}

