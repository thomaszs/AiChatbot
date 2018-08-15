const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); //html
app.use(express.static(__dirname + '/public')); //js, css and images

const server = app.listen(8080);
app.get('/', (req, res) => {
  res.sendFile('index.html');
})
