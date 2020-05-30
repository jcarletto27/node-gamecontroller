var HID = require('node-hid');
console.log(HID.devices());


//specify the hidraw path listed from HID.devices();
var hid = new HID.HID("/dev/hidraw0");
//var hid = new HID.HID('1673','1026');
hid.on("data", function (data) {
    console.log(data);
});
