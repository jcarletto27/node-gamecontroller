
var GameController = require('../gamecontroller.js');

var gc = new GameController();

gc.connect();

gc.on('A:press', function () {
    console.log("Pressed : A");
});

gc.on('B:press', function (o) {
    console.log("Pressed : B");
});
gc.on('X:press', function (o) {
    console.log("Pressed : X");
});

gc.on('Y:press', function (o) {
    console.log("Pressed : Y");
});

gc.on('N:press', function (o) {
    console.log("Pressed : North");
});

gc.on('NE:press', function (o) {
    console.log("Pressed : North East");
});

gc.on('E:press', function (o) {
    console.log("Pressed : East");
});

gc.on('SE:press', function (o) {
    console.log("Pressed : South East");
});

gc.on('S:press', function (o) {
    console.log("Pressed : South");
});

gc.on('SW:press', function (o) {
    console.log("Pressed : South West");
});

gc.on('W:press', function (o) {
    console.log("Pressed : West");
});

gc.on('NW:press', function (o) {
    console.log("Pressed : North West");
});

gc.on('Start:press', function (o) {
    console.log("Pressed : Start");
});

gc.on('Select:press', function (o) {
    console.log("Pressed : Select");
});

gc.on('LB:press', function (o) {
    console.log("Pressed : Left Stick Button");
});
gc.on('RB:press', function (o) {
    console.log("Pressed : Right Stick Button");
});

gc.on('L1:press', function (o) {
    console.log("Pressed : L1");
});

gc.on('L2:press', function (o) {
    console.log("Pressed : L2");
});

gc.on('R1:press', function (o) {
    console.log("Pressed : R1");
});

gc.on('R2:press', function (o) {
    console.log("Pressed : R2");
});


gc.on('JOYL:move', function (o) {
    console.log(o);
});

gc.on('JOYR:move', function (o) {
    console.log(o);
});
