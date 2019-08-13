var questions = [
    {
        prompt:"What color are apples? \n(a) Red/Green \n(b) Purple\n(c) Orange",
        answer: "a"
    }, 
    {
        prompt:"What color are Bananas? \n(a) Red/Green \n(b) Purple\n(c) Yellow",
        answer: "c"
    }, 
    {
        prompt:"What color are strawberries? \n(a) Green \n(b) Red\n(c) Orange",
        answer: "b"
    }, 

]

var score = 0;
for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == question[i].answer){
        score++;
        alert("Correct");
    } else {
        alert ("Wrong!");
    }
}

alert("you got " + score + "/" + questions.length);