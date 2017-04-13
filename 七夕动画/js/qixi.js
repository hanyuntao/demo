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

    $("button").click(function() {
        element.css({
            "transition-timing-function":"linear",
            "transition-duration":"5000ms",
            // 设置页面x轴移动
            "transform":"translate3d(-"+(width*2)+"px,0px,0px)"
        });
    })
        // $('button').click(function() {
        //             // 在5秒的时间内，移动X的位置，为2个页面单位
        //     element.css({
        //         'transition-timing-function': 'linear',
        //         'transition-duration': '5000ms',
        //         'transform': 'translate3d(-' + (width * 2) + 'px,0px,0px)' //设置页面X轴移动
        //     });
        // });
});