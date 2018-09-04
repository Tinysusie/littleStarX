module.exports = {
    // errno 即错误代码，0 表示没有错误。
    //       如果有错误，errno != 0，可通过下文中的监听函数 fail 拿到该错误码进行自定义处理
    "errno": 0,

    // data 是一个数组，返回若干图片的线上地址
    "data": [
        "http://localhost:3000/upload/019.gif",
    ]
}

