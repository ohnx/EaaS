var http = require('http');
var fs = require('fs');

console.log("Reading errors file...");
try {
    var readData = fs.readFileSync("errors.json");
} catch (e) {
    console.log("An error occured while reading the file: " + e);
    process.exit(1);
}

console.log("Read errors file!");

try {
    var items = JSON.parse(readData);
} catch (e) {
    console.log("An error occured while parsing the file: " + e);
    process.exit(1);
}
console.log("Starting server!");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var item = items[Math.floor(Math.random()*items.length)];
    res.end(item.name);
}).listen(80, process.env.IP);
