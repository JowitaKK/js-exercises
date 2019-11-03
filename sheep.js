// If you  cant sleep just count sheep . Return a streeng with ! " 1 sheep ... 2 sheep..."

var countSheep = function (num) {
    let str = "";
    for(let i = 1; i <= num ; i ++) { str+= `${i} sheep...` ;}
    return str;
}
