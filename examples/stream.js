
var GameController = require('../gamecontroller.js');

var gc = new GameController();

gc.connect();

gc.on('data', function(data) {
  console.log(data);
});

gc.on('error', function(err) {
  console.error(err);
});
