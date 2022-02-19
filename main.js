var fs = require('fs');
var robot = require("robotjs");

fs.readFile('./data.json', (err, data) => {
    let accounts = JSON.parse(data.toString());

    for (let i = 6092; i < 6200; i++) {
        const element = accounts[i];
        robot.setMouseDelay(3000)
        robot.mouseClick();
        robot.mouseClick();
        robot.keyTap('a', 'control');
        robot.keyTap('backspace');
        robot.setKeyboardDelay(100);
        robot.typeString(element.email.toLowerCase());
        robot.setKeyboardDelay(100);
        robot.keyTap('tab');
        robot.setKeyboardDelay(100);
        robot.typeString(element.password)
        robot.keyTap('enter')
        console.log(`Index = ${i}`)
        console.log(element)
    }
})

