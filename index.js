const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello world feature fixes');
});

module.exports = app.listen(8080, () => {
});
