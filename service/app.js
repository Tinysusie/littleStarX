var express = require('express');
var app = express(),
    fs = require("fs"),
    url = require("url"),
    path = require("path"),
    bodyParser = require("body-parser"),
    multer = require('multer'); 
   // multipart = require('connect-multiparty');  
var DB = require('./db');
var ResCls = require('./data/resClass')
var uploadCls = require('./data/resClass/upload.js')
var ObjectId = require('mongodb').ObjectId;

var projectName = "/littleStar" ;

var upload = multer({ dest: 'static/uploads/' }) ;


app.use(express.static('static')) 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data
app.use('*',function(req,res,next){ //* 匹配放最后
    //console.log(req.baseUrl)
    
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
    //F 反向代理 B x ; F 完整访问服务端弟子 B Access-Control-Allow-Origin;F jsonp ;B X
    res.header("Access-Control-Allow-Credentials",true); //
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS,PATCH');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    
})
app.post('/upload',upload.array('pic1',10),function(req,res,next){
    handleUpload(req,res);
})

app.post('/article/getList',function(req,res){
    DB.find('post',{},function(err,result){
        if (err) throw err;
        let Obj = {
            data : result
        }
        let resData = ResCls(Obj)
        res.send(JSON.stringify(resData))
    })
})
app.post('/article/getPost',function(req,res){
    let resData = {}
    if(req.body.id){
        let id = ObjectId(req.body.id);
        let targetId = {'_id':id}
        DB.find('post',targetId,function(err,result){
            if (err) throw err;
            let Obj = {
                data : result
            }
            resData = ResCls(Obj)
            res.send(JSON.stringify(resData))
        })
    }else {
        resData = ResCls({})
        res.send(JSON.stringify(resData))
    }
    
})
app.post('/article/addPost',function(req,res){
    let resData = {}
    if(req.body && req.body.title){
        let atc = req.body
        let postObj = {
            title:atc.title,
            subtitle:'SUBTITLE',
            content:atc.content,
            mainImg:atc.mainImg,
            author:"ADMIN",
            posttatus:'1',
            category:'1',
            time:new Date(),
            count:3015,
        }
        DB.insertOne('post',postObj,function(err,result){

            if (err) throw err;
            let Obj = {
                msg : "add success!"
            }
            resData = ResCls(Obj)
            res.send(JSON.stringify(resData))
        })
    }else {
        //msg = 'Opps,nothing can be found'
        resData = ResCls({})
        res.send(JSON.stringify(resData))
    }
    
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
    console.log(files)
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
    let resData = uploadCls(res)
    response.send(JSON.stringify(resData));
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