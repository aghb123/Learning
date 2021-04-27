// 浏览器中的 JavaScript 是没有文件操作的能力的
// 但是 Node 中的 JavaScript 具有文件操作的能力

// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 2. 读取文件
//  第一个参数就是要读取的文件路径
//  第二个参数是一个回调函数
//  error
//      如果读取失败，error 就是错误对象
//      如果读取成功，error 就是 null
//  data
//      如果读取成功，data 就是读取到的数据
//      如果读取失败，data 就是 null
fs.readFile('./hello.txt', function(error, data) {
    console.log(data.toString());
})