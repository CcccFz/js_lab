function Bar1() {
  return 2;
}

function Bar2() {
  return new Number(2)
}

function Foo() {
  this.value = 2;

  return {
    foo: 1
  };
}

console.log(new Bar1().constructor === Bar1);
console.log(new Bar2().constructor === Number);
console.log(new Foo().value === undefined);
console.log(new Foo().foo === 1);
