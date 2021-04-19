const modelname = Array.from(document.querySelectorAll('.model-card'))

modelname.map(element =>{
    element.addEventListener('click', clickHandler)
})




function clickHandler(e){
    var path = e.target.innerText.split(' ')
    if(path.length == 1){
        location.replace(`/${path[0].toLowerCase()}`)
    }else{
        alert('This model is not yet available for AR')
    }
}
