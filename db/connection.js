const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "fad42201c4",
  database: "employees"
});

connection.connect(function(err){
  if (err) throw err;
});

module.exports = sequelize;