// 构造函数、构造函数的显示原型对象、实例的隐式原型对象
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
console.log(Function.prototype === Person.__proto__)

// 对象是Object构造函数的实例
const obj1 = {}  // 等同于 new Object()
console.log(Object.prototype)
console.log(obj1.__proto__)
console.log(Object.prototype === obj1.__proto__)

// Object是Function构造函数的实例，Function是自己的实例
console.log(Function.prototype === Object.__proto__)
console.log(Function.prototype === Function.__proto__)

// constructor和prototype是成对的
console.log(fn1.prototype.constructor === fn1)
console.log(Person.prototype.constructor === Person)
console.log(Object.prototype.constructor === Object)
console.log(Function.prototype.constructor === Function)

// 原型对象是Object的实例
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === Object.prototype)

// 原型链__proto__的路径
console.log(person1.__proto__ === Person.prototype)
console.log(Person.prototype.__proto__ === Object.prototype)

console.log(Person.__proto__ === Function.prototype)
console.log(fn1.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

console.log(obj1.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// 原型继承，实例可以使用构造函数prototype原型对象的方法
console.log(person1.sayName === Person.prototype.sayName)
// 再顺着原型链去找
Object.prototype.sayXXX = function() {}
console.log(person1.sayXXX === Object.prototype.sayXXX)
// A instanceof B，判断B的prototype是否在A的原型路径上
console.log(person1 instanceof Person)
console.log(person1 instanceof Object)
console.log(Person instanceof Function)
console.log(Person instanceof Object)
console.log(obj1 instanceof Object)

