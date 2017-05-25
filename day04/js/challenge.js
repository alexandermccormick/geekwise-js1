var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

var fullName = firstName + ' ' + lastName;

alert(fullName);
