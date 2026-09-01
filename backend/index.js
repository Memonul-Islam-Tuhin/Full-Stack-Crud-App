require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db");
const createBookStore = require("./routes/clientRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", createBookStore);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

db();
