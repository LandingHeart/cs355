const express = require("express");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = express.Router();
const path = require("path");
const port = process.env.PORT || 8080;

//middleware, function when routes are hit
const withAuth = require("./middleware");

router.get("/checkToken", withAuth, function (req, res) {
  res.sendStatus(200);
});

router.get("/api/secret", withAuth, function (req, res) {
  res.send("password");
});
const questionModel = require("./routes/question");
const customerModel = require("./routes/customers");
const courseModel = require("./routes/course");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors());

app.use(express.static("public"));
app.use("/courses", courseModel);
app.use("/questions", questionModel);
app.use("/customers", customerModel);
mongoose.connect(
  process.env.MONGOD_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to port " + port)
);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
