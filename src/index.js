const express = require('express')
const server = express()
const { modelsinfo } = require('./modelsinfo')


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

