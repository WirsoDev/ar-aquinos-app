const loadingpage = document.querySelector('.loadanim')
const modelname = document.querySelector('#model-name')
const colorItem = document.querySelector('#modelcolor').innerHTML

console.log(modelname)
modelname.style.color = colorItem

let time
function timeHandler(){
    time = setTimeout(loadinghandler, 5600)
}


function loadinghandler(){
    loadingpage.classList.add('remove')
}


timeHandler()