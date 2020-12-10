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
    data = [{ title: "foo", id: 1 }, { title: "bar", id: 2}]

    res.render('index.html', {data:data})
})


server.get('/:name', (req, res)=>{

    //build path for 3d model by param name
    var name = req.params.name
    var modelInfo = modelsinfo[name]
    if(modelInfo){
        var model = modelInfo
        var anotations = modelInfo.anotations
        var data = [{ title: "foo", id: 1 }, { title: "bar", id: 2}]
        console.log(anotations)
        res.render('models.html', 
        {
            model: model,
            anotations:anotations,
            data:data
        }
        )   
    }else{
        res.render('nomodel.html')
    }
})


//connet server

var port = 3000
server.listen(process.env.PORT || port, ()=>{console.log('Server up ate port' + port)})

