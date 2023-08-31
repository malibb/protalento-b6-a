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




