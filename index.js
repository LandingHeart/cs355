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

router.get("/api/secret", withAuth, function (req, res) {
  res.send("password");
});

require("dotenv").config();

app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors());

app.use(express.static("public"));
///
const questionModel = require("./routes/question");
const customerModel = require("./routes/customers");
const courseModel = require("./routes/course");

app.use("/courses", courseModel);
app.use("/questions", questionModel);
app.use("/customers", customerModel);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
mongoose.connect(
  process.env.MONGOD_URI ||
    "mongodb://admin:1shinigamisan@ds351628.mlab.com:51628/cs355",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () =>
    console.log("connected to port " + port + " uri " + process.env.MONGOD_URI)
);
app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
