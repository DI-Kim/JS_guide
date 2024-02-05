/**
 * {
 *  let test = 5;
 *  console.log(test);  // 5
 * }
 * console.log(test);  // undefined error
 */
// var 대신 let, const를 사용하면, 변수의 의미를 더 명확하게 부여할 수 있다.

let myName = "Max";

if (myName === "Max") {
  // let hobbies = ["Sports", "Cooking"];
  var hobbies = ["Sports", "Cooking"];
  console.log(hobbies);
}

function greet() {
  let age = 30;
  let myName = "Manuel";
  console.log(myName, age);
}

console.log(myName, hobbies);

greet();

/**
 * hoisting
 */
console.log(varName); // undefined
console.log(letName); // error: access before initialization

var varName = "big"; // declare + initialize
let letName = "person"; // only declare
