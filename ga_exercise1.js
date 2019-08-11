document.write(" <h3 style='color:blue;'>Jow and Antos");
alert("File is working");
document.write("<hr/>");

var phrase = "be nice to other people";

document.write( phrase);
document.write( phrase);

document.write( phrase);
document.write( phrase);
phrase = " or either be very nice";
document.write( phrase);
document.write( phrase);
document.write( phrase);

/*  types of variables 
var name = "Mike";
var age = 23;
var gap = 3.1;
var isMale = true;
var flaws = null;
var description = undefined;

*/
/* methods
document.write(phrase.length);
document.write(phrase.toUpperCase()); 
document.write(phrase.charAt(1));   specific index   
document.write(phrase.indexOf("t"));
*/

var phrase = "this is cool";
document.write(phrase.substring(3, 6)); 
document.write(phrase.endsWith("cool"));


/* concatenation
var phrase = "what shoudl I eat for dinner";
var text = " maybe a toast"

document.write ( phrase + " " + text );
*/


//===============================================
var name = window.prompt ("what is Your ame?");
var age = window.prompt ("What is Your age ?");

document.write ("Hey " + name + "you are " + age + " years old");

