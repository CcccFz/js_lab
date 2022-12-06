class A {
    constructor(a) {
        this.a = a
        this.x = function() { return this.a }
        this.xx = () => this.a
    }
    fn1() {return this.a}
    fn2 = () => this.a
    fn3 = function() {return this.a}
}

const a = new A(1)
console.log(a.fn1())
console.log(a.fn2())
console.log(a.fn3())
console.log(a.x())
console.log(a.xx())

const {x, xx, fn1, fn2, fn3} = a 
console.log(a.fn1())
console.log(a.fn2())
console.log(a.fn3())
console.log(a.x())
console.log(a.xx())