let http = require('http');
let port = (process.env.PORT || 5000);

let callback = (req, res) => {
    console.log(req.headers);
    res.write(JSON.stringify(req.headers));
    res.end();
};

http.Server(callback).listen(6092);
http.Server(callback).listen(6130);
http.Server(callback).listen(6049);
http.Server(callback).listen(6095);