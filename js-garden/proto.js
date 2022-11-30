// Object.prototype修改为其它对象不生效
let a = {}
console.log(a.__proto__)
Object.prototype = {c: 1}
console.log(Object.prototype)
console.log(a.__proto__)
// Object.prototype添加属性生效
Object.prototype.c = 1
console.log(Object.prototype)
console.log(a.__proto__)


// 原生继承
function Person() {
    this.name = 'John'
}
Person.prototype = {
    eat: function () {console.log('eat');}
}

function Child() {}
Child.prototype = new Person()
Child.prototype.cry = function () {console.log('cry');}
Child.prototype.constructor = Child  // 修正constructor

var c = new Child()
console.log(c.name);
c.cry()
c.eat()