// user clicks the button
// user is prompted to enter their first name
// save users name and account for extra apaces
// ensure first character is capped
// remaining are drop capped
// pass into another function
// alert welcome message to user
// minimum 2 functions

var activeUser;

function getName() {
    var userName = prompt('Enter your full name').replace(/\s\s+/g, ' ').split(" ");
    for (var i = 0; i < userName.length; i++) {
        var validName = /^[0-9a-zA-Z\s]+$/.test(userName[i]);
    }
    if (!validName) {
        alert("Oops! Looks like your finger slipped. Let's try that again.");
    } else if (validName) {
        for (var i = 0; i < userName.length; i++) {
            userName[i] = userName[i].toLowerCase();
            userName[i] = userName[i].charAt(0).toUpperCase() + userName[i].slice(1);
        }
        userName = userName.join(" ");
        activeUser = userName;
        alert(`Welcome ${userName}!`);
    }
}
