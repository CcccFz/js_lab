// 立即调用函数表达式
(function (name) {
  console.log(name);
})('aaa')


const mixinModule = (function () {
  return {
    eatMixin(obj) {
      obj.eat = () => { }
    },
    flyMixin: obj => {
      obj.fly = () => { }
    }
  }
})()

let cat = {}
mixinModule.eatMixin(cat)