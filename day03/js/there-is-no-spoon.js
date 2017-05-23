var usernameArray = [];

function getUser(){
  usernames = prompt('Please enter a username');
  usernameArray.push(usernames);
  console.log(usernameArray);
};

function removeUser(){
  usernameArray.shift()
  console.log(usernameArray);
}
