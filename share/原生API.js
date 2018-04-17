/**
 * Created by tlhagh on 2018/3/28.
 */
let http = require("http");

function parseCookies(request) {
    let list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function (cookie) {
        let parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

http.createServer(function (req, res) {
    console.log(req.method);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.setHeader('Access-Control-Allow-Headers', 'token');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    switch (req.method) {
        case 'POST':
        {
            //增加和修改
            let item = '';
            req.setEncoding('utf8');
            let cookies = parseCookies(req);
            console.log('cookies:', cookies);
            req.on('data', function (chunk) {
                item += chunk;
                console.log(decodeURIComponent(item));
            });
            req.on('end', function () {

            });
            break;
        }
        case 'GET':
            break;
        case 'DELETE':
            break;
    }
    res.end(JSON.stringify({
        "username": 'zx',
        'token': '123456'
    }));
}).listen(3000, () => {
    console.log('listen on 3000');
});

