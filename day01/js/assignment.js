var firstName = prompt("What is your first name?");
var lastName = prompt("what is your last name?");
document.getElementById("name").innerHTML = firstName + " " + lastName;

var userAge = prompt("what is your current age?");
document.getElementById('age').innerHTML = "Age: " + userAge;

var userLocation = prompt("what galaxy are you from?");
document.getElementById('location').innerHTML = "Origin: " + userLocation;

alert("Welcome " + firstName + " " + lastName + "!");
document.getElementById('blurb').style.display = "block";
console.log("User's age: " + userAge);
