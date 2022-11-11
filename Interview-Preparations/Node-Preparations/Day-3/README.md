1. How do you create a simple Express.js application ?

- const express = require('express')
  const app = express()
  const port = 3000

  app.get('/', (req, res) => {
  res.send('Hello World!')
  })

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })

2. Implementation of all type of exports in backend application.

   1. function add(x, y) {
      return x + y;
      }

      function subtract(x, y) {
      return x - y;
      }

      module.exports = { add, subtract};

   2. module.exports = {
      add: function (x, y) {
      return x + y;
      },

      subtract: function (x, y) {
      return x - y;
      },
      };

   3. module.exports.add = function (x, y) {
      return x + y;
      };

3. Create a middleware which will be applicable to all the routes

- const express = require('express')
  const app = express()

  app.get('/', (req, res) => {
  res.send('Hello World!')
  })

  app.listen(3000)

4. Implement CORS.

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', (req, res) => {
res.json({
message: 'Hello World'
});
});

app.get('/:name', (req, res) => {
let name = req.params.name;

    res.json({
        message: `Hello ${name}`
    });

});

app.listen(3000, () => {
console.log('server is listening on port 2020');
});
