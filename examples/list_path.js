var GameController = require('../gamecontroller.js');

var dev = GameController.getDevices();
console.log(dev);
for( let i =0; i < dev.length i++){
var path = GameController.getDevicePath(dev[i]);
console.log(path);
}