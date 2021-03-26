const loadingpage = document.querySelector('.loadanim')
const modelname = document.querySelector('#model-name')
const colorItem = document.querySelector('#modelcolor').innerHTML

console.log(modelname)
modelname.style.borderBottom  = `5px solid ${colorItem}`


let time
function timeHandler(){
    time = setTimeout(loadinghandler, 7500)
}


function loadinghandler(){
    loadingpage.classList.add('remove')
}


timeHandler()

