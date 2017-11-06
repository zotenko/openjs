const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const content = fs.readFileSync('./dom.html');
    res.end(content);
});

server.listen(4200);