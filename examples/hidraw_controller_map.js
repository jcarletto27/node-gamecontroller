var GameController = require('../gamecontroller.js');
var HID = require('node-hid');
const Vendors = require('./lib/vendors.js');

console.log(HID.devices());

var devs = GameController.getDevices();
if (devs.length > 0) {
    var path = GameController.getDevicePath(Vendors[devs[0]]);

    var hid = new HID.HID(path);

    hid.on("data", function (data) {
        console.log(data);
    });

}
