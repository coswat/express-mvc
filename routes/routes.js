const express = require("express");
const route = express.Router();

// root route
route.get("/", (req, res) => {
  res.render("welcome");
});

// register another routes here

module.exports = route;
