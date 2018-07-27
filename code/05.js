/**
 * exports, require, module, __filename, __dirname
 *
 * exports ：该对象用来将函数内部的局部变量或局部函数暴露到外部
 *
 * require ：用来引入外部的模块
 *
 * module ：表示当前模块
 *
 * __filename : 对当前文件路径
 *
 * __dirname ：目录路径
 */
console.log(module);

console.log(module.exports);

console.log(exports);

console.log(module.exports === exports);//相同但是使用场景余用法不同

// exports只能通过exports.xxx来暴露及获取内部变量
// module.exports可以通过exports.xxx来暴露及获取内部变量 也可以直接赋值一个对象module.exports={xxx:yyy}

exports.str = "哈哈哈哈";

module.exports.str = "哈哈哈哈111";

console.log(__filename);

console.log(__dirname);