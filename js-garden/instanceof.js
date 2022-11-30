function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

console.log(new Bar() instanceof Bar) // true
console.log(new Bar() instanceof Foo) // true

Bar.prototype = Foo
console.log(new Bar() instanceof Foo) // false
console.log(new Bar() instanceof Function) // false