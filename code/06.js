
let rs = require("./05.js");

console.log(rs.str);//覆盖掉

// exports只能通过exports.xxx来暴露及获取内部变量
// module.exports可以通过exports.xxx来暴露及获取内部变量 也可以直接赋值一个对象module.exports={xxx:yyy}