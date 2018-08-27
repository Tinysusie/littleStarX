import {baseUrl} from './env.js'

export default async(url = '',data ={}, type='POST',  formData="",method ='fetch') => {
    //console.log(data,type)
        type = type.toUpperCase();
        url = baseUrl + url;
        if(type == 'GET'){
            let dataStr = '';
            for(let key of Object.keys(data)){
                dataStr += key +'='+data[key] + '&'
            }
            if(dataStr !==''){
                dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
        }

        if(window.fetch && method == 'fetch'){
            let requestConfig = {
                credentials :'include', //?【此设置什么意思，打开就不可以正常跨域】【S】res.header("Access-Control-Allow-Credentials",true)
                method:type,
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode:'cors',
                cache:'no-cache',
               
            }
            if(type == 'POST'){
               // console.log(data)
                if(formData == 'formData'){
                    // requestConfig.headers = { 
                    //     'Accept': 'multipart/form-data',
                    //     'Content-Type': 'multipart/form-data'
                    // };
                    requestConfig.body = data
                }else {
                    requestConfig.body = JSON.stringify(data)
                }
            }
            
            //console.log(requestConfig)
            try {
                //console.log(url)
                const response = await fetch(url, requestConfig);
                const responseJson = await response.json();
                if(responseJson.success == false){
                    throw "自定义错误"
                    //自定义统一错误处理(登录错误、超时错误...)
                }else {
                   return responseJson
                }
            } catch(error){
                throw new Error(error)
            }
        }

    }
