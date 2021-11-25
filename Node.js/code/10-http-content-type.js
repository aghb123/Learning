var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {
    // 在服务器端默认发送的数据，其实是 utf-8 编码的内容
    // 但是浏览器不知道你是 utf-8 编码的内容
    // 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
    // 中文操作系统默认是 gbk
    // 在http协议中，Content-Type就是用来告知对方我给你发送的内容数据是什么类型
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    // res.end('hello 中国')
    var url = req.url;
    if (url === '/plain') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('hello 中国')
    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<p>hello html <a href="">点我</a></p>')
    }
})

server.listen(3000, function() {
    console.log('server is running');
})