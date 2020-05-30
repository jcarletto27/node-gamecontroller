
var GameController = require('../gamecontroller.js');

var gc = new GameController();

gc.connect();

gc.on('JOYL:move', function(o) {
  console.log(o);
});
