const ua = navigator.userAgent

let device

if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)){
    device = 'Tablet'
}else if(/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
    device = 'Mobile'
}else{
    device = 'Desktop'
    }

    
var data = {device}

const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}

fetch('/:name', options)
