var firstBtn = document.getElementById('first');
var secondBtn = document.getElementsByTagName('button')[1];
var thirdBtn = document.querySelector('li:last-child');
var fullName = '';

function properCap(str){
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

firstBtn.addEventListener('click', getName);

secondBtn.addEventListener('click', getName);

thirdBtn.addEventListener('click', function(e){
  // var that = this;
  getName(e)
  alert(fullName);
});

function getName(theother) {
  console.log(theother);
  fullName += properCap(prompt('get ' + theother.originalTarget.innerText)) + ' ';
}
