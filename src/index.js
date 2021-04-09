const express = require('express')
const server = express()
const { modelsinfo } = require('./modelsinfo')
const { getDoc } = require('./sheets')
const device = require('express-device')

require('dotenv').config()


//set up server
server.use(express.static('public'))
server.use(express.json())
server.use(device.capture())


//template engine
const nunjucks = require('nunjucks')
const { json } = require('express')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


//routs
server.get('/', (req, res)=>{
    res.render('index.html')
    
})


server.get('/:name', (req, res)=>{

    //build path for 3d model by param name
    var name = req.params.name
    var modelInfo = modelsinfo[name]
    var isDesktop = req.device.type === 'desktop'

    if(modelInfo){

        if(isDesktop){
            res.render('qrcode.html')
        }
        else{
            var functions = modelInfo.animations
            var controler = false
            if(functions.length > 0){
                    controler = true
                }
            var model = modelInfo
            res.render('models.html', 
            {
                model: model,
                functions:functions,
                controler:controler,
                isdektop:isDesktop
            }
            )            
        }
   
        }else{
            res.status(404)
            res.render('404.html');
        }
})

server.post('/:name', (req, res)=>{
    /*get location and model data to
    add to google sheets*/
    //console.log(req.body)
    let modelname = req.body.modelName
    let lat = req.body.lat
    let lon = req.body.lon
    let device = req.body.device

    // sheeeeets
    if(lat || lon){
        let sheet; 
        getDoc().then(doc => {
            sheet = doc.sheetsByIndex[0];
            sheet.addRow({
                ModelName: modelname,
                Latitude: lat,
                Longitude: lon,
                date: new Date(),
                Device: device
            }).then(() => {
                console.log('New data saved!')
            })
        });
    }else{
        console.log('No geolocation detected!')
    }
})


server.use(function(req, res, next) {
    res.status(404);
    res.render('404.html');
});


//connet server

var port = 3000
server.listen(process.env.PORT || port, ()=>{console.log('Server up at port - ' + port)})

