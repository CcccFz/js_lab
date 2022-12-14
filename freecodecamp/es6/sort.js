let arr1 = [2, 4, 1, 5, 3]
function mySort1(arr) {
  return [...arr].sort((x, y) => {
    return x - y
  })
}
console.log(mySort1(arr1));
console.log(arr1);


function mySort2(arr) {
  return [...arr].sort((x, y) => {
    return x < y ? -1 : x === y ? 0 : 1
  })
}
let arr2 = ['b', 'c', 'e', 'a', 'd']
console.log(mySort2(arr2));
console.log(arr2);