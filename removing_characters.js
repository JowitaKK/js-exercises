function removing_character(element){
    return element.slice(1, element.length -1)
}
console.log(removing_character('Perfect'));


/*It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. 
The Loch Ness Monster almost tricked you!
There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) 
It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy
Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". 
Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.


function isLockNessMonster(s) {
    if(s.includes("tree fiddy")) return true;
    if(s.includes("3.50")) return true;
    if(s.includes("three fifty")) return true;
    else return false;
    
  }


  */