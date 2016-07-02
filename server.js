var express = require('express')
var app = express()

app.use('/', express.static(__dirname + '/build'))

app.listen(3000, function() {
  console.log('React Redux boilerplate listening on port 3000');
});