var express = require('express');
var app = express(),
    fs = require("fs"),
    url = require("url"),
    path = require("path");
var projectName = "/littleStart" ;

app.use('*',function(req,res){
    // console.log(req.query)
    // var str = '';
    // req.on('data',function(chunk){
    //     str += chunk
    // })
    // req.on("end",function(){
    //     console.log(str)
    // })
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS,PATCH');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    
    //console.log(url.parse(req.baseUrl))

    let data = handleReq(req,res);
    if(data !== null){
        res.send(data)
    }
    res.end();
})

function handleReq(request,response){
    let method = request.method.toLowerCase()
    if(request.url !== '/favicon.ico' ){
        let realPath = request.baseUrl.replace(projectName,"")
        let filePath = `${method}${realPath}`
        return getData(filePath)
    }
}
function getData(filePath){
    let curFilePath = path.resolve(__dirname,'data',filePath)+'.js';
    let rs = {};
    try{
        rs = require(curFilePath);
        //console.log("yep")
    }catch(error){
        //console.log(error);
        rs = require('./data/error.js')
    }
    return rs;
}
app.use(express.static('static/data'))

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s',host, port)
})