const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllClients = () => {
    return database('clients');
};

const getClient = (idClient) => {
    return database('clients')
        .where( { id: idClient });
};

const createClient = (client) => {
    return database('clients')
        .insert(client);
};

module.exports = {
    getAllClients,
    getClient,
    createClient,
}