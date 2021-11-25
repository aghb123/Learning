var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function(req, res) {
    var url = req.url;
    if (url === '/') {
        // 要发送的还是在文件中的内容
        fs.readFile('./resource/index.html', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后重试！')
            } else {
                // data 默认是二进制数据，可以通过 .toString 转为字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/a') {
        fs.readFile('./resource/optimus.jpeg', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后重试！')
            } else {
                // data 默认是二进制数据，可以通过 .toString 转为字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                // 图片不需要指定编码
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    }
})

server.listen(3000, function() {
    console.log('server is running');
})