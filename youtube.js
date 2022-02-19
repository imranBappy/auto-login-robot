const robot = require('robotjs');

// robot.setKeyboardDelay(100)
// robot.setKeyboardDelay(100)
// robot.keyTap('tab', 'control')

// robot.setKeyboardDelay(100);
// robot.keyTap('/')
// robot.typeString('Data communication system 66644')
// robot.keyTap('enter')
// robot.moveMouseSmooth(793, 328);
// setTimeout(function () {
//     robot.scrollMouse(500, 500);
// }, 2000);
// var mouse = robot.getMousePos();
// console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);

// robot.moveMouse(0, 0);
// robot.mouseToggle("down");
// robot.dragMouse(100, 100);
// robot.mouseToggle("up");
robot.keyTap('tab', 'alt');
// setInterval(() => {
//     robot.keyTap('down')
// }, 0);
robot.keyTap('r', 'command');
robot.typeString('cmd')
robot.keyTap('enter')
robot.keyTap('f11')
robot.mouseClick();
robot.mouseClick();
robot.typeString("ipconfig");
robot.keyTap('enter')
// robot.keyTap('f4', 'alt')

