// let buffer = new Buffer(10); //可能在初始化时存入脏数据即旧数据
// console.log(buffer);

// 字符串转成二进制
let str = '我是老王王王';

let buffer = Buffer.from(str);

console.log(buffer);

console.log(buffer.toString());

// Buffer.alloc(size[, fill[, encoding]])

// 初始化：必须要有确定的长度
//

let buffer2 = Buffer(10);

buffer2[0] = 10;
buffer2[1] = 13;

buffer2[10] = 23; //溢出不作处理

console.log(buffer2);

buffer2.forEach((item,index) => {
  console.log(index + ':' + item);
})

