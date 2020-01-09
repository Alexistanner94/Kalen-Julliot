const path = require("path");
const router = require("express").Router();
const registrationRoutes = require("../route");

router.use("/api", registrationRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
