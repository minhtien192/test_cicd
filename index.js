const express = require('express');
const app = express();
const port = 3000;

console.log('Starting the server...');

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});