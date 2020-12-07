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
    var path = modelInfo.devpath
    var pathios = modelInfo.devpathios
    var description = modelInfo.description

    //console.log(modelsinfo)
    res.render('models.html', 
    {
        name: name, 
        path: path, 
        pathios: pathios,
        desc: description

    }
    
    )
})



//connet server

var port = 3000
server.listen(port)

