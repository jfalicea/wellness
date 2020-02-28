const pgp = require("pg-promise")({
  query: e => console.log(e.query)
});
const db = pgp({
  host: 'localhost',
  port: '5432',
  database: 'wellness'
});

module.exports = db;