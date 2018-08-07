// 1,引入fs
let fs = require('fs');

// 2,读取文件
fs.readFile('it666_3.txt',(err, data)=>{
  // 2.1 判断
  if(!err){
    console.log(data);
    console.log(data.toString());
  }else{
    throw err;
  }
});

// 2,读取文件
fs.readFile('it666_3.txt',(err, data)=>{
  // 2.1 判断
  if(!err){
    console.log(data);
    console.log(data.toString());
  }else{
    throw err;
  }
});