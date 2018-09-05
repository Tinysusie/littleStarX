module.exports = function ResCls(params){
        return {
            "login":params.login===false?params.login:true,
            "msg":params.msg?params.msg:"",
            "data":params.data?params.data:[],
            "code":params.code?params.code:0,
            "success":params.success===false?params.success:true
        }
}