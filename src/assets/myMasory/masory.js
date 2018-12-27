;(function($,window,document,undefined){

    var PicConstr = function(el,opts){
        this.$el = el;
        this.defalut = {
            itemSelector:'.myItem' 
        };
        this.options = $.extend({},this.defalut,opts)

    }

    PicConstr.prototype.setPos = function(){
        this.$el.css({
            position:'relative'
        });
        $(this.options.itemSelector).css({
            position:'absolute'
        })

        var items = $(this.options.itemSelector);
        console.log(items.length)
        var frontPos = {
            width:0,
            height:0
        };
        var line = 1;
        var parentWidth = this.$el.outerWidth(true);
        console.log(this.$el.width())
        var curWidthAll = 0

        items.each(function(item,el) {
            if(parentWidth >= curWidthAll) {
                frontPos.width = $(this).outerWidth(true);
                if(line = 1){
                    frontPos.height = 0;
                    $(this).css({
                        top:frontPos.height,
                        left:curWidthAll
                    });
                }else {
                    $(this).css({
                        top:frontPos.height * line,
                        left:curWidthAll
                    });
                }
            }else {
                curWidthAll = 0
                line++
                frontPos.width = 0;
                frontPos.height = $(this).outerHeight(true);
                
                $(this).css({
                    top:frontPos.height,
                    left:frontPos.width
                }); 
            }
            curWidthAll += frontPos.width
            console.log(parentWidth,frontPos,curWidthAll,line)
        });
    };

    $.fn.masory = function(opts){
        var picLayer = new PicConstr(this,opts);
        return picLayer.setPos();
    }


































})(jQuery,window,document);