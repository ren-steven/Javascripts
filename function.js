//Performing A Task
function greeting(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}
greeting("Eric", "Ren");

//Calculating A Value
function square(number) {
  return number * number;
}
let number = square(2);
console.log(number);

function squareRoot(number) {
    return Math.sqrt(number);
}
let number_2 = 121;
let number_1 = squareRoot(number_2);
console.log("The SquareRoot of " + number_2  + " is " + number_1);
Math.sqrt(240);
