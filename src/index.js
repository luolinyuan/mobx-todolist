// function Animal() {}
// function Dog() {}

// Object.defineProperties(Animal.prototype, {
//   name: {
//     value() {
//       return "Animal";
//     }
//   },
//   say: {
//     value() {
//       return `I'm ${this.name()}`;
//     }
//   }
// });

// Dog.prototype = Object.create(Animal.prototype, {
//   constructor: {
//     value: Dog,
//     enumerable: false
//   },
//   name: {
//     value() {
//       return "Dog";
//     }
//   }
// });
// console.log(new Dog() instanceof Animal); // true
// console.log(new Dog().say());

class Animal {
  name() {
    return "Animal";
  }
  say() {
    return `I'm ${this.name()}`;
  }
}
class Dog extends Animal {
  food = "bone"; // 依赖 babel-plugin-transform-class-properties
  name() {
    return "Dog";
  }
}

console.log(new Dog() instanceof Animal);