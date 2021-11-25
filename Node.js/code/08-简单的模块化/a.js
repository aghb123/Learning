// 在node中，模块有三种：
// 具名的核心模块，例如 fs、http
// 用户自己编写的文件模块
// 在node中，没有全局作用域，只有模块作用域
// 外部访问不到内部，内部也访问不到外部
// 默认都是封闭的
var foo = 'aaa'
console.log('a start');
require('./b.js')
console.log('a end');
console.log(foo);