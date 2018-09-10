var express = require('express');
var app = express(),
    fs = require("fs"),
    url = require("url"),
    path = require("path"),
    bodyParser = require("body-parser"),
    multer = require('multer'); 
   // multipart = require('connect-multiparty');  
var session = require('express-session'),
    cookieParser = require('cookie-parser');
var DB = require('./db');
var ResCls = require('./data/resClass')
var uploadCls = require('./data/resClass/upload.js')
var ObjectId = require('mongodb').ObjectId;

var projectName = "/littleStar" ;

var upload = multer({ dest: 'static/uploads/' }) ;

app.use(cookieParser());
app.use(session({
    //name:'id',
    secret:'keyPCat',
    cookie:{maxAge:30000},
    resave: false,
    saveUninitialized: false
}));
// name: 设置 cookie 中，保存 session 的字段名称，默认为 connect.sid 。
    // store: session 的存储方式，默认存放在内存中，也可以使用 redis，mongodb 等。Express 生态中都有相应模块的支持。
    // secret: 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。
    // cookie: 设置存放 session id 的 cookie 的相关选项，默认为(default: { path: '/', httpOnly: true, secure: false, maxAge: null })
    // genid: 产生一个新的 session_id 时，所使用的函数， 默认使用 uid2 这个 npm 包。
    // rolling: 每个请求都重新设置一个 cookie，默认为 false。
    // resave: 即使 session 没有被修改，也保存 session 值，默认为 true。


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
    res.header('Set-Cookie','SSID='+ req.sessionID +'; max-age=120000 ');
    
    
    if(req.url.indexOf('static')<0 && req.baseUrl.indexOf('login')<0){
        
        let leftTime = req.session.cookie.maxAge
        //let cookieId = req.session["connect.sid"]
        let userSessionObj = req.session[req.sessionID]
        console.log('-----------------------',req.session.login,req.sessionID,req.baseUrl,userSessionObj,leftTime)
        //if(userSessionObj && userSessionObj.login && leftTime>0){ 
        if(req.session.login && leftTime>0){ 
            req.session.touch();
            next();
        }else if(req.session && leftTime<=0){
            let UNloginObj = {
                login:false,
                msg:'need login'
            }
            let sendata = ResCls(UNloginObj);
            res.send(JSON.stringify(sendata));
        }else {
            let UNloginObj = {
                login:false,
                msg:'time out',
                code:3
            }
            let sendata = ResCls(UNloginObj);
            res.send(JSON.stringify(sendata));
        }
    }else {
        next();
    }
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
            subtitle:atc.subTitle,
            content:atc.content,
            mainImg:atc.mainImg,
            author:randomName(),
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
        resData = ResCls({code:2,msg:'add error'})
        res.send(JSON.stringify(resData))
    }
    
})
app.post('/article/updatePost',function(req,res){
    let resData = {}
    if(req.body && req.body.title && req.body.id){
        let atc = req.body
        let id = ObjectId(req.body.id);
        let targetId = {'_id':id}

        let postObj = {
            title:atc.title,
            subtitle:atc.subTitle,
            content:atc.content,
            mainImg:atc.mainImg,
            author:randomName(),
            posttatus:'1',
            category:'1',
            time:new Date(),
            count:3015,
        }
        DB.updateMany('post',targetId,{$set:postObj},function(err,result){
            if (err) throw err;
            let Obj = {
                msg : "update success!"
            }
            resData = ResCls(Obj)
            res.send(JSON.stringify(resData))
        })
    }else if(!req.body.id){
        resData = ResCls({code:3,msg:'no id '}) //无id
        res.send(JSON.stringify(resData))
    }else{
        //msg = 'Opps,nothing can be found'
        resData = ResCls({code:2,msg:'add error'}) //其他错误
        res.send(JSON.stringify(resData))
    }
})
app.post('/article/delPost',function(req,res) {
    let resData = {}
    console.log(req.body.id)
    if(req.body.id){
        let id = ObjectId(req.body.id);
        let targetId = {'_id':id}
        DB.delete('post',targetId,function(err,result){
            if(err) throw err;
            let Obj = {
                msg:'del success'
            }
            resData = ResCls(Obj)
            res.send(JSON.stringify(resData))
        })
    }else {
        resData = ResCls({code:2,msg:'del error'})//删除出错code码
        console.log(resData)
        res.send(JSON.stringify(resData))
    }
})
app.post('/user/login',function(req,res) {
    let resData = {}
    console.log(req.sessionID,req.session.login)
    console.log(req.body.name)
    if(req.body.name){
        let targetName = {'name':req.body.name}
        DB.find('user',targetName,function(err,result){
            if (err) throw err;
            if(!result || result.length==0){
                let user = {
                    name:req.body.name,
                    pass:req.body.pass,
                }
                DB.insertOne('user',user,function(err,result){
                    if (err) throw err;
                    req.session.login = true
                    // req.session[req.sessionID] = {}
                    // req.session[req.sessionID]["login"] = true; //
                    // req.session[req.sessionID]["name"] = req.body.name;
                    let Obj = {
                        msg : "sign up success"
                    }
                    resData = ResCls(Obj)
                    res.send(JSON.stringify(resData))
                })
            }else {
                let findUser = result[0]
                if(findUser.pass === req.body.pass){
                    req.session.login = true
                    // req.session[req.sessionID] = {}
                    // req.session[req.sessionID]["login"] = true; //【session】
                    // req.session[req.sessionID]["name"] = req.body.name;
                    let Obj = {
                        msg : "login success"
                    }
                    resData = ResCls(Obj)
                    res.send(JSON.stringify(resData))
                }else {
                    let Obj = {
                        msg : "pass error",
                        login:false,
                        code:2//密码错误code码
                    }
                    resData = ResCls(Obj)
                    res.send(JSON.stringify(resData))
                }
            }
        })
    }else {
        resData = ResCls({code:3,msg:'no name'})
        console.log(resData)
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

function randomName(){
    let nameArr = ['SUSIE','LIDA','JIACHENG','HEBE','ELLE'];
    let mun = Math.floor(Math.random()*5);
    console.log(nameArr[mun])
    return nameArr[mun]
}
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