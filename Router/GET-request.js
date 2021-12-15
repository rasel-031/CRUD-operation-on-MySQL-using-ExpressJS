const express = require("express");
const router = express.Router();
const mysql = require("../databaseConn");

router.get("/", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  mysql.query("SELECT * from users", (error, result) => {
    if (error) res.send(error);
    let data = JSON.stringify(result);
    res.send(data);
  });
  //mysql.end();
  console.log("Data has been sent.");
});

router.get("/:id", (req, res, next) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  const id = req.params.id;
  mysql.query(`SELECT * from users where id = ${id}`, (error, result) => {
    if (error) res.send(error);
    let data = JSON.stringify(result);
    let len = JSON.parse(data);
    if (len.length === 0) {
      res.status(404);
      res.send("Opps...404 Page Not Found");
    } else {
      res.send(data);
      console.log(`Data has sent by user id ${id}`);
    }
  });
  //   mysql.end();
});

router.use((req, res) => {
  res.status(404);
  res.send(`<h1 style="text-align: center;>Opps..404 Page Not Found.</h1>`);
});

module.exports = router;
