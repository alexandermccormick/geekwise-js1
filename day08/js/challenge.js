var nav = document.querySelector('nav');
var ul = document.createElement('ul'),
  li1 = document.createElement('li'),
  li2 = document.createElement('li'),
  li3 = document.createElement('li'),
  li4 = document.createElement('li'),
  a1 = document.createElement('a'),
  a2 = document.createElement('a'),
  a3 = document.createElement('a'),
  form = document.createElement('form'),
  input1 = document.createElement('input'),
  input2 = document.createElement('input'),
  input3 = document.createElement('input');
a1.href = '#';
a1.textContent = "home";
a2.href = '#';
a1.textContent = "about";
a3.href = '#';
a1.textContent = "projects";
input1.type = 'text';
input1.placeholder = 'username';
input2.type = 'password';
input2.placeholder = 'password';
input3.type = 'submit';
input3.value = 'go';
form.append(input1, input2, input3); //not widely supported!!
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(form);
ul.append(li1, li2, li3, li4);
nav.appendChild(ul);
