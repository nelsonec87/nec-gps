let http = require('http');
var url = require('url');

new http.Server((req, res) => {
    var queryData = url.parse(req.url, true).query;
    console.log(new Date, queryData);
    res.end();
}).listen(6055);

setInterval(() => { console.log('-'); }, 1000);
