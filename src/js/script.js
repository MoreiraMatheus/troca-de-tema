const checkbox = document.getElementById("troca-tema")
const fundo = document.getElementById('fundo')
const main = document.getElementById('main')
const titulo = document.querySelector('h1')
const paragrafo = document.querySelector('p')
const ball = document.getElementById('ball')
const favicon = document.getElementById('favicon')

function verificar(){
    if(checkbox.checked){
        // tema escuro
        fundo.style.background = 'rgb(59, 59, 59)'
        main.style.background = 'grey'
        titulo.style.color = 'white'
        titulo.style.borderBottomColor = 'blue'
        titulo.innerText = 'Tema escuro'
        paragrafo.style.color = 'white'
        ball.classList.remove('esquerda')
        ball.classList.add('direita')
        favicon.setAttribute('href', 'src/img/moon.png')
    }
    else{
        // tema claro
        fundo.style.background = 'rgb(167, 166, 166)'
        main.style.background = 'white'
        titulo.style.color = 'black'
        titulo.style.borderBottomColor = 'rgb(43, 167, 250)'
        titulo.innerText = 'Tema claro'
        paragrafo.style.color = 'black'
        ball.classList.remove('direita')
        ball.classList.add('esquerda')
        favicon.setAttribute('href', 'src/img/sun.png')
    }
}