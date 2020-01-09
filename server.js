const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./DB.js");
const registrationRoutes = require("./route");
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI || config.DB, { useNewUrlParser: true })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database" + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", registrationRoutes);
app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
