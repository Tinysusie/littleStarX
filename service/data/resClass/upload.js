module.exports = function ResUploadCls(params){
    return {
        "login":params.login===false?params.login:true,
        "msg":params.msg?params.msg:"",
        "data":params.data?params.data:[],
        "errno":params.code?params.code:0,
        "success":params.status===false?params.status:true
    }
}