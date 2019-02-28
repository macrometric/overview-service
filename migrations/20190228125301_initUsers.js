
exports.up = async function (knex, Promise) {
  await knex.schema.createTableIfNotExists("users", table => {
    table
      .increments("user_id")
      .unsigned()
      .primary();
    table.string("email").notNullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
  });
};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTableIfExists("users");
};
