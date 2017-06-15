var intro = document.querySelector('.intro'),
  h1 = document.querySelector('h1'),
  key = document.querySelector('.key');

window.addEventListener('keyup', function(evt){
  evt.preventDefault();

  intro.classList.add('hidden');
  key.parentElement.classList.remove('hidden');

  console.log(evt);
  h1.textContent = evt.keyCode;
  key.textcontent = evt.key;

  if (evt.keyCode === 32){
    key.textContent = 'Spacebar';
  }
});
