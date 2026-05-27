const express = require('express');
const app = express();

app.get('/', (req, res) => {
  
  console.log('purposefully to fail the test')
  let x= 75;
  

  res.send('Works on my machine.');
  // res.send('Hello World!');   // khali fail feel karva karyu.
});

module.exports = app;
