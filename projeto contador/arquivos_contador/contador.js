let btn = document.querySelectorAll('.btns');
let contador = 0;

btn[1].addEventListener('click', () => {
    let numero = document.querySelector('#numeros');
    contador += +1;
    numero.innerHTML = contador;

})

btn[0].addEventListener('click', () => {
    let numero = document.querySelector('#numeros');
    contador += -1;
    numero.innerHTML = contador;

})