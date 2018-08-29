module.exports = function ResCls(params){
        return {
            "login":params.login?params.login:"success",
            "msg":params.msg?params.msg:"",
            "data":params.data?params.data:[],
            "code":params.code?params.code:0,
            "success":params.status?params.status:true
        }
}