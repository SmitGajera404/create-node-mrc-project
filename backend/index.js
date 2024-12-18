const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;

const routes = require('./Routes/routes.js');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
