const pg = require('pg');

//const Pool = pg.Pool;

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'dvdrentals', 
    user: 'postgres',
    password: 'root',
});

pool.query("SELECT * from actor WHERE first_name='Penelope'", (error, results) => {
    if(error) {
        console.error('Ocurrió un error');
        console.error(error);
        return;
    }
    console.log(results.rows);
});


const persona = {
    name: 'Mali',
    apellido: 'Becerril'
}


pool.query("INSERT INTO actor(first_name, last_name) VALUES ($1, $2)", [persona.name, persona.apellido], (error, results) => {
    if(error) {
        console.error('Ocurrió un error');
        console.error(error);
        return;
    }
    console.log(JSON.stringify(results));
});