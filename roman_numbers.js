function solution(number){
    var value = 0;
    var romanStr = "";
    var roman = [{M:1000},{CM:900}, {D:500},{CD:400},{C:100},{XC:90},
        {L:50},{XL:40},{X:10},{IX:9},{V:5},{IV:4},{I:1} ];
    for( var i = 0; i < roman.length; i ++) {
        for(var key in roman[i]) {
            while(value + roman[i][key] <= number) {
                value += roman[i][k];
                romanStr += key;
            }
        }
    }
    return romanStr;
}


/*
function solution(number){
  var thousand={"1":"M","2":"MM","3":"MMM","4":"MMMM","5":"MMMMM","6":"MMMMMM","7":"MMMMMMM","8":"MMMMMMMM","9":"MMMMMMMMM"};
  var hundred={"1": "C","2":"CC","3":"CCC","4":"CD","5":"D","6":"DC","7":"DCC","8":"DCCC","9":"CM"};
  var ten={"1": "X","2":"XX","3":"XXX","4":"XL","5":"L","6":"LX","7":"LXX","8":"LXXX","9":"XC"};
  var single={"1":"I","2":"II","3":"III","4":"IV","5":"V","6":"VI","7":"VII","8":"VIII","9":"IX"};
  var numArr=[single,ten,hundred,thousand];
  return   number.toString().split("").reverse().map(function(ele,index){
            return numArr[index][ele];
         }).reverse().join("");
}
*/