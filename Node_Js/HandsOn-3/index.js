const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

// Middleware 1
app.use("/", (req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});

// Middleware 2
function log(req, res, next) {
  res.send("<h1>Login Page</h1>");
  console.log("Logging...");
  next();
}

// Middleware 3
function authenticator(req, res, next) {
  res.send("<h2>Authentication Page</h2>");
  console.log("Authenticating...");
  next();
}

app.use("/login", log);
app.use("/authentication", authenticator);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server Listening on http://localhost:${port}`)
);
