let http = require('http');
let url = require('url');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter);

db.defaults({ pos: [] }).write()
new http.Server((req, res) => {
    var queryData = url.parse(req.url, true).query;
    db.get('pos').push(queryData).write()
    res.end();
}).listen(6055);