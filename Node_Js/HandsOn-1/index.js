const http = require("http");
const host = "localhost";
const port = 8000;

const data = {
  name: "Sanjeev",
  place: "Odisha",
};

const server = http.createServer((request, response) => {
  response.write("<h1>Hello World</h1>");
  response.end(JSON.stringify(data, null, 3));
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
