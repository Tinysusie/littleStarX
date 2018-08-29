var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";

function _connectDB(callback){
    MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
        if(err) throw err;
        //console.log("数据库已建立！");
        var db = client.db("myBlog");
        callback(err, db);
        client.close();
    })
}


module.exports = {
    insertOne(collectionName,json,callback){ //inser data
        _connectDB(function(err,db){
            db.collection(collectionName).insertOne(json,function(err,result){
                if(err) throw err;
                console.log("DB ADD ！");
                callback(err,result);
            })
        })
    },
    find(collectionName,json,callback){ //find
        _connectDB((err,db) =>{
            db.collection(collectionName).find(json).toArray(function(err, result){
                if(err) throw err;
                console.log("DB FIND ！");
                callback(err,result);
            })
        })
    },
    delete(collectionName,json,callback) {//del
        _connectDB((err,db)=> {
            db.collection(collectionName).deleteMany(json,function(err,result){
                if(err) throw err;
                console.log("DB DEL ！");
                callback(err, result);
            })
        })
    },
    updateMany(collectionName,whereStr,updateStr,callback) {
        _connectDB((err,db) => {
            db.collection(collectionName).updateMany(whereStr,updateStr,function(err,result){
                if(err) throw err;
                console.log("DB UPDATE ！");
                callback(err,result);
            })
        })
    },
    getAllCount(collectionName,callback) {
        _connectDB((err,db)=>{
            db.collection(collectionName).count({}).then(function(count){
                callback(count);
            })
        })
    },

}