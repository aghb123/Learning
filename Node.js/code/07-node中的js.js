// 用来获取机器信息
var os = require('os')

// 用来操作路径的
var path = require('path')

// 获取当前机器的cpu信息
// console.log(os.cpus());

// 获取当前机器的内存
console.log(os.totalmem());

// 获取一个路径中的扩展名部分
console.log(path.extname('./hello.txt'));