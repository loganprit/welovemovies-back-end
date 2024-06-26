exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("movie_id").primary(); // Primary key
    table.string("title").notNullable();
    table.integer("runtime_in_minutes").notNullable();
    table.string("rating");
    table.text("description");
    table.string("image_url");
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};
