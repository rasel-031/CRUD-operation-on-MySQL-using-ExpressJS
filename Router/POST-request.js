const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mysql = require("../databaseConn");

const storeData = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.dirname(__dirname) + "/uploadPhotos/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const formData = multer({ storage: storeData });

router.get("/formPage", (req, res) => {
  res.status(200);
  res.set("Content-Type", "text/html");
  res.sendFile(path.dirname(__dirname) + "/pages/formPage.html");
});

router.post("/", formData.any(), (req, res) => {
  res.status(200);
  let data = req.body;
  let sql = `INSERT INTO users(uname, upassword) VALUES("${data.uname}", "${data.upass}")`;
  mysql.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.send("Your data is not inserted.");
    } else {
      res.send("Yuh, your data is inserted.");
    }
  });
});

router.use((req, res) => {
  res.status(404);
  res.send(`<h1 style="text-align: center;>Opps..404 Page Not Found.</h1>`);
});

module.exports = router;
