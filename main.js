var fs = require('fs');
var robot = require("robotjs");

fs.readFile('./data.json', (err, data) => {
    let accounts = JSON.parse(data.toString());

    for (let i = 6072; i < 6200; i++) {
        const element = accounts[i];
        robot.setMouseDelay(7000)
        robot.mouseClick();
        robot.mouseClick();
        robot.keyTap('a', 'control');
        robot.keyTap('backspace');
        robot.setKeyboardDelay(1000);
        robot.typeString(element.email.toLowerCase());
        robot.setKeyboardDelay(500);
        robot.keyTap('tab');
        robot.setKeyboardDelay(1000);
        robot.typeString(element.password)
        robot.keyTap('enter')
        console.log(`Index = ${i}`)
        console.log(element)

        // robot.setKeyboardDelay(2000);
        // robot.mouseClick();
        // robot.typeString(element.email.toLowerCase());
        // robot.keyTap('enter')



    }
})

