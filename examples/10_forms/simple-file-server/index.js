const http = require('http');
const qs = require('querystring');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 4200;

const server = http.createServer((req, res) => {
    console.log('req.url', req.url);
    console.log('req.method', req.method);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'POST' && req.url === '/upload') {
        let body = '';

        req.on('data', (chunk) => {
            console.log('chunk', chunk);
            body += chunk;
        });

        req.on('end', () => {
            const fileName = '' + Date.now();
            fs.writeFile(fileName, body, (error) => {
                if (error) {
                    res.statusCode = 500;
                    res.end('Error');
                    return;
                }

                res.statusCode = 200;
                res.end('Ok');
            });
        });

        return;
    }

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});