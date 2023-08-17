const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllClients = () => {
    // consultado a todos los elementos dentro del la tabla clients
    // select * from clients
    return database('clients');
};

const getClient = (idClient) => {
    // select * from clients where id = idClient
    return database('clients')
        .where( { id: idClient });
};

const insertClient = (client) => {
    // insert into clients (first_name,...) values('Maria',...)
    return database('clients')
        .insert(client);
};

const updateClient = (idClient, client) => {
    return database('clients')
        .where('id','=',idClient)
        .update(client)
}

const deleteClient = (idClient) => {
    return database('clients')
        .where('id','=',idClient)
        .del()
}

module.exports = {
    getAllClients,
    getClient,
    insertClient,
    updateClient,
    deleteClient
}