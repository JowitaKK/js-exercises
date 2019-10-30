/* In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!.
*/

// const items = ['good', 'bad'];

// items.filter(item => item == 'good')


function well(items){
    const good_const = items.filter(item => item == 'good').length;

    return good_const < 1 ? 'Fail!' :
           good_const < 3 ? 'Publish!' : 'I smell a series!';


}


/* In this game, the hero moves from left to right. 
The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (p, r) {       // position, 
   return p + r * 2;
}

*/


/* ----------------------II--------------------------
swaping value arrays

function swapValues() {
  return arguments[0].reverse();
}

/* split array 

function stringToArray(string){
  return string.split(' ');
}
*/