// art-template 
// 不仅可以在浏览器使用，也可以在node中使用


// 安装
//   npm install art-template --save
//  该命令在哪执行就会把包下载到哪里。默认会下载到node_modules 目录中
// node_modules 不要改，也不支持改

// 在node 中使用 art-template 模板引擎
// 模板引擎最早就是诞生于服务器领域，后来才发展到了前端

// 1. 安装 npm install art-template
// 2. 在需要使用的文件模板中加载 art-template
//      只需要使用require方法加载就可以了 require('art-template')
//      参数中的 art-template 就是你下载的包的名字
//      也就是说你install的名字是什么，则你 require 中的就是什么
// 3. 查文档，使用模板引擎的 API

var template = require('art-template')
var fs = require('fs')
    // var tplStr = `
    // <!DOCTYPE html>
    // <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     大家好，我叫：{{name}} 
//     我今年 {{age}} 岁了 
//     我来自 {{province}} 
//     我喜欢：{{each hobbies}}{{ $value }}{{/each}}
// </body>

// </html>
// `

fs.readFile('./tql.html', function(err, data) {
    if (err) {
        return console.log('读取文件失败');
    }
    // 默认读取到的data是二进制数据
    // 而模板引擎的render方法需要接收的是字符串
    // 所以这里需要把data二进制数据转为字符串
    var ret = template.render(data.toString(), {
        name: 'Jack',
        age: 18,
        province: 'Beijing',
        hobbies: ['coding', 'sing', 'game']
    })
    console.log(ret);
})