/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('clients',(table) => {
    table.bigInteger('idClients').notNullable();
    table.bigInteger('idProducts').notNullable();
    table.foreign('idClients').references('id').inTable('clients');
    table.foreign('idProducts').references('id').inTable('products');
    table.timestamp('datetime').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
