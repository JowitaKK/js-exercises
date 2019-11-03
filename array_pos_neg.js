/*Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.*/
function countPositivesSumNegatives(input) {
    if(input == null || input.lenght == 0)
      return [];
      
      var positive = 0;
      var negative = 0;
      
      for (var i=0, l=input.length; i<l; i++)
      {
        if (input[i] > 0)
           positive ++;    //tu zlicza ilosc liczb 
        else
          negative += input[i];    // it is a sum
          //negative = negative + input[i]
      }
      
      return [positive, negative];
  }
