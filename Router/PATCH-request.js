const express = require("express");
const router = express.Router();
const mysql = require("../databaseConn");

//this middleware is used for parse the upcoming json data
router.use(express.json());

router.patch("/:id", (req, res) => {
  res.status(200);
  let id = req.params.id;
  let data = req.body;
  let sql = `UPDATE users SET uname = "${data.name}" where id = ${id}`;
  mysql.query(sql, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(`<h1 style="text-align: center;>Your ${id} is updated.</h1>`);
    }
  });
});

router.use((req, res) => {
  res.status(404);
  res.send(`<h1 style="text-align: center;>Opps..404 Page Not Found.</h1>`);
});

module.exports = router;
