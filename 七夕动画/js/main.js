var container = $("#content");
	//获得第一个子节点
var element = container.find(":first");
// li页面数量
var slides = element.find("li");
//获取容器尺寸
var width = container.width();
var height = container.height();
var $boy = $("#boy");

jQuery(document).ready(function($) {
	animat();
});

function animat() {
	init();
}




function init() {



	//设置li页面的总宽度
	element.css({
		width:slides.length*width + "px",
		height:height + "px"
	});
	//设置每个页面li元素的宽度
	slides.each(function(index) {
		//获取每个li元素
		var slide = slides.eq(index);
		//设置每个li元素的宽高
		slide.css({
			width:width + "px",
			height:height + "px"
		});
	});


	//设置小男孩在页面中的位置
	//获取数据
	var getValue = function(className) {
		var $ele = $('' + className + '');
		//走路的路线坐标
		var obj = {
			height: $ele.height(),
			top: $ele.position().top
		};
		return obj;
	}

	//路的Y轴
	var pathY = function() {
		var data = getValue('.a_background_middle');
		var Y = data.top + data.height / 2;
		return Y;
	}();

	var boyHeight = $boy.height();

	//修正小男孩的位置
	//路的中间位置减去小孩的高度，25是一个修正值
	$boy.css({
		top:pathY-boyHeight + 25
	});

	var swipe = Swipe();


	$("button:first").click(startWalk);
	function startWalk() {
		if(!isPause) {
			return;
		}
		isPause = false;
		starTime = Date.now();
		$boy.addClass("slowWalk").css({
			left:width+"px",
			transition: "left "+(time-runTime)+"s"
		}).removeClass("pauseWalk");
	};

	// 恢复走路
	function restoreWalk() {
		$boy.addClass("pauseWalk");
	}

	//css3的动作变化
	function slowWalk() {
		$boy.addClass("slowWalk");
	}

	//计算移动距离
	function calculateDist(direction,proportion) {
		return (direction == "x"?width:height)*proportion;
	}

	//用transition做运动
	function startWalk(options,walkTime) {
		var dfdplay = $.Deferred();
		//恢复走路
		restoreWalk();
		//运动的属性
		$boy.transition()
	}
}
