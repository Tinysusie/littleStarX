var express = require('express');
var app = express(),
    fs = require("fs"),
    url = require("url"),
    path = require("path"),
    bodyParser = require("body-parser"),
    multer = require('multer'); 
   // multipart = require('connect-multiparty');  
var DB = require('../db');
var objectId = require('mongodb').objectId;

var projectName = "/littleStar" ;

var upload = multer({ dest: 'static/uploads/' }) ;


app.use(express.static('static')) 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data
app.use('*',function(req,res,next){ //* 匹配放最后
    console.log(req.baseUrl)
    
    // var str = '';
    // req.on('data',function(chunk){
    //     str += chunk
    // })
    // req.on("end",function(){
    //     console.log(file)
    // })

    //各种数据格式对应的获取
    //1.url?xxx req.query url:xxx req.params
    //2.post  req.body
    // req.on('data',function(chunk){
    //     str += chunk
    // })
    //3.formdData  
    // 
    //
    //res.header("Access-Control-Allow-Origin", "*");
    //console.log(req.headers.host)
    let origin = req.headers.origin;
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials",true); //
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS,PATCH');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    
})
app.post('/littleStar/upload',upload.array('pic1',10),function(req,res,next){
    handleUpload(req,res);
})


app.use('*',function(req,res){ //* 匹配放最后
    if(req.url.indexOf('static')<0){
        if(req.baseUrl.indexOf('/upload')>0){
            console.log(req.files)
        }else {
            let data = handleReq(req,res);
            if(data !== null){
                res.send(data)
            }
            res.end();
        }
    }else {
        res.end();
    }
    
})

function handleUpload(request,response){
    var files = request.files;
    //console.log(file)
    var imgAry = []
    files.forEach(file => {
        var mime = file.originalname.split('.').pop();
        fs.renameSync('static/uploads/'+file.filename,'static/uploads/'+file.originalname);
        imgAry.push("http://localhost:3000/uploads/"+file.originalname)
    });
   let res =  {
        "errno": 0,
        "data": imgAry
    }
    response.send(res);
}
function handleReq(request,response){
    let method = request.method.toLowerCase()
    if(request.url.indexOf('static')<0){
        let realPath = request.baseUrl.replace(projectName,"");
        let isjsonp = null;
        let filePath = `${method}${realPath}`
        // if(realPath.indexOf('/upload')!=-1){
            
        // }
        if(realPath.indexOf('/jsonp')!=-1){
            isjsonp = {is:true,callback:request.query.callback};
        };
        return getData(filePath,isjsonp)
        
    }
}
function getData(filePath,isjsonp){
    let curFilePath = path.resolve(__dirname,'data',filePath)+'.js';
    let rs = {};
    try{
        rs = require(curFilePath);
        if(isjsonp && isjsonp.is){
            rs =  JSON.stringify(rs)
            rs = isjsonp.callback + '(' + rs + ')'
        }
        //console.log("yep")
    }catch(error){
        //console.log(error);
        rs = require('./data/error.js')
    }
    return rs;
}



var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s',host, port)
})