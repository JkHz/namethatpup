// *You should not need to modify this file*

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});