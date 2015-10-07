/*
 * EaaS - Error as a Service
 *
 * ohnx was here (2015)
 */
// required modules
var http = require('http');
var fs = require('fs');

// config
var server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
var server_ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1';

console.log("Reading errors file...");
// read the errors file
try {
    var readData = fs.readFileSync("errors.json");
} catch (e) {
    console.log("An error occured while reading the file: " + e);
    process.exit(1);
}

console.log("Read errors file!");
// try to parse read data
try {
    var items = JSON.parse(readData);
} catch (e) {
    console.log("An error occured while parsing the file: " + e);
    process.exit(1);
}

console.log("Starting server!");
// start server
http.createServer(function (req, res) {
    var ret, rettype = 'text/plain', item;
    switch (req.url) {
    case '/':
    case '/txt':
        item = items[Math.floor(Math.random()*items.length)];
        ret = item.name;
        break;
    case '/json':
        item = items[Math.floor(Math.random()*items.length)];
        ret = JSON.stringify(item);
        rettype = 'text/json';
        break;
    default:
        ret = "EaaS\nFor help, visit https://github.com/ohnx/EaaS";
        break;
    }
    res.writeHead(200, {'Content-Type': rettype});
    res.end(ret);
}).listen(server_port, server_ip);
