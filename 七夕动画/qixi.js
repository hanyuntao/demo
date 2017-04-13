jQuery(document).ready(function($) {
    // 页面的横向布局 start


    var container=$("#content");
    // 获取第一个节点
    var element= container.find(":first");
    // li页面数量
    var slides=element.find("li");
    // 获取容器尺寸
    var width= container.width();
    var height= container.height();
    // 设置li页面的总宽度
    element.css({
        width: slides.length*width+"px",
        height: height+"px"
    });
    // 设置每个页面li的宽度
    $.each(slides,function(index){
        //获取到每一个li元素
        var slide=slides.eq(index);
        slide.css({
            width:width+"px",
            height:height+"px"
        });
    });
    // 页面的横向布局 end



    // 页面之间的卷滚切换效果 start

    // $("button").click(function() {
    //     element.css({
    //         "transition-timing-function":"linear",
    //         "transition-duration":"5000ms",
    //         // 设置页面x轴移动
    //         "transform":"translate3d(-"+(width*2)+"px,0px,0px)"
    //     });
    // })
    // 页面之间的卷滚切换效果 end
    
    // 获取数据
       var getValue = function(className) {
           var $elem = $('' + className + '');
               // 走路的路线坐标
           return {
               height: $elem.height(),
               top: $elem.position().top
           };
       }

    // 男孩坐标算法 start
    var pathY = function() {
        var data = getValue('.a_background_middle');
        return data.top + data.height / 2;
    }();

    var $boy = $("#boy");
    var boyHeight = $boy.height();

    // 修正小男孩的正确位置
    // 路的中间位置减去小孩的高度，25是一个修正值
    $boy.css({
        top: pathY - boyHeight + 25
    });
    // 男孩坐标算法 end

    // 增加精灵动画 start

    $("button").click(function() {
        // 给小孩增加css3关键字规则
        $boy.addClass('slowWalk');
    })

    // 增加精灵动画 end
});