var GameController = require('../gamecontroller.js');
var HID = require('node-hid');
const Vendors = require('../lib/vendors.js');

var devs = GameController.getDevices();
console.log("Devices found : " + devs);

if (devs.length > 0) {
	
	var ven = Vendors[dev[0]];
	console.log("Choosing Device : " + ven);
	
    var path = GameController.getDevicePath(ven);
	console.log("Path : " + path);
    var hid = new HID.HID(path);

    hid.on("data", function (data) {
        console.log(data);
    });

}
