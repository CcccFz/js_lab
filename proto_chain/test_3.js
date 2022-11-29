var foo = {}
F = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a); // a
console.log(foo.b); // undefined

console.log(F.a);  // a
console.log(F.b);  // b