let http = require('http');

let server = new http.Server((req, res) => {
    console.log(req.headers);
    res.write(JSON.stringify(req.headers));
    res.end();
});

server.listen(80);