// 构造函数、构造函数的显示原型、实例的隐式原型
function Person(name) {
    this.name = name
}
Person.prototype.sayName = function() {}
const person1 = new Person('')
console.log(Person.prototype)
console.log(person1.__proto__)
console.log(person1.__proto__ === Person.prototype)

// 函数是Function构造函数的实例
function fn1(name) {}
const fn2 = function(name) {}
const fn3 = name => {}
// const fn1 = new Function('name', 'console.log(name)')
// const fn2 = new Function('name', 'console.log(name)')
// const fn3 = new Function('name', 'console.log(name)')
console.log(Function.prototype)
console.log(fn1.__proto__)
console.log(Function.prototype === fn1.__proto__)

// 对象是Object构造函数的实例
const person2 = {}  // 等同于 new Object()
console.log(Object.prototype)
console.log(person2.__proto__)
console.log(Object.prototype === person2.__proto__)