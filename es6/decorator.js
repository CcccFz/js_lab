function testable(isTestable) {
    return function(target) {
        target.isTestable = isTestable
    }
}

function replaceMethod(name) {
    return function() {
        return `hello ${name}: ${this.isTestable()}`
    }
}

@testable(true)
class A {
    @replaceMethod('xiao ming')
    hello() {
        return 'hello'
    }
}

let a = new A()
console.log(a.hello());

