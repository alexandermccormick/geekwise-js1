/*
var myName = 'Alexander McCormick';
console.log(myName);
console.log(myName.length);
console.log(myName.charAt(4));
console.log(myName.indexOf('x'));
console.log(myName.lastIndexOf('a', 2));
console.log(myName.concat(' peanuts'));

// .substring() - up to but not including
console.log(myName.substring(0, 3));
console.log(myName.substring(10, 19));
console.log(myName.substring(10));

// .substr() - total characters
console.log(myName.substr(0, 3));
console.log(myName.substr(5, 2));
console.log(myName.substr(2, 5));

// .toUpperCase()
console.log(myName.toUpperCase());

// .toLowerCase()
console.log(myName.toLowerCase());

var newUser = '   yoda    master';
console.log(newUser);
// .trim()
console.log(newUser.trim());
*/


/*****************************  ARRAYS ***************************************/

// ARRAYS - identified by []
// var sodas = ['pepsi', 'coke', 'mountain dew'];
// console.log(sodas);
// console.log(sodas[1]);
// console.log(Array.isArray(sodas));

// COLOURS!

var colours = ['red', 'orange', 'purple'];
var arrLength = colours.push('green');
// console.log('the new array is ', colours);
// console.log('the newer array is ' + colours);
// console.log('the array length is ', arrLength);

arrLength = colours.unshift('pink');
// console.log('The new, new array is ', colours);
// console.log('Array length is ', arrLength);

var item = colours.pop();
// console.log('the [.pop()] item is ', item);
// console.log('The new, new, new array is ', colours);
// console.log('The length is ', colours.length);

item = colours.shift();
// console.log('the [.shift()] item is ', item);
// console.log(colours);

// .indexOf()

// .lastIndexOf()
// console.log(colours.lastIndexOf('orange'));

// .splice()
var removeItem = colours.splice(1, 2);
// console.log(colours);
// console.log(removeItem);

var addItems = colours.splice(0,0, 'green', 'blue');
// console.log(colours);
// console.log(addItems);

var newColours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// remove the colour green, and in it's place, add indigo
// var indexOfGreen = newColours.indexOf('green');
// newColours.splice(indexOfGreen, 1, 'indigo');
// console.log(newColours);

newColours.splice(newColours.indexOf('green'), 1, 'indigo');
// console.log(newColours);

// .slice() - upto but not including (value of 0 'zero' duplicates base array)
var moreColours = newColours.slice(0, 3)
// console.log(moreColours);

// .reverse()
var reverseColours = newColours.reverse();
// console.log(reverseColours);
// console.log(newColours);


// .sort() - spaces, numbers, symbols, uppercase, lowercase
// newColours.sort();
// console.log(newColours);


var names = [ 'Matt', 'matt', 'david', 'higley', 'Higley', 'David'];
names.sort();
// console.log(names);

// Bubble Sort method
var points = [4, 2, 5, 1, 3];
points.sort();
// console.log(points);
points.sort(function(a, b){
  return a - b;
});
// console.log(points);

// for loop
// for(var i = 0; i < newColours.length; i++){
//   console.log(newColours[i]);
// }

//
// var modColours = newColours.map(function(e, i){
//   // console.log(e);
//   console.log('my fav colour', e);
//
// });
// console.log(modColours);


var modPoints = points.map(function(e){
  return e * 2;
});
console.log(points);
console.log(modPoints);
