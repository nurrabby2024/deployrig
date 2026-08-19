const http = require('node:http');

const server = http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'application/json' });
 res.end(JSON.stringify({ service: 'DeployRig', healthy: true, at: new Date().toISOString() }));
});

server.listen(process.env.PORT || 8080, () => {
 console.log('DeployRig service up');
});