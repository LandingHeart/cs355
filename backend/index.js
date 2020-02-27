const express = require("express");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = express.Router();

const port = 8080;

//middleware, function when routes are hit
const withAuth = require("./middleware");

router.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});

router.get("/api/secret", withAuth, function(req, res) {
  res.send("password");
});
const questionModel = require("./routes/question");
const customerModel = require("./routes/customers");
require("dotenv/config");
app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors());

app.use(express.static("public"));

app.use("/questions", questionModel);
app.use("/customers", customerModel);
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to port " + port)
);

app.listen(port);
