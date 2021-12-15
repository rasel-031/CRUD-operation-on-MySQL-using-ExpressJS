const express = require("express");
const router = express.Router();
const mysql = require("../databaseConn");

router.delete("/:id", (req, res) => {
  res.status(200);
  res.set("Content-Type", "text/html");
  let id = req.params.id;
  let sql = `DELETE from users where id = ${id}`;
  mysql.query(sql, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(`<h1 style="text-align: center;>Your ${id} is deleted.</h1>`);
    }
  });
});

router.use((req, res) => {
  res.status(404);
  res.send(`<h1 style="text-align: center;>Opps..404 Page Not Found.</h1>`);
});

module.exports = router;
