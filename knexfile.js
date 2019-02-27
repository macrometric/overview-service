module.exports = {
  development: {
    client: "postgresql",
    connection: `postgres://localhost:5432/user_knex_test`, //make sure to use your specific database connection here
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  }
}