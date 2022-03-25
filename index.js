// Objects
//  Class ====> Object
// Object ===>

//  Age = age ===> age ====>
// Object ====> properties ===> functionalities

// dot (.) Only Work For Object
// Syntax ===> const variableName = {}
// To Access Properties ==== We Use dot notation .... ie obj.name

const obj = {
  name: "Ammad",
  age: 100000,
  walk: function () {
    console.log("I AM WALKING");
  },
};

obj.walk();

// this Keyword
const animal = {
  name: "DOG",
  bark: function () {
    console.log(`${this.name} Is Barking `);
  },
};

animal.bark();

//  DO NOT USE ARROW FUNCTIONS IN OBJECT ==== WHY ?  ====> BECAUSE OF this KEYWORD BINDING ISSUE
const animalX = {
  name: "DOG",
  bark: () => {
    console.log(`${this.name} Is Barking `);
  },
};

//  naming Convention === String, number
//  obj = {name:'Ammad'} ==== obj = {'name' : 'Ammad'}
const obj2 = {
  name: "Ammad",
};

// VAlues ==== Array ,obj ,  function , primitive(String,boolean,number,undefuned,null etc)
const objNested = {
  name: "Ammad",
  favMovies: ["BREAKING_BAD", "VIKINGS", "GLADIATOr", "FOREST_GUMP"],
  grade: {
    Matric: "FAIL",
    INTER: "SUPPLY",
    UNI: "FREEZED",
  },
};

console.log(objNested.grade.INTER);

// CLASS IN REAL
class Person {
  name = "Ammad";

  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} IS RUNNING`);
  }
  eat() {
    console.log(`${this.name} IS Eating`);
  }
}

const ammad = new Person("AMMAD");
const usama = new Person("USAMA");

ammad.run();
usama.run();
