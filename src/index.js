const express = require('express')
const server = express()
const { modelsinfo } = require('./modelsinfo')


//set up server
server.use(express.static('public'))

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
        res.render('nomodel.html')
    }
})


//connet server

var port = 3000
server.listen(process.env.PORT || port, ()=>{console.log('Server up at port - ' + port)})

