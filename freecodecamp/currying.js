function add(x, y, z) {
    return x + y + z
}

// function add1(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z
//         }
//     }
// }
const add1 = x => y => z => x + y + z  // 柯里化
console.log(add1(1)(2)(3))

const add2 = add.bind(null, 1, 2)  // bind局部调用
console.log(add2(3))
