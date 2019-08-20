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

// nested 
var flights = {
    airline : "Oceanic",
    number : 666,
    departure: {
        Iata : "Syd",
        time : "2003-04-11 10:14",
        city: "LA"
    },
    arrival : {
        Iata : "Lax",
        time : "2003-09-11 7:14",
        city: "NY"

    }
};


flights.departure.Iata

flights["airline"]