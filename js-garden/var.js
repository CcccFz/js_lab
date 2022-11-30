// a = x 全局作用域
// var a = x 当前作用域
// js只有函数作用域，没有循环作用域
for (var i = 0; i < 10; i++) {
    console.log(i);
    subLoop()
}
function subLoop() {
    for (i = 0; i < 10; i++) {}  // 加var正常
}


// 局部变量只有两种方式：函数参数，通过var声明
var foo = 1;
var bar = 2;
var i = 2;
function test(i) {
    i = 5;   // 局部

    var foo = 3;   // 局部
    bar = 4;   // 全局
}
