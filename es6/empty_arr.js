const a1 = [undefined, undefined, undefined];
const a2 = [, , ,];

console.log(a1.length);  // 3
console.log(a2.length) // 3

console.log(a1[0]) // undefined
console.log(a2[0]) // undefined

console.log(a1[0] === a2[0]) // true

console.log()

console.log(0 in a1) // true
console.log(0 in a2) // false

console.log(a1.hasOwnProperty(0)) // true
console.log(a2.hasOwnProperty(0)) // false

console.log(Object.keys(a1)) // ["0", "1", "2"]
console.log(Object.keys(a2)) // []

console.log(a1.map(n => 1)) // [1, 1, 1]
console.log(a2.map(n => 1)) // [, , ,]