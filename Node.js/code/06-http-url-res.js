var http = require('http')

// 1. 创建 Server
var server = http.createServer()

// 2. 监听 request 请求事件 设置请求处理函数
server.on('request', function(req, res) {
    // console.log('收到请求了，请求路径是：' + req.url);
    console.log('客户端端口号：', req.socket.remoteAddress, req.socket.remotePort);

    // res.write('hello')
    // res.write(' world')
    // res.end()
    // res.end('hello world')

    // 根据不同的请求路径发送不同的响应结果
    // 1. 获取请求路径
    //      req.url 获取到的是端口号之后的那一部分路径
    // 2. 判断路径处理响应
    var url = req.url
        // if (url === '/') {
        //     res.end('index page')
        // } else if (url === '/login') {
        //     res.end('login page')
        // } else {
        //     res.end('404 Not Found')
        // }

    if (url === '/products') {
        var products = [{
            name: 'apple',
            price: 8888
        }, {
            name: '菠萝',
            price: 1000
        }, {
            name: '小辣椒',
            price: 5000
        }]

        // 响应内容只能是二进制数据或者字符串
        // 数字、对象、数组、布尔值都不行
        res.end(JSON.stringify(products))
    }
})

// 3. 绑定端口号，启动服务
server.listen(80, function() {
    console.log('服务器启动成功，可以访问了');
})