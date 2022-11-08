const express = require("express");
const app = express();
const host = "localhost";

const definition =
  "Express is a simple, minimalistic and lightweight framework for building web servers. Express.js is a web application framework for Node.js. It provides various features that make web application development fast and easy which otherwise takes more time using only Node.js.";
const displayInfo = `<p>
                        <h1>What is Express.js ?</h1>
                        <p>${definition}</p>
                    </p>`;

app.get("/api/main", (req, res) => {
  res.send(displayInfo);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on http://${host}:${port}/api/main`)
);
