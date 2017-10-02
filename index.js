let http = require('http');
let port = (process.env.PORT || 5000);
let server = new http.Server((req, res) => {
    console.log(req.headers);
    res.write(JSON.stringify(req.headers));
    res.end();
});

server.listen(port);
console.log('port', port);