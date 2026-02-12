const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce",
  password: "1234",  // put your password
  port: 5432,
});

module.exports = pool;
