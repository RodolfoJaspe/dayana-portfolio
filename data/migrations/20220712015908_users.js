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
            table.string("biography");
        })
        .createTable('headshots', table => {
            table.increments("headshot_id");
            table.string("title", 128).notNullable();
            table.string("url").notNullable();
            table.integer("user_id").notNullable();
        })
        .createTable('onstage', table => {
            table.increments("onstage_id");
            table.string("title", 128).notNullable();
            table.string("url").notNullable();
            table.integer("user_id").notNullable();
        })
        .createTable('onset', table => {
            table.increments("onset_id");
            table.string("title", 128).notNullable();
            table.string("url").notNullable();
            table.integer("user_id").notNullable();
        })
        .createTable('videos', table => {
            table.increments("video_id");
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
