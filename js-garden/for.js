a = [1, 2, 3];

console.log('for (i)')
for (let i = 0; i < a.length; i++) {
  console.log(i, a[i]);
}

console.log('for (v of)')
for (let v of a) {
  console.log(v);
}
for (let [i, v] of a.entries()) {
  console.log(i, v);
}

console.log('forEach(v, i)')
a.forEach((v, i) => {
  console.log(i, v);
})

console.log('map(v, i)')
a.map((v, i) => {
  console.log(i, v);
})

console.log('for in')
for (let i in a) {
  if (a.hasOwnProperty(i)) {
    console.log(i, a[i]);
  }
}

console.log('for in obj')
b = {a: 1, b: 2, c: 3};
for (let k in b) {
  // if (a.hasOwnProperty(i)) {
    console.log(k, b[k]);
  // }
}

console.log('map obj')
Object.keys(b).map(k => console.log(k, b[k]))

console.log('稀疏数组')
c = [1, , 3]
for (let [i, v] of c.entries()) {
  console.log(i, v);
}
c.forEach((v, i) => console.log(i, v))