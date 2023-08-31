# Backend con base de datos NoSQL

1. Inicializar el proyecto con npm
 `npm init -y`

2. Agregar el archivo `.gitignore` con la linea `node_modules` y demás que necesites

3. Intalar las bibliotecas básicas, entre ellas express, nodemon y mongoose

```bash
npm i express mongoose
```
  * Instalar nodemon como dependencia de desarrollo
  `npm i nodemon -D`

  * Así deben de quedar las dependencias de tu proyecto

  ```json
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
  ```

4. Agregar la configuración inicial en el archivo `server.js`

```js
const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000

const server = express()

server.use(express.json())

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})
```

5. Agregar los scripts `start` y `dev`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

6. Conectar con el cluster de Atlas a traves mongoose en el archivo `server.js`

```js
const mongooseConnect = async () => {
  try{
    await mongoose.connect('mongodb+srv://guirdo:JrJI0klpEOwRf7yL@cluster0.2irewjx.mongodb.net/')
    console.log('Conexión exitosa')
  }catch(error){
    console.error(error)
  }
}

mongooseConnect()
```

7. Agregar las rutas para la entidad Task

  * Crear la carpeta router y dentro crear el archivo TaskRoutes, con las rutas básicas para:
    * Obtener todas la tareas
    * Agregar una nueva
    * Actualizar una tarea
    * Eliminar una tarea
    * Obtener una tarea

  * En el archivo server.js importar TaskRoute y utilizarlo en la ruta `/api/v1/tasks`

  ```js
  const TaskRoutes = require('./routes/TaskRoutes')

  // El resto del código

  server.use(express.json())

  server.use('/api/v1/tasks', TaskRoutes)

  // demás código
  ```

8. Agregar el controlador para Task.
 * Crea la carpeta controllers y dentro crea el archivo TaskController


