const http = require('http');



const server = http.createServer((req, res)=>{
    
    if(req.url =='/home'){
        res.statusCode = 200
        res.write('Welcome from Home')
    }else if(req.url =='/contact'){
        res.statusCode = 200
        res.write('Welcome from Contact')
    }else if(req.url =='/about'){
        res.statusCode = 200
        res.write('Welcome from About')
    }else{
        res.statusCode = 404
        res.write('Page not found')
    }


    res.end()
})

server.listen(3000, ()=>{
    console.log("Server Running");
})