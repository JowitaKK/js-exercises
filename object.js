// objects

var person = {
    name: "Jov",
    age: 18,
    isFemale: true
};

person.name = "Mike";  // to change value
document.write(person.name);  // to access 

//

var phrase = "String are strange";
document.write(phrase.length);

// function inside the object 

var person = {
    name: "Jov",
    age: 18,
    isFemale: true,
    printName: function (){
        document.write("<h1>" + this.name + "</h1>"); // accessing the name inside the function 
    }
};

person.printName();