function Person(name, sex, age) {
  this.name = name;
  this.sex = sex;
  this.age = age;
}

Person.prototype = {
  eat: function (){
    console.log(this.name + '在吃饭');
  }
};

module.exports = Person;