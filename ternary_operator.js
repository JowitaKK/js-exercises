function describeAge(age){
    if(age<=12) {
        return "You're a(n) kid";
    }
    else if(age >= 13 && age <=17) {
        return "You're a(n) teenager";
    }
    else if (age >= 18 && age <=64) {
        return "You're a(n) adult";

    } else {
        return "You're a(n) elderly";
    }   
}

describeAge(17);


/* or

function describeAge(age) {
    return "You're a(n) " + (age <13 ? "kid" : age <18 ? "teenager" : age < 65 ? "adult" : "elderly" )
}
*/

/* -------------|| -----------------
to lower or upper case

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

*/
