function A() {
  this.one = 1
  this.fn1 = () => { }
}
A.prototype.two = 2
A.prototype.fn2 = () => { }

class B {
  two = 2
  #pri = 3   // 私有属性
  constructor() {
    this.one = 1
    this.fn1 = () => { }
  }
  fn2() { }
}

a = new A()
console.log(a.hasOwnProperty('one'));
console.log(a.hasOwnProperty('two'));
console.log(a.hasOwnProperty('fn1'));
console.log(a.hasOwnProperty('fn2'));
console.log(Object.keys(a));
b = new B()
console.log(b.hasOwnProperty('one'));
console.log(b.hasOwnProperty('two'));
console.log(b.hasOwnProperty('fn1'));
console.log(b.hasOwnProperty('fn2'));
console.log(Object.keys(b));