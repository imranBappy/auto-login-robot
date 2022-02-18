// var http = require('http');
// http.createServer(function (req, res) {
// }).listen(8080)();
var fs = require('fs');
const { join } = require('path');

fs.readFile('./data.json', function (err, data) {
    // console.log(JSON.parse(data.toString()));

    // const allData = data.toString()
    // const x = allData.split("\n")
    // const newX = []
    // for (let i = 0; i < x.length; i++) {
    //     const d = x[i];
    //     let repD = d.replace("\r", "")
    //     let dObj = repD.split(":")
    //     newX.push({ email: dObj[0], password: dObj[1] })
    // }


    // var rep = [];
    // for (let i = 0; i < newX.length; i++) {
    //     let e = newX[i];
    //     for (let j = 0; j < newX.length; j++) {
    //         let ob = newX[j];
    //         if (i === j) break;
    //         if (e.email === ob.email) {
    //             rep.push(ob)
    //         }
    //     }
    // }
    // console.log({ rep })


    // fs.appendFile('fake.json', JSON.stringify(rep), function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

    console.log({ err });

});

