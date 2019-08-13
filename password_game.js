var password = "jov";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while(response != password && !error){
    if(response != password){
        response = window.prompt("Enter password");
        entryCount++;

    } else {
        error = true;
    }
}
if (error){
    alert("Too many entries");
} else {
    alert("You got it!");
}