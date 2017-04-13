window.onload=function() {
	var container = document.getElementById("container");
	var piclist = document.getElementById("piclist");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var index=0;				//用于索引当前按钮

	// 左右箭头点击事件
	prev.onclick=function() {
		if (index==0) {
			index=4;
		}
		else {
			index-=1;
		}
		animate(-600);
		showButton();

	}
	next.onclick=function() {
		if (index==4) {
			index=0;
		}
		else {
			index+=1;
		}
		animate(600);
		showButton();
	}

	// 按钮点击事件
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick=function() {
			//当继续点击当前按钮的时候，不进行切换
			if(this.className == 'on') {
                return;
            }
			// 先获取现在点击的是哪个按钮
			var myIndex=this.getAttribute("index");
			var offset=parseInt(myIndex-index)*600;
			animate(offset);
			index=myIndex;
			showButton();
		}
	}


	// 切换动画
	function animate(offset) {
		// 必须要用offsetLeft
		// style.left的值需要事先定义，否则取到的值为空，而且必须要定义在html里。
		piclist.style.left=piclist.offsetLeft+offset+"px";
		if(piclist.offsetLeft>0) {
			piclist.style.left=-2400+"px";
		}
		if (piclist.offsetLeft<-2400) {
			piclist.style.left=0+"px";
		}
	}

	// 用于为按钮添加样式
	function showButton() {
		 //先找出原来有.on类的按钮，并移除其类
		for (var i = 0; i < buttons.length; i++) {
			if(buttons[i].className=="on") {
				buttons[i].className="";
			}
		}
		 //为当前按钮添加类
		buttons[index].className="on";
	}
}