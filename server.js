
var express = require('express');
var app = express();
var fs = require("fs"),
    http = require('http'),
    url = require('url'),
    path = require('path');

app.use(express.static('dist'));
var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app lisening at http://%s:%s', host, port)
})


var WebSocketServer = require('ws').Server;


var wss = new WebSocketServer({
    port: 9090
});

wss.on('connection', function (connection) {
    connection.on('message', function (message) {
        console.log(message)
        var readStream = fs.createReadStream(
            './dist/data/43180779_6.jpg',{start: 0, end: 100000});
        console.log(readStream)
        //sendTo(connection,readStream)
        //var writeF = fs.createWriteStream()
        //readStream.pipe(writeF)  
        // writeF.on('pipe',function(){
        //     console.log('pipe')
        // })
        readStream.on('data',function(chunk){
            //console.log(chunk);
            connection.send(chunk);
        })
        //connection.send(writeF);
        // fs.readFile(('./dist/data/car1080_5000_4.h264'), function (err, data) {
        //     if (err) {
        //         throw err;
        //     }
        //     sendTo(connection,data)  
        // });
        
    });

    connection.on("close", function () {
        
    });

    
    connection.send("hello susie");
});

function sendTo(connection, message) {
    // fs.readFile('/dist/data/car.h264', 'utf8', function(err, data){
    //     console.log(data);  
    // });
    connection.send(message);
}

app.get('/video', function (req, res) {
    var time = new Date();
    var videoName = req.query.name;
    console.log("-------点击查询下载" + time.getFullYear() + "/" + time.getMonth() + "/" + time.getDate() + "/" + time.getHours() + "/" + time.getMinutes() + "/" + time.getSeconds() + "-------");
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    var rs = fs.createReadStream('./dist/data/' +videoName + '.mp4'
    );
    rs.pipe(res);
 
    rs.on('end', function () {
        res.end();
        console.log('end call');
    });
})


//var movie_mp4;
// ... [snip] ... (Read index page)
// fs.readFile(('./dist/data/car.h264'), function (err, data) {
//     if (err) {
//         throw err;
//     }
//     sendTo(connection,data)  
// });


// app.post('/getVideo',function(req,res){
//     res.writeHead(206, {
//         "Accept-Ranges": "bytes",
//         "Content-Type": "video/mp4"
//     }); 
//     sendTo(connection,movie_mp4)  
// })
   
    // var total;
    
    // var range = req.headers.range;
    // var positions = range.replace(/bytes=/, "").split("-");
    // var start = parseInt(positions[0], 10);
    // var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
    // var chunksize = (end - start) + 1;
  
    // res.writeHead(206, {
    //     "Content-Range": "bytes " + start + "-" + end + "/" + total,
    //     "Accept-Ranges": "bytes",
    //     "Content-Length": chunksize,
    //     "Content-Type": "video/mp4"
    // });
    // res.end(movie_mp4.slice(start, end + 1), "binary");
 


