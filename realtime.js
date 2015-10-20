

var wpm = prompt("How many words can you read per minute?");
var getTimeToRead = function() {
  var myDomArray = [].slice.call(document.querySelectorAll('p'));
  var newArray = " ";
  myDomArray.forEach(function(currItem,idx, arr) {
  console.log(currItem.textContent) ;
  newArray += currItem.textContent;

});

  var actualArray = newArray.split(" ");
  var wordCount = actualArray.length;

  var total = Math.round(wordCount/wpm);
  return total + " minutes";
};

// to call
//  getTimeToRead();
// document.querySelector('h3').innerHTML += getTimeToRead();



// alternative way

// var wpm = prompt("How many words can you read per minute?");
// var getTimeToRead = function() {
//   var str = document.querySelector('p').innerHTML;
//   var str2 = str.split(" ");
//   var wordCount = str2.length;
//   var total = Math.round(wordCount/wpm);
//   return total + " minutes";
// };
//
// document.querySelector('h3').innerHTML+=getTimeToRead();
