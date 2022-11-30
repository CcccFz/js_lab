Object.prototype.bar = 1
var a = {foo: undefined}

console.log(a.hasOwnProperty('foo'))
console.log(a.hasOwnProperty('bar'))
console.log('bar' in a);

console.log(
    ({}).hasOwnProperty.call(a, 'foo')
)