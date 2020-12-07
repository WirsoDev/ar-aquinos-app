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
    var capName = name.charAt(0).toUpperCase() + name.slice(1)
    var modelInfo = modelsinfo[name]
    if(modelInfo){
        var path = modelInfo.devpath
        var pathios = modelInfo.devpathios
        var description = modelInfo.description
        var element = modelInfo.element
    
        //console.log(modelsinfo)
        res.render('models.html', 
        {
            name: capName, 
            path: path, 
            pathios: pathios,
            desc: description,
            element: element
    
        }
        )   
    }else{
        res.render('nomodel.html')
    }
})



//connet server

var port = 3000
server.listen(port)

