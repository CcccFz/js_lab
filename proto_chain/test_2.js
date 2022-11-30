var A = function() {};
A.prototype.n = 1;
var b = new A();
console.log(b instanceof A);

A.prototype = {
  n: 2,
  m: 3
}
console.log(b instanceof A);
var c = new A();

console.log(b.n);  // 1
console.log(b.m);  // undefined

console.log(c.n);  // 2
console.log(c.m);  // 3