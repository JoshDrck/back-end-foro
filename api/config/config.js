const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dbforoweb",
  password: "josh",
  port: 5432,
});

module.exports = pool;
