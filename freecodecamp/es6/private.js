function Person() {
  let pwd = '123'
  this.getPWD = () => {
    return pwd
  }
}

const p = new Person();
console.log(p.pwd);
console.log(p.getPWD());