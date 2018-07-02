

//console.log(global);

//console.log(global.exports);

//console.log(global.require);

//console.log(arguments);

console.log(arguments.callee + ''); //arguments.callee 函数自身  arguments 函数参数

let test = ()=>{};

/**
 * arguments.callee 结果：
 * function (exports, require, module, __filename, __dirname) {

    //console.log(global);

    //console.log(global.exports);

    //console.log(global.require);

    //console.log(arguments);

    console.log(arguments.callee + '');

    let test = ()=>{};

    }

 */