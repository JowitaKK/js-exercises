// while loop
var i = 1;

while (i <=10){
    document.write( i + "<br/>");
    i++;
}

// for loop

var friends = ["Martyna", "Magda", "Ania"]
for(var i =0; i < friends.length; i ++ ){
    document.write(i + "<br>");
}

// nested loop

for(var i = 0; i < 4; i++){
    for(var j = 0; j < 3; j++){
        document.write("i= " + i + ", j" + j );
    }
}
// prints i=0, i=0, i=0 and j=0, j=1, j=2
//        i=1, i=1, i=1 and j=0, j=1, j=2

//array 2D

var numberGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
];

document.write(numberGrid[0],[0]); // prints 1
document.write(numberGrid[2],[2]); // prints 9

for(var i = 0; i < numberGrid.length; i++){
    for(var j = 0; j < numberGrid[i].length; j++){
        document.write(numberGrid[i][j] );
    }
    document.write("<br>")
} // prints 123
  //        456

  // forEach loop
  var friends = ["Martyna", "Magda", "Ania"];

  friends.forEach(function(friend){
      document.write(friend + "<br>");
  });

  /*
  var books = [
      {
          title: "Harry Potter",
          author: "JK Rowling",
          pages: 300
      },
      {
          title: "Kuchnia Lidla",
          author: "Okrasa",
          pages: 125
      },

      }
  ]
  books.forEach(function(book){
      document.write(book.title + "<br>");
      document.write(book.author + "<br><br>")
  });
  */