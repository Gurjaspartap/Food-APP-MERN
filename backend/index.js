const express = require("express");
const app = express();
const port = 3000;
const connectDb = require("./utils/db");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});
const createuser = require("./routes/CreateUser");
const displaydata = require("./routes/DisplayData");

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());

app.use("/api/", createuser);
app.use("/api", displaydata);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
