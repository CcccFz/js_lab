const obj = {
    bar: 1,
    foo: 2,
    baz: 3
}

obj.bar = undefined
obj.foo = null
delete obj.baz

for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, ' ' + obj[i])
    }
}

const test = {
    'case': '',
    delete: ''
}

const arr = [1, 2, 3]
console.log(arr)
for (var i in arr) {
    if (arr.hasOwnProperty(i)) {
        console.log(i, ' ' + arr[i])
    }
}