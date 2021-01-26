const express = require('express')
const server = express()
const { modelsinfo } = require('./modelsinfo')

///////////////////// set up google sheets
const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const creds = require('./client_secret.json')

async function acessSpreadsheet(){
    const doc = new GoogleSpreadsheet('1InywoyrdD4XopRqt9BlBr0Heg22vbZsVOg5E4AXNb0U')
    await promisify(doc.useServiceAccountAuth)(creds)
    const info = await promisify(doc.getInfo)()
    const sheet = info.worksheets[0]
    console.log(sheet)
}

///https://docs.google.com/spreadsheets/d/1InywoyrdD4XopRqt9BlBr0Heg22vbZsVOg5E4AXNb0U/edit#gid=0
///https://www.youtube.com/watch?v=UGN6EUi4Yio&t=561s

acessSpreadsheet()

//set up server
server.use(express.static('public'))
server.use(express.json())

//template engine
const nunjucks = require('nunjucks')
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
    //console.log(name)
    var modelInfo = modelsinfo[name]
    if(modelInfo){

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
        }
        )   
    }else{
        res.status(404)
        res.render('404.html');
    }
})

server.post('/:name', (req, res)=>{
    /*get location and model data to
    add to google sheets*/
    console.log(req.body)
})


server.use(function(req, res, next) {
    res.status(404);
    res.render('404.html');
});


//connet server

var port = 3000
server.listen(process.env.PORT || port, ()=>{console.log('Server up at port - ' + port)})

