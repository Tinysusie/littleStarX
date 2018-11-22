import {baseUrl} from './env.js'
import { Message } from 'element-ui';
import $router from '../router/index.js'
import { resolve } from 'url';

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
//multipart/form-data [文件] 二进制
//application/x-www-form-urlencoded [] 数据被编码为名称/值对。这是标准的编码格式。 request.getParameter(参数名);
//text/plain 数据以纯文本形式(text/json/xml/html)进行编码，其中不含任何控件或格式字符 【application/json？】
//form的enctype属性为编码方式，
//常用有两种：application/x-www-form-urlencoded和multipart/form-data，默认为application/x-www-form-urlencoded
       
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
               
                if(responseJson.login == false){
                    //进行页面跳转
                    if(responseJson.code===2){
                        Message.error("密码错误")
                    }else if(responseJson.code===3){
                        Message.warning("登录超时")
                        $router.push('/login')
                    }else {
                        Message.warning("未登录")
                        $router.push('/login')
                    }
                    throw "未登录"
                } else if(responseJson.success == false){
                    //console.log("1")
                    Message.error("系统错误统一处理")
                    throw "自定义错误"       //【此处不进行throw处理的话，会直接进到then里？】
                    //自定义统一错误处理(登录错误、超时错误...)
                } else if (responseJson.code !== 0){ //与后台定义的非正确数据code码//将业务具体错误抛给里边处理
                    //console.log("2")
                    throw responseJson
                } else if(responseJson.success && responseJson.login){
                    //console.log("3")
                   return responseJson
                }
            } catch(error){
                //console.log("统一错误")
                console.log(error)
                //throw new Error(error) 【】?
                throw error
            }
        }

    }

    //-=-=-=-=
// $.ajax({
//     url:'',
//     dataType:"json",
//     success:function(data){
  
//     },
//     error:function(e){
  
//     }
//   });
  
//   $.post('url',{},function(data){
  
//   })
//   $.load('url',{},callback(function(esponseText, textStatus, XMLHttpRequest){}))
  
  
//   let ajax = new XMLHttpRequest();
//   ajax.open('GET','/url',"aysnc");
//   ajax.setRequestHeader('Content-type',"json")
//   ajax.send('');
//   ajax.onreadystatechange = function(){
//     if(ajax.readyState === 4 &&ajax.status == 200){
//       //... ajax.responseText
//     }
//   }
//   var xmlhttp;
//   function loadXmlR(url,cfunc){
//     xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = cfunc;
//     xmlhttp.open('GET',url,true);
//     xmlhttp.send();
//   }
//   function myFunc(){
//     loadXmlR('../url',function(){
//       //xmlhttp.responseText
//     })
//   }
//   myFunc()
  
  //=-=-=-=-=-
//promise
  function getAjax(url){
      return new Promise((resolve,reject) => {
          let req = new XMLHttpRequest();
          req.open('GET',url,true);
          req.onreadystatechange = function(){
              if(req.readyState == 4 && req.status == 200){
                  resolve(req.responseText);
              }else {
                  reject(req.responseText);
              }
          };
          req.send();
      })
  };

  getAjax("/url").then(data=>{

  }).catch(e =>{});

//deepCopy
    function deepCopy(p,c){
        var c = c || {};
        for(var i in p){
            if(typeof p[i] === 'object'){
                c[i] = (p[i].constructor === 'Array')?[]:{};
                deepCopy(p[i],c[i]);
            }else {
                c[i] = p[i];
            }
        }
        return c;
    }