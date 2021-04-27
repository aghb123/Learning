var fs = require('fs')

fs.writeFile('./hello.txt', 'tom and jerry', function(error) {
    console.log('文件写入成功');
})