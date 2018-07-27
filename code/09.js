//1,值类型

// let num1 = 30;
// let num2 = num1;
//
// num1 += 10;
//
// console.log(num1);
// console.log(num2);

//2,引用类型

// let obj1 = {};
//
// let obj2 = obj1;
//
// obj2.name = '张三';
//
// console.log(obj1.name);

// let md = new Object();
//
// md.exp = new Object({name:'哈哈哈'});

// console.log(md);
//
// let exp = md.exp;
//
// exp.name = '张三';

// console.log(exp.name);
// console.log(md.exp.name);

// exp = {name: '张三'} //重新赋值，指向新的对象
//
// console.log(exp.name);
// console.log(md.exp.name);

let Person = require('./person');

let p = new Person('张三', 19, '男');

console.log(p);