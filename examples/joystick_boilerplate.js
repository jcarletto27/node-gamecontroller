
var GameController = require('../gamecontroller.js');

var gc = new GameController();

gc.connect();

gc.on('A:press', function (o) {
    console.log(o);
});

gc.on('B:press', function (o) {
    console.log(o);
});
gc.on('X:press', function (o) {
    console.log(o);
});

gc.on('Y:press', function (o) {
    console.log(o);
});

gc.on('N:press', function (o) {
    console.log(o);
});

gc.on('NE:press', function (o) {
    console.log(o);
});

gc.on('E:press', function (o) {
    console.log(o);
});

gc.on('SE:press', function (o) {
    console.log(o);
});

gc.on('S:press', function (o) {
    console.log(o);
});

gc.on('SW:press', function (o) {
    console.log(o);
});

gc.on('W:press', function (o) {
    console.log(o);
});

gc.on('NW:press', function (o) {
    console.log(o);
});

gc.on('Start:press', function (o) {
    console.log(o);
});

gc.on('Select:press', function (o) {
    console.log(o);
});
gc.on('LB:press', function (o) {
    console.log(o);
});
gc.on('RB:press', function (o) {
    console.log(o);
});

gc.on('JOYL:move', function (o) {
    console.log(o);
});

gc.on('JOYR:move', function (o) {
    console.log(o);
});
