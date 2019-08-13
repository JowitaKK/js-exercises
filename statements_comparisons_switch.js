// exercise 1 statement
var isFemale = true;
var isTall = false;

if(isFemale && isTall){
    document.write("You are tall male ");
} else if (isMale && !isTall){
    document.write("You are short male");
} else if (!isMale && isTall){
    document.write("You are tall female");
}else {
    document.write("You are not tall and not male");
}

// exercise 2 comparsion

function max(num1, num2, num3){
    if(num1 != num2 && num1 >= num3){
        return num1;
    } else if (num2 >= num1 && num2 >= num3){
        return num2;
    } else {
        return num3;
    }
}

if("phrase" == "phrase"){
    document.write("True");
}

// exercise 3 switch statement

function gettDayName(dayNum){
    var day;

    switch(dayNum){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednsday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "saturday";
            break;
        default:
            day = "Day does not exist, " + dayNumer + " not a valid number";

    }
    return day;
}

document.write(gettDayName(5));


