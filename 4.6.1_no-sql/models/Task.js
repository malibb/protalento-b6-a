const mongoose = require('mongoose')

const taskSchema = {
  title: {
    type: String,
    required: true,
  },
  description: String,
  deadline: {
    type: Date,
    required: true,
    default: new Date()
  },
  done: {
    type: Boolean,
    default: false
  }
}

const Task = mongoose.model('Task', taskSchema)

const getAll = async () => {
  const result = await Task.find()
  return result
}

const insertTask = async (task) => {
  return await Task.create(task)
}

const updateTask = async (id, newTask) => {
  const oldTask = await Task.findById(id)

  oldTask.title = newTask.title;
  oldTask.description = newTask.description
  oldTask.deadline = newTask.deadline
  oldTask.done = newTask.done

  return await oldTask.save()
}

const removeTask = async (id) => {
  return await Task.deleteOne({_id: id})
}

const getTask = async (id) => {
  return await Task.findById(id)
}

module.exports = {
  getAll,
  insertTask,
  updateTask,
  removeTask,
  getTask
}
