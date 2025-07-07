//A recap of class, constructor, and super()

//1. Class and Constructor
//Constructor is like the "setup initialization for an object".
//When create the object, it follows the setup defined in the constructor.
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const Mary = new Human("Mary", 20);
console.log(Mary.name, Mary.age);

//2. Super
//Super() is used to call the constructor of the parent class
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Role extends Employee {
  constructor(name, age, avgSalary) {
    super(name, age);
    this.avgSalary = avgSalary;
  }
}
const Developer = new Role("Mary", 30, 70000);
console.log(Developer.avgSalary, Developer.name, Developer.age);

//3. This. keyword
//this. inside a class means: It’s a property or method of the instance.
