//===========array============
// var fruits = new Array( "Apples", "Oranges", "Bananas");  or

var fruits = ["Apples", "Oranges", "Bananas", 24, false];
document.write(fruits[2]);//accessing 
document.write(fruits.length);

fruits[0] = "Cherries";

/*
if it is a String 
Apples", "Oranges", "Bananas" to access into an array:
fruits.split(",");
*/

//===========function============

function sayHi (name, age ){        //name, age- parameters need to have value
    document.write("<h1>Hello" + name);
    document.write("<p>You are" + age);

}

sayHi("Mike", 24);                  // given value 

//results of numbers 

function addition(num1, num2){
    return num1 + num2;              // using return 
}

document.write(addition(4, 5));
//or

var addedNumbers = addition(4, 100);


