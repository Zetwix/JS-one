//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript?fbclid=IwAR1nTmcF42EmbMKfSbAPxmewEc0C_wo_RqZnd2FdFwI3GVUOxnyUUiBefGg

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR0z5utPM1qGWnUk-N0mwuXuWk2KjeZtIAC7fhViYCU-fU9V4PpeW8Fme7o

function circleCircumference(circle) {
  return circle.radius * 2 * Math.PI;
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript?fbclid=IwAR1tPrsP6qGtqtz1AuOnIO8nhpXhayLkj0pWPRBhxCa7yXjnTb_YluYXYd4

// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age); 
    this.legs = 0;
    this.species = "shark";
    this.status = status;
       
  }
}

class Cat extends Animal {
    constructor(name, age, status) {
    super(name, age); 
    this.legs = 4;
    this.species = "cat";
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
    super(name, age); 
    this.legs = 4;
    this.species = "dog";
    this.status = status;
    this.master = master;
  }
}

//



//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR1SCJLr25wS5Ki6QPNygIC_-HWsV9lH9KjWJn1kcMWfISWF-3ImZd2Cbqw

function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let m = i;
    res.push(function() {
      console.log(i);
      return m;
    });
  }
  return res;
}
