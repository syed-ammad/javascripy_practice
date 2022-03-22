// Fuctions Are Objects ===> IN JS

// Noramal FUnction
function sum(numOne, numTwo) {}

// Arrow Function
const subtract = (numOne, numTwo) => {};

// =======
const multiply = function (numOne, numTwo) {};

// ?  How We Can Pass Func As A Argument in Js ====  Because Functions Are Objects

// First Class Citizen / Objects
// 1)  As A Argument Function Can Take Function
// 2) Function Can Return Another Function

const Outer = (fn) => {
  console.log(fn);
};

// 1)  As A Argument Function Can Take Function
Outer(subtract);

// 2) Function Can Return Another Function
function Outer2() {
  const inner = () => {
    console.log("I AM INNER FUNCTION");
  };
  return inner;
}

const  z = Outer2();
// consy z = inner
z()


// HIGH ORDER FUNCTIONS ===> Which Function takes another Func As A Argument is Called High Order Function


// CALLBACK : if Function Taking Another Function Then Calling it Later  === is Called Callback








