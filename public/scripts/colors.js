
// set background color by model
const color = document.querySelector('#modelcolor').innerHTML
const background = document.querySelector('.info')
const btn = document.querySelector('#btnexemple')


if(color){
    background.style.background = color
    btn.style.background = color
}


