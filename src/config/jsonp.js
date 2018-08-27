var jsonpInit = function(){
    var jsonp = function(url,data,callback){
        var queryString = '';
        for(var key in data){
            queryString += key +"="+ data[key] + '&';
        }
        var cbFn = 'my_jsonp_cb' + Math.random().toString().replace('.','');
        queryString += 'callback=' + cbFn;
        var newScript = document.createElement('script');
        newScript.src = url +'?'+ queryString;
        newScript.type = 'text/javascript';
        window[cbFn] = function(result){  //【可消除吗？】
            callback(result);
            document.body.removeChild(newScript)
        };
        document.body.appendChild(newScript);
    };
    window.$jsonp = jsonp;
}()

