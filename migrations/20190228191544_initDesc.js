
exports.up = async function (knex, Promise) {
  await knex.schema.createTable("description", table => {
    table
      .increments("user_id")
      .unsigned()
      .primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.string("price").notNullable();
    table.integer("rating").notNullable();
  });
};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable("description");
};
