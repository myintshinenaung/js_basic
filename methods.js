const mySelf = {
  //property
  name: "Myint Shine Naung",
  age: 27,
  job: "developer",

  //methods
  teach: function (what, where) {
    return this.name + " can learn " + what + " I learn is" + where;
  },
  //methods ES6
  learn(anything) {
    return `${this.name} can learn  +${this.anything}`;
  },
  //methods ES6
  learn(about = "developer") {
    return "I can learn " + about;
  },
  showThis: function () {
    console.log(this.name, this.age, this.job, this.learn());
  },
  teach: function(what,where){
    return "My name is " + this.name + " I am " + this.age + " years old. " + " I learn " + what + " It is " + where;
  },
  learn(anything = "developer"){
    return ` My name is ${this.name} and I am ${this.age} years old. I learn language ${anything}`
  }, 
  showThis: function() {
    console. log(this.name, this.age, this.job,this.teach())
  }
};
console. log(mySelf.showThis())

console. log(mySelf.teach("Fullstack developer"," MMS IT."))
console.log(mySelf.learn("Backend developer."));
console.log(mySelf.learn(about="developer."));
console.log(mySelf.teach("Fullstack developer", " MMS IT."));
console. log(mySelf.learn())
console. log(mySelf.showThis())