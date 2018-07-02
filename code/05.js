/**
 * exports, require, module, __filename, __dirname
 *
 * exports ：该对象用来将函数内部的局部变量或局部函数暴露到外部
 *
 * require ：用来引入外部的模块
 *
 * module ：
 */

console.log(module.exports);

console.log(exports);

console.log(module.exports === exports);

exports.str = "哈哈哈哈";

module.exports.str = "哈哈哈哈111";

console.log(__filename);

console.log(__dirname);