
// var userAge = parseInt(prompt("What age might you be?"));
// console.log("User age:", userAge + 10)

// typeof
// console.log(typeof 9);

//  String Object
var myString = "this is a string";
var myStringObj = new String("this is also a string");
// console.log(myStringObj);34

// Number Object
var num = 7;
var numObj = new Number(7);
// console.log(num);
// console.log(numObj);

// Float Object
var float = 5.9876543;
// console.log(float);

// Boolean Object
var bool = true;
// console.log(bool);

// Array Object
var arr = ['red', 'orange', 'green'];
var numArr = [0, 1, 2, 3]
// console.log(arr[0]);
// console.log(arr[0]+ arr[2]);
// console.log(arr[0], arr[2]);
// console.log(numArr[1] + numArr[2]);

// Object Object
var myCar = {
  make: "Jeep",
  model: "Wrangler",
  year: 2014
};

// console.log(myCar.model);
// console.log(myCar.year);

// Math Object
var num1 = 5.5;
var numA = 5.4;
// console.log(Math.round(num1));
// console.log(Math.round(numA));
// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));

var rand = Math.random();
rand = rand*11;
rand = Math.floor(rand);
// console.log(rand);
// console.log(Math.round((Math.random() * 10)));

// Date Object
var theDate = new Date();
// console.log(theDate.getMonth());
// getDay() === day of the week - 0
// getDate() === day of the month
// getMonth() === month - 0
// getFullYear() === year

// if(theDate.getDay() === 0) {
//   console.log('sunday');
// }else if(theDate.getDay() === 1) {
//   console.log('monday');
// }else if(theDate.getDay() === 2) {
//   console.log('tuesday');
// }else if(theDate.getDay() === 3) {
//     console.log('wednesday');
// }

var myDate = theDate.toLocaleString('en-us', {weekday: 'short'});
// console.log(myDate);


// var myDate = theDate.toLocaleString('en-us', {weekday: 'long'});
// console.log(myDate);
//
// var myDate = theDate.toLocaleString('en-us', {day: '2-digit'});
// console.log(myDate);
//
var myBday = new Date(1994, 03, 17);
var myDate = theDate.toLocaleString('en-us', {weekday: 'short'});
// console.log(myBday);

var myBdate = myBday.toLocaleString('en-us', {day: 'numeric'});
var myBmon = myBday.toLocaleString('en-us', {month: 'long'});
var myByear = myBday.toLocaleString('en-us', {year: 'numeric'});
// console.log(myBmon + ' ' + myBdate + ', ' + myByear);


//  prompt user for 3 individual items
// ask the user for their number birth month
// ask the user for their number birth day
// ask the user for their full birth year
// save each response as a variable
// parse each response into a Number
// for 0 based items, subtract 1
// creat a new date instance representing users birthday
// var myBday = new Date(1999, 9, 02)
//
// var someVariableName = new Date(var, var, var);
//
// take users birthday object and parse to console in the following format:
// Oct 02, 1999

// function birthday(){
//   var userBmon = parseInt(prompt("Enter the month you were born in! (format MM/DD/YYYY)"));
//   userBmon--;
//   var userBday = parseInt(prompt("Enter the day you were born on! (format MM/DD/YYYY)"));
//   var userByear = parseInt(prompt("Enter the year you were born in! (format MM/DD/YYYY)"));
//
//   var bDay = new Date(userByear, userBmon, userBday);
//   console.log(bDay);
//
//   var userBday = userBday.toLocaleString('en-us', {day: 'numeric'});
//   var userBmon = userBmon.toLocaleString('en-us', {month: 'short'});
//   var userByear = userByear.toLocaleString('en-us', {year: 'numeric'});
//   console.log(userBmon + ' ' + userBday + ', ' + userByear);
// }
//
// birthday();

// Answer
var userMon = parseInt(prompt('month')) - 1;
var userDay = parseInt(prompt('day'));
var userYear = parseInt(prompt('year'));

var userBday = new Date(userYear, userMon, userDay);

var m = userBday.toLocaleString('en-us', {month: 'short'});
var d = userBday.toLocaleString('en-us', {day: '2-digit'});
var y = userBday.toLocaleString('en-us', {year: '2-digit'});

console.log(m + ' ' + d + ', ' + y);
