const ua = navigator.userAgent
const ios = navigator.platform


var data = (
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
)

let isIos = false

if(data.includes(ios)){
    console.log('WIN')
    isIos = true
}

console.log(isIos)

let device

if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)){
    device = 'Tablet'
}else if(/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
    device = 'Mobile'
}else{
    device = 'Desktop'
    }

    
var data = {device, isIos}
console.log(device)

const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}

fetch('/:name', options)
