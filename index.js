const express = require("express");
const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

// setup the templating engine ( Liquid by default )
const { Liquid } = require("liquidjs");
const engine = new Liquid();
app.engine("liquid", engine.express());
app.set("view engine", "liquid");

// Import the router module
// Use the router for all routes
const router = require("./routes/routes.js");
app.use("/", router);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server running on [http:localhost:3000].");
});
