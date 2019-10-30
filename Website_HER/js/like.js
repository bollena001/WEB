var feedback = document.querySelector('h4');
var button = document.querySelector('button');

var verander = function () {
    feedback.classList.toggle('visible');
    button.classList.toggle('liked');


}

button.addEventListener('click', verander);