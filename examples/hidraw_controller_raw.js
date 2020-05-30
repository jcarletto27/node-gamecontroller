#!/usr/bin/env node

var GameController = require('../gamecontroller.js');
var HID = require('node-hid');
const Vendors = require('../lib/vendors.js');

var devs = GameController.getDevices();
console.log("Devices found : " + JSON.stringify(devs));

if (devs.length > 0) {
	
	var ven = Vendors[devs[0]];
	console.log(JSON.stringify(ven)); 
	console.log("Choosing Device : " + ven[0]);
	
    var path = GameController.getDevicePath(devs[0]);
	console.log("Path : " + path);
    var hid = new HID.HID(path);

    hid.on("data", function (data) {
        console.log(data);
    });

}
