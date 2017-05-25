// // For loop
// for(var i = 0; i < 10; i++){
//   console.log(i + 1);
// }
//
// // While loop
// var j = 0;
// while(j<10){
//   console.log(j);
//   j++;
// }
//
// // do... while loop
// var k = 0;
// do {
//   console.log(k);
//   k++;
// }while(k < 10);

var names = ['alex', 'frank', 'george', 'jim', 'dude'];
// for each loop
names.forEach(function(element, index){
  console.log(index + ':' + element);
});

for(var l = 0; l < names.length; l++){
  if(names[l] === 'jim'){
    break;
  }
  console.log(names[l]);
}

// for... of loop
for(var name of names){
  if(name === 'jim'){
    break;
  }
  console.log(name);
}


// var - function scope
// let - block scope
// const - value cannnot change

// if statements
var name = 'matt';
if(name === 'david'){
  console.log(name);
}else{
  console.log('this', name);
}
