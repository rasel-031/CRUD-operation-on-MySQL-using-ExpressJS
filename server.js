const express = require("express");
const app = express();
const getRouter = require("./Router/GET-request");
const postRouter = require("./Router/POST-request");
const deleteRouter = require("./Router/DELETE-request");
const patchRouter = require("./Router/PATCH-request");

//This part is used for read data.
app.use("/read", getRouter);
//This part is used for create new data.
app.use("/create", postRouter);
//This part is used for delete data.
app.use("/delete", deleteRouter);
//This part is used for delete data.
app.use("/update", patchRouter);
//This part is used for handle missing url request.
app.use((req, res) => {
  res.status(404);
  res.send(`<h1 style="text-align: center;>Opps..404 Page Not Found.</h1>`);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
