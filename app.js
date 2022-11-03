const text = document.querySelector('h1');
const changeColor = document.querySelector('.changeColor');

changeColor.addEventListener("click", function(){
    text.classList.toggle("change");
})