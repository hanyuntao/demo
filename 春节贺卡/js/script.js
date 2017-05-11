window.onload = function() {
	//获取元素
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");

	//当音乐播放停止的时候，自动停止光盘旋转效果
	audio.addEventListener("ended",function() {
		music.setAttribute("class","");
	},false);

	//点击音乐，控制音乐播放效果
	music.addEventListener("touchstart",function() {
		if(audio.paused) {
			audio.play();
			this.setAttribute("class","play");
		}
		else {
			audio.pause();
			this.setAttribute("class","");
		}
	},false)

	//点击屏幕，出现切屏效果
	page1.addEventListener("touchstart",function() {
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top     = "100%";
		setTimeout(function() {
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},4000);
	},false)
}
