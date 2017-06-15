// var btn = document.querySelector('button');
// var nav = document.querySelector('ul');
//
// btn.addEventListener('click', function(evt){
//   // console.log(this);
//   // console.log(evt.target.innerText);
// });
//
// btn.addEventListener('mouseenter', function(evt){
//   evt.target.style.color = 'blue';
// });
//
// btn.addEventListener('mouseleave', function(evt){
//   evt.target.style.color = 'white';
// });
//
// window.addEventListener('scroll', function(evt){
//   // console.clear();
//   // console.log(evt.pageY);
//   if(evt.pageY > 56){
//     nav.classList.add('vis');
//   } else {
//     nav.classList.remove('vis');
//   }
// });
//
// // keydown, keyup, keypress
//
// var setDiv = document.querySelector('div#set');
// setDiv.innerHTML = '<p>Here is a line</p>';
//
// var getDiv = document.querySelector('div#get');
// console.log(getDiv.textContent);


// formS!!!!!!!!!!

var submitBtn = document.querySelector('input[type="submit"]');
var form = document.querySelector('form');
// var inputBox = document.querySelector('input[type="text"]');
// var passBtn = document.querySelector('input[type="password"]');
submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  console.log(form);
  var formVals = [];
  for(var i = 0; i < form.length - 1; i++){
    formVals += ` ${form[i].value}`;
  }
  console.log(formVals);
  // alert(`UserName: ${inputBox.value} Password: ${passBtn.value}`);
});


// "listen" for keypresses
// grab the 'keycode'
// textContent or innerHTML to set the code to the window
// http://keycode.info
