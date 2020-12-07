const express = require('express')
const server = express()

//set up
server.use(express.static('public'))

//template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


//routs

server.get('/', (req, res)=>{
    res.render('index.html', {name: 'Hello'})
})



//connet server

var port = 3000
server.listen(port)

