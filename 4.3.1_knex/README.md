# Knex 
### Manual de uso en un nuevo proyecto con Node y una base de datos relacional (postgresql).

Knex.js es un constructor de **consultas SQL** para JavaScript, es una abstracción delgada en la parte superior del controlador. Se utiliza en las bases de datos relacionales(PG, MYSQL, SQL).

## Instalación

Se puedes instalar de dos maneras Knex cuando voy a utilizarlo en un proyecto:

1. Global: `npm i knex -g` 
    - Recordando que `-g` es un modificador para instalar de forma global (o sea en toda la compu, no sólo para el proyecto en el que se corre el comando).

2. Local: `npm i knex`
    - Lo que permitirá instalarlo sólo para el proyecto en el que corras el comando.

Se recomienda la instalación local para los proyectos, para evitar problemas de versionamiento con Knex.

### Scripts

Si optas por la opción 2, todos los comandos que se mencionaremos más adelante se deberán agregar en un script dentro de nuestro package.json y la instalación se hará después de inicializar el proyecto.

## Iniciar el proyecto

1. Inicializamos el proyecto dentro de una carpeta destinada para el mismo.

- `npm init -y`
2. Instalar los recursos necesarios:
    - `npm i express knex pg`
        - express: Biblioteca para creación de API.
        - knex: Query Builder (constructor de consultas).
        - pg: Driver de PostgreSQL, puedes cambiarlo dependiendo de la base de datos que ocupes.

3. Crear mi .gitignore:
    - node_modules/

## Configuración de Knex

1. Iniciar la configuración de Knex para el CRUD de operaciones por medio de ``migrations`` en Knex.
    - `knex init`: esto nos autogenerará un archivo llamado knexfile.js
        - Nota: Si tu hiciste una instalación local para poder correr el comando, requieres agregarlo a un script en el package.json:
            - Vamos al package.json
            - Agregamos un script:
                ```
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                ```
                ```
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "knex": "knex init"
                },
                ```
            - Y para ejecutarlo en la terminal correremos:
                - `npm run nombreDelScript` => `npm run knex`


```
Migraciones

    Una migración es un *control de versiones* de nuestra base de datos, y nos permite crear tablas, establecer relaciones, modificarlas y por supuesto eliminarlas, y todo esto con comandos y de manera programacional en vez de directamente hacerlo en la base de datos.

```    

2. Ejecutar en la terminal el comando ``knex init`` nos ayudará a inicializar un archivo de configuración de knex para nuestro proyecto.
Este creará el archivo ``knexfile.js`` en la raíz de nuestro proyecto, donde tendremos que configurar manualmente la conexión y configuración de la base de datos para los diferentes entornos.
    - Desarrollo: Development.
    - En preparación: Staging.
    - Producción: Production.

3. Agregar la configuración para desarrollo porque es lo que estamos haciendo ahora:

    ```
    development: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            database: 'sales', 
            user: 'postgres',
            password: 'root',
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    ```

4. Crear migración.

    -  Se crean migraciones tanto entidades queramos  agregar a nuestra base de datos.

    - Por ejemplo, yo quiero crear la entidad cliente,
        - `knex migrate:make nombreTabla`
        - `knex migrate:make cliente`

            - Nota: Si tu hiciste una instalación local para poder correr el comando, requieres agregarlo a un script en el package.json:
            - Vamos al package.json
            - Agregamos un script:
                ```
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "knex": "knex init"
                },
                ```
                ```
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "knex": "knex init",
                    "knex_migrations": "knex migrate:make cliente && knex migrate:make producto"
                },
                ```
            - Y para ejecutarlo en la terminal correremos:
                - `npm run nombreDelScript` => `npm run knex_migrations`

La ejecución de ese comando me permitirá crear un archivo con dos funciones:

- exports.up: Es lo que la migración creará según lo que configuremos (tablas, campos, cambiar tipos de campos, etc.)
- exports.down: Definimos como revertir la migración realizada por exports.up.


5. CRUD a la base de dato de manera programatica.

    Dentro de la función: ``exports.up``:

    ```
    exports.up = function(knex) {
    return knex.schema.hasTable('cliente').then((exists) => {
            if (!exists) {
                return knex.schema.createTable("cliente", function (table) {
                table.increments("dni").primary();
                table.string("nombre").notNullable();
                table.string("primer_apellido").notNullable();
                table.boolean("active").notNullable().defaultTo(true);
                table.timestamp("created_at").defaultTo(knex.fn.now());
                });
            }
        });
    };

    ```

6. Una vez que ya cree el código para crear mi base de datos, me encargaré de ejecutar el comando para cargar las indicaciones en la base de datos, eso creará dos tablas:
    - knex_migrations
    - knex_migrations_lock

    - `knex migrate:latest`

        - Nota: Si tu hiciste una instalación local para poder correr el comando, requieres agregarlo a un script en el package.json:
            - Vamos al package.json
            - Agregamos un script:
                    ```
                    "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1",
                        "knex": "knex init",
                        "knex_migrations": "knex migrate:make cliente && knex migrate:make producto"
                    },
                    ```
                    ```
                    "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1",
                        "knex": "knex init",
                        "knex_migrations": "knex migrate:make cliente && knex migrate:make producto",
                        "knex_latest": "knex migrate:latest"
                    },
                    ```
                - Y para ejecutarlo en la terminal correremos:
                    - `npm run nombreDelScript` => `npm run knex_latest`.
    
    