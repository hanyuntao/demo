function Swipe() {
	var swipe = new Object();

	swipe.scrollTo = function(x,speed) {
		element.css({
			// 在5秒的时间内，移动X的位置，为2个页面单位
			"transition-duration":speed,
			"transition-timing-function":"linear",
			transform:"translate(-"+x+"px,0)"
		});
		return this;
	}
	return swipe;
}