/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments("user_id");
            table.string("username", 128).notNullable().unique();
            table.string("password", 128).notNullable();
            table.string("biography", 2000);
        })
        .createTable('headshots', table => {
            table.increments("id");
            table.string("title", 128).notNullable();
            table.string("url").notNullable();
            table.integer("user_id").notNullable();
        })
        .createTable('onstage', table => {
            table.increments("id");
            table.string("title", 128).notNullable();
            table.string("url").notNullable();
            table.integer("user_id").notNullable();
        })
        .createTable('onset', table => {
            table.increments("id");
            table.string("title", 128).notNullable();
            table.string("url").notNullable();
            table.integer("user_id").notNullable();
        })
        .createTable('videos', table => {
            table.increments("id");
            table.string("title", 128).notNullable();
            table.string("url").notNullable();
            table.integer("user_id").notNullable();
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("videos")
    .dropTableIfExists("onset")
    .dropTableIfExists("onstage")
    .dropTableIfExists("headshots")
    .dropTableIfExists("users")
};
