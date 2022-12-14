function Person() { }
Person.prototype = {
  constructor: Person,
  eat() { console.log('eat'); },
  me() { console.log(this); }
}

function Child() { }

// 法一：
Child.prototype = new Person()

// 法二：
Child.prototype = Object.create(Person.prototype)



Child.prototype.constructor = Child
new Child().eat()
new Child().me()