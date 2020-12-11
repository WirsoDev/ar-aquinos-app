const itens = document.querySelectorAll('.icons img')
const modeViewer = document.querySelector('model-viewer')
var modelpath = modeViewer.attributes[0]
var modelpathIos = modeViewer.attributes[1]


for(const iten of itens){
    iten.addEventListener('click', handlerSelected)
}

function handlerSelected(event){
    for(const item of itens){
        item.className = 'item'
    }
    var target = event.target
    // active css prop
    target.classList.toggle("activ")

    var path = target.dataset.path
    var pathios = target.dataset.pathios

    modelpath.nodeValue = path
    modelpathIos.nodeValue = pathios
}