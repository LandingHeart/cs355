const express = require("express");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = express.Router();

const port = 8080;

//middleware, function when routes are hit

require("dotenv/config");
app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors());
const questionModel = require("./routes/question");

app.use("/questions", questionModel);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to port " + port)
);

app.listen(port);
