var form = document.querySelector('form:first-of-type');

form[2].addEventListener('click', function(e) {
    e.preventDefault();
    // var arr = [];
    // arr.push(form[0].value, form[1].value);
    // console.log(arr);
    document.body.innerHTML += sticky;
    stickySetUp();
});

var sForm = document.createElement('form'),
    sBtn = document.createElement('button'),
    sInput = document.createElement('input');

sForm.id = 'sticky';
sBtn.id = 'add';
sBtn.textContent = '+';
sInput.type = 'text';
sInput.placeholder = 'todo';
// sForm.appendChild(sBtn);
// sForm.appendChild(sInput);
sForm.appendChild(sBtn, sInput);
document.body.appendChild(sForm);

sBtn.addEventListener('click', addTOdo);

function addTOdo(evt) {
    evt.preventDefault();
    var newTodo = document.createElement('input');
    newTodo.type = 'text';
    newTodo.placeholder = 'todo';
    sForm.appendChild(newTodo);
}
// var sticky =
//     `
// <form id="sticky">
//     <button id="add">+</button>
//     <input type="text" placeholder="ToDo">
// </form>
// `

// function stickySetUp() {
//     var todo = document.createElement('input');
//     var stickySubmit = document.querySelector('#sticky');
//     stickySubmit[0].addEventListener('click', function(evt) {
//         evt.preventDefault();
//         stickySubmit.appendChild(todo)
//     });
// }