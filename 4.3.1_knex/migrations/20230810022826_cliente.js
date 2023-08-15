/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
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

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
