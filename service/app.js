var express = require('express');
var app = express(),
    fs = require("fs"),
    url = require("url"),
    path = require("path"),
    querystring = require('querystring'),
    multiparty = require('multiparty');
var projectName = "/littleStar" ;


app.use(express.static('static')) 

app.use('*',function(req,res){ //* 匹配放最后
    console.log(req.baseUrl)
    
    // var str = '';
    // req.on('data',function(chunk){
    //     str += chunk
    // })
    // req.on("end",function(){
    //     console.log(file)
    // })

    //各种数据格式对应的获取
    //1.get req.query
    //2.post 
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
    
    if(req.url.indexOf('static')<0){
    //console.log(url.parse(req.baseUrl))
    
    //if(req.baseUrl.indexOf('/upload')){
    //    handleUpload(req,res);
    //}else {
        let data = handleReq(req,res);
        if(data !== null){
            res.send(data)
        }
        res.end();
    //}
    }else {
        res.end();
    }
    
})

function handleUpload(request,response){
    var form = new multiparty.Form({uploadDir: './upload/'});
    form.parse(request,function(err,fields,files){
        var obj = {};
        var filesTmp = JSON.stringify(files,null,2);
        if(err){
            console.log('parse error: ' + err);
        }
        else {
            console.log('parse files: ' + filesTmp);
            var inputFile = files.inputFile[0];
            var uploadPath = inputFile.path;
            var dstPath = './upload/' + inputFile.originalFilename;
            //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function(err) {
                if(err){
                console.log('rename error: ' + err);
                response.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
                response.end("{'status':200, 'message': '上传失败！'}");
                } else {
                console.log('rename ok');                
                response.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
                response.end("{'status':400, 'message': '上传成功！'}");
                }
            });
        }
    })
}
function handleReq(request,response){
    let method = request.method.toLowerCase()
    if(request.url.indexOf('static')<0){
        let realPath = request.baseUrl.replace(projectName,"");
        let isjsonp = null;
        let filePath = `${method}${realPath}`
        if(realPath.indexOf('/upload')==0){
            
        }
        if(realPath.indexOf('/jsonp')>0){
            isjsonp = {is:true,callback:request.query.callback};
        };
        return getData(filePath,isjsonp)
        
    }
}
function getData(filePath,isjsonp){
    let curFilePath = path.resolve(__dirname,'data',filePath)+'.js';
    let rs = {};
    //console.log(curFilePath)
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