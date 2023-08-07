const mysql = require("mysql2");

let pool = mysql.createPool({
  database: "user_hkt",
  host: "localhost",
  user: "root",
  password: "12345678",
  port: 3306,
});
module.exports = pool.promise();
