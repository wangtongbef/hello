// 1,引入fs
let fs = require('fs');

// 2,打开文件
fs.open('it666_1.txt', 'a', (err, fd)=>{
  console.log('7777');
  // 2.1判断是否出错
  if(!err){
    //2.2 写入文件
    fs.writeFile(fd, '我是老王，一个神奇的网站', (err)=>{
      //2.2.1 写入成功
      if(!err){
        console.log('写入文件成功')
      }else {
        throw err;
      }

      // 2.3 关闭文件
      fs.close(fd, (err)=>{
        if(!err){
          console.log('文件已写入并关闭')
        }
      })
    }); //fd: 文件描述符
  }else {
    throw err;
  }
});

console.log('hahahhaha');