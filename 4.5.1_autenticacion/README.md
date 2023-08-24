En este ejemplo, vamos trabajar con dos formas de autenticación.

## Basic authenticacion

1. Iniciar nuestro proyecto con npm: `npm init -y`

2. Creamos el archivo `base64-server.js` donde vamos a probar la autententicación básica.

3. Instalamos la biblioteca de express para nuestro servidor
  `npm i express`

4. Agregar el archivo `.gitignore` para ignorar lo que deseamos, como la carpeta `node_modules`

5. En el archivo `base64-server.js` agregar la configuracion inicial para nuestro nuevo servidor:
  
  ```js
    const express = require('express')
    const PORT = 3000

    const server = express()

    server.listen(PORT, () => {
      console.log(`Escuchando en el puerto ${PORT}`)
    })

  ```

6. Instalar `nodemon` como dependencia de desarrollo
    `npm i nodemon -D`
     
     * Agregar al `package.json` el script `base64_dev`
      ```json
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "base64_dev": "nodemon base64-server.js"
          },
      ```

7. Instalar la biblioteca `basic-auth`: `npm i basic-auth`
  
  * Haste este punto, tus dependencias en package.json de deben ver así:
  ```json
    "dependencies": {
      "basic-auth": "^2.0.1",
      "express": "^4.18.2"
    },
    "devDependencies": {
      "nodemon": "^3.0.1"
    }
  ``` 

8. Agregar la rutas `/recurso-protegido` y `/recurso-publico` al archivo `base64-server.js`

  ```js
    server.use('/recurso-protegido', (req, res) => {
      res.send('Hola! Soy un recurso protegido')
    })

    server.use('/recurso-publico',(req,res) => {
      res.send('Hola! Soy un recurso publico')
    })
  ```

9. Agregar un usuario con su contraseña para la autenticación
  ```js
    const usuario = {
      username: 'laura@domain.com',
      password: 'contrasena123'
    }
  ```

10. Importar la biblioteca `basic-auth` hasta arriba en nuestro archivo
  `const basicAuth = require('basic-auth')`

