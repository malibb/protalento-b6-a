#  Backend

1. Crear la carpeta.

2. Entrar a la carpeta. ``cd 4.4.1/backend``.

3. Inicializar el proyecto `npm init -y`.

4. Añadir el ``.gitignore`` con la linea 
    ```
    node_modules/
    ```
5. Crear nuestro servidor:
    1. Instalar `express`  => `npm i express`;
    2. Crear el código base para una API con express:
    ```
        const express = require('express');
        const server = express();
        const port = 3000;

        server.listen(port, () => {
        console.log(`API escuchando en puerto ${port}.`);
        });
    ```
    
    3. Probar que nuestra API esté lista, levantando el servidor, escribiendo en la terminal:
        - `node server.js` || `nodemon server.js`
        1. Si requieres no instalar nodemon podemos agregarlo a un script.
            - Requieres agregarlo a un script en el package.json:
            - Vamos al package.json y agregamos el script `dev`
            - Agregamos un script:
                ```
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "node server.js"
                }
                ```
                ```
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "node server.js",
                    "dev": "nodemon server.js"
                },
                ```
            - Y para ejecutarlo en la terminal correremos:
                - `npm run nombreDelScript` => `npm run dev`.
            - Si no te reconoce `nodemon`, instalalo con `npm i -D nodemon`.
    4. Lo que sigue es crear el arbol de carpetas para mi arquitectura.
    ![Alt text](image.png)

    5. Es empezar llenando loas archivos de rutas con la estrucutra básica.

        ```
        const express = require('express');
        const router = express.Router();

        router.get('/', () => {});

        module.exports = router;
        ```
    6. Importamos en el index.js de la carpeta `routes` a todos.

    ```
        const ClientRoutes = require('./ClientRoutes');
        const ProductRoutes = require('./ProductRoutes');
        const SaleRoutes = require('./SaleRoutes');

        module.exports = {
            ClientRoutes,
            ProductRoutes,
            SaleRoutes,
        };
    ```

    7. Importemoslos a la App.
    ![Alt text](image-1.png)

    8. Agregamos la configuracion individual de cada controlador y lo haremos por cada entidad
        * Revisar el ejemplo con ClientRoutes, ClientController y Client

    9. Crear nuestra primer migración

        1. Asegurarse de tener instalado `knex` y `pg`
        2. Asi deberia de verse las dependencia en package.json

        ```
        "dependencies": {
            "express": "^4.18.2",
            "knex": "^2.5.1",
            "pg": "^8.11.3"
        },
        ```

        3. Crear la base de datos `sales` (o el nombre de su base datos) en postgres o por asegurarse que ya existe pero sin ninguna tabla.
        4. Crear la carpeta migrations y agregar el script `knex_migrate_clients`:
        ```
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node server.js",
            "dev": "nodemon server.js",
            "knex_migrate_clients":"knex migrate:make clients"
        },
        ```
        * Otra forma para crear una migración sin agregar un nuevo script es utilizar `npx`
            - `npx knex migrate:make products`

        5. En la carpeta migrations se creará un archivo con la fecha y el nombre de la migración, parecido a lo siguiente: `20230816_clients.js`

        6. Dentro de ese archivo habra dos métodos: `up` y `down`.
        - En método up se crea la tabla clients
        
        ```
        exports.up = function(knex) {
        return knex.schema.createTable('clients',   (table) => {
          table.increments('id').primary();
          table.string('first_name').notNullable();
          table.string('last_name').notNullable();
          table.boolean('active').notNullable();
          table.timestamp('created_at').defaultTo(knex.fn.now());
        })
        };
        ```

        7. Agregar el script `knex_latest`

        ```
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node server.js",
            "dev": "nodemon server.js",
            "knex_migrate_clients":"knex migrate:make clients",
            "knex_latest":"knex migrate:latest"
        },
        ```

        8. Comprobar en pgadmin que la tabla `clients` existe con al siguente consulta en la base de datos `sales`

        ```sql
        select * from clients
        ```

    10. Si sale un error al probar alguna petición, insertar la siguiente linea en server.js
     - `server.use(express.json());`




        
