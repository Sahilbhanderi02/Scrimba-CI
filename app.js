const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Works on my machine.');
  // res.send('Hello World!');   // khali fail feel karva karyu.
});

module.exports = app;
