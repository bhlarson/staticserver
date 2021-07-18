console.log("Starting Server on " + process.platform + " with node version " + process.version);

var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = 1337;
app.use(express.static('public'));

app.put('/on', function (req, res) {
  console.log('/off')
});

app.put('/off', function (req, res) {
  console.log('/off')
});


http.listen(port, function () {
  console.log("Listening on port " + port);
});

module.exports = app;
console.log("Static server running");
