// var age = prompt('What is your age');

//document.getElementById("someText").innerHTML = age;


//Numbers
var num1 = 10;
num1++;
num1--;
console.log(num1)

//Remainder with %
console.log(num1 %5)
//Inccrease / Deccrese any # you want
num1 += 20
num1 -=15
console.log(num1) 

/*Functions
1. Create function
2. Call the function
*/

function entertainmentQuote() {
    quote = ' "Play games for entertainment owo. " '
    whoSaid = 'Said by :'
    name2 = 'Eric '
    name3 = 'Ren, '
    whenSaid = 'March 24, 2020 '
    alert(quote + whoSaid + name2 + name3 + whenSaid)

}
entertainmentQuote();


function welcomeHome(){
    var name = prompt('What is you name?');
    expectedName = 'Eric'
    owner = 'who has permision here'
    if (name == expectedName)
        alert('Hello ' + expectedName + ' Welcome home.');
    else
        alert('You are not ' + owner + '. Therefore, I will not allow you inside.')
}

welcomeHome();



function simpleMath(){
    var num1 = prompt('Whats 9 + 10? ( Not in memes).')
    expectedNumber = 19
    if (num1 == expectedNumber)
    alert('You are right. 9 + 10 is ' + expectedNumber)
    else
    alert('Whoa. 9 + 10 is ' + expectedNumber + ',' + ' dumb butt.')
}

simpleMath();

//for loop
/*for (let num = 0; num <= 100; num++) {
    console.log(num);
}
*/
function lotsOfNumbers(){
    let answer = prompt('Do you want to see a loop?( type n / y)')
    if (answer == 'y'){
        alert('Here ya go')
        for (let num = 0; num <= 10; num++)
        console.log(num)
    }
    else
        alert('ok')
}
lotsOfNumbers();


//Data Types

//1.Number
let age = 10;

//2.String
let myName = 'Eric';
let otherNames = 'Eric\nRen';//New line
console.log(otherNames)

//3.Object
let name = {first: 'Eric', last: 'Ren'};

//4.Boolean
let truth = false;

//5.Array
let foods = ['fries', 'hamburger']

//6.Undefined
let random;

//7.Value Null
let nothing = null;


