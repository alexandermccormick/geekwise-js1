var figure = document.querySelector('figure');
var figCaption = document.querySelector('figcaption');


figure.addEventListener('mouseover', function(evt) {
    setTimeout(showCap, 1000)
});

function showCap() {
    figCaption.classList.remove('hidden');
    figCaption.classList.add('visable');
    setTimeout(function() {
        figCaption.classList.add('show-text');
    }, 370);
}