//jQ .offset() .position()
// targetDom为fixed的时候需要另外处理（不适用此方法）=>得到的时相对于浏览器窗口的值

   var getOffset = function(targetDom){
        let target = targetDom,top = targetDom.offsetTop,left = targetDom.offsetLeft;

        // console.log(target.offsetParent)
        while(target.offsetParent){
            target = target.offsetParent
            top += target.offsetTop;
            left += target.offsetLeft;
        }

        return {
            "top":top,
            "left":left
        }
    }
