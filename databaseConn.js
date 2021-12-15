const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

connection.connect((err) => {
  if (!err) console.log("Database is connected");
  if (err) console.log("Database is not connected");
});

module.exports = connection;
