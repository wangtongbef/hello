// 1,引入fs
let fs = require('fs');

// 2,创建写入流
let ws = fs.createWriteStream('it666_3.txt'); //建立通道
// console.log(ws);

// 3, 打开通道  // 问题：怎样打开的通道？这部分应该只是监听
ws.once('open', ()=>{
  console.log('通道已经打开')
});

ws.once('close', ()=>{
  console.log('通道已经关闭')
});

// 4, 写入内容
ws.write('我是老王,');
ws.write('我是老王_1,');
ws.write('我是老王_2,');
ws.write('我是老王_3');

// 5, 关闭通道
ws.end();