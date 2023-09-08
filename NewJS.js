// - used to make in-line comment


/* used to make a 
   multi-line comment*/


/* Data Types:

    undefined - any variable that you have kept but haven't defined it ;
    null - means fucking nothing son for example you created a variable of number datatype but no value is assigned then it is stated as null;
    boolean - true or false nothing new here moron;
    string - taking words/ array of characters as input as usual;
    symbol - an immutable privitive value that is unique;
    number - all numbers (float, int and double) as considered in this datatype;
    object - can store a lot of different "key,value" pairs */

// a variable (var) is used to set/ store/ manipulate data dynamically meaning that the data is pointed by a label which is generated when needed
// an example is shown below :

var number = 5;
number = "Freeloader";

//There are 3 ways to declare variables in JS :

var number = 69; //can be used anywhere in JS
let length = 143;//can only be used locally where it is declared
const shit = "Noob"; //whose value cannot be changed/ altered

var a; //This means you are declaring the Variable
var b = 5; //This means you are Declaring and Assigning the Variable as '=' is an Assignment Operator

console.log(number) //allows you to see the output in the console window
console.log(a) // uninitialized var - will give undefined as output as we have declared it but have not initialzed any value

//  IT IS A CASE SENSITIVE LANGUAGE


// BASIC MATHS (The Fun Stuff for Beginner Nerds ):

//add :
var sum = number + b;
console.log(sum)

//substract:
var sub = number - b;
console.log(sub)

//multiplication:
var mul = number * b;
console.log(mul)

//division:
var div = number/b;
console.log(div)

//increament:
number++;

//decreament:
number--;

//remainder :
var rem = number % b;
console.log(rem);

//Compound Assignment with Augmented Addition
number += b; //Note: this will work only when the '+' is typed beside '=' so if exp is : number+ = b ;it doesnt work

//Augmented Substraction
number -= b;

//Augmented Multiplication
number *= b;

//Augmented Division
number /= b;

var str = "I am anish \"This is a Quote in a String so use back-slash to skip the quotes\" hehe";
var k = str

str = `with this 'back tick' now i can use "Single and Double Quotes" `;

//String Escape Sequences :

/*
    \' - Single Quote
    \" - Double Quote
    \\ - backslash
    \n - new line
    \r - carriage return
    \t - tab
    \b - backspace
    \f - form feed
*/

//String Concat:
str += k;

//Length of a String
len = str.length;

FirstChar = str[0];

//Array:
var FirstArray = ["Dom", 45]

//Adding Elements using push:
FirstArray.push(["happy","joy"]);
console.log(FirstArray);

//To add an element in the first index (0th index) of the array
FirstArray.unshift(["YOLO","RapVapire"])

//Removing an Element in the Array:
FirstArray.pop();

//To remove the starting element instead of the last element in the array we use 
FirstArray.shift();

//NOTE :

//Variables Declared outside the function have global scope (anyone can access in the class)
//Variables declared inside the function have local scope (only the stuff within the function can access this)
//If the same variable is used in Global and Local Scope then the Local Scope takes Priority over Global

//--------

//you can return a value of a function to a variable or output using 'return' syntax

//The Syntax : JSON.stringify(variable) converts an Array to a String Datatype to be easily be printed out  

//COMPARISON Operators :

// '==' : This symbol compares two values after type conversion to have the same datatype and then compare
//'===' : This symbol compares two values without type conversion (So giVes more precise output)

//Note : 

/* The var when declared in the function it is used anywhere in the function
 but when you are using a let/ const to define a variable it can be used only within the block
 and not outside the block

 Example :
 if you use var to declare a variable in a if condition in a function that var can be used in the function
But let and const will allow you to access the data only within the if block and cannot be used outside it */`