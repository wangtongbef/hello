// 1,引入fs
let fs = require('fs');

// 2,打开文件
// fs.openSync(path, flags[, mode])
// http://nodejs.cn/api/fs.html#fs_fs_open_path_flags_mode_callback : flags[ 参数取值

let fd = fs.openSync('it666.txt', 'w'); //如果发现不了it666.TXT就新建一个

//console.log(fd);

// 3,写入内容
// fs.writeFileSync(file, data[, options])

fs.writeFileSync(fd, '今天天气很好，快来学习!!!!!!');

// 4,保存并退出

fs.closeSync(fd);