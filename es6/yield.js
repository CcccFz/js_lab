function* numbers() {
    yield 1
    return 2
    yield 3
}

console.log([...numbers()]);

const it = numbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());


function* iterEntries(obj) {
    for (let k of Object.keys(obj)) {
        yield [k, obj[k]];
    }
}
  
let myObj = { foo: 3, bar: 7 };

for (let [k, v] of iterEntries(myObj)) {
    console.log(k, v);
}