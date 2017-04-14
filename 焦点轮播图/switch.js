window.onload=function() {
	var container = document.getElementById("container");
	var piclist = document.getElementById("piclist");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var index=0;			//用于索引当前按钮
	var len=5;				//当前图片的数量
	var animated=false;		//用于判断切换是否进行
	var interval=3000;		//自动播放定时器秒数，这里是3秒
	var timer;				//定时器

	// 左右箭头点击事件
	prev.onclick=function() {
		if (animated) {    //如果切换还在进行，则直接结束，直到切换完成
            return;
        }
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
		if (animated) {    //如果切换还在进行，则直接结束，直到切换完成
            return;
        }
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
			if (animated) {   //如果切换还在进行，则直接结束，直到切换完成
                return;
            }
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

	container.onmouseover = stop;//父容器的移入移出事件
	container.onmouseout = play;

	play();  //调用自动播放函数

	// 切换动画
	/* 改进切换动画
	主要实现方法是通过定时器setTimeout。
	1. 设置切换需要的总时间，每次间隔多少时间，然后求出每次切换过渡的位移量，
	2. 判断是否到达目标值，若否，则继续执行定时器进行位移。
	3. 如果连续点击切换按钮，图片会立刻不停地切换，
	   但我们想要的效果是等当前图片切换完成之后再进行下一次切换，这个可以优化一下。
	4. 最后实现自动播放效果，当鼠标不点击时，它能自动播放，
	 这里用到setInterval定时器，每次3秒执行一次点击事件，
	 而当鼠标移上去的时候清除该事件，离开的时候又自动播放。*/
	function animate(offset) {
		animated = true;	 //切换进行中
		var time = 300;     //位移总时间
		var interval = 10;	//位移间隔时间，间隔时间越短，动画越流畅。
		var speed = offset/(time/interval);//每次位移量
		// 必须要用offsetLeft
		// style.left的值需要事先定义，否则取到的值为空，而且必须要定义在html里。
		var left = piclist.offsetLeft+offset;
		// piclist.style.left=piclist.offsetLeft+offset+"px";
		var go = function() {
			//这两种情况表示还在切换中
			if((speed > 0 && piclist.offsetLeft < left) || (speed < 0 && piclist.offsetLeft > left)) {
				piclist.style.left = piclist.offsetLeft + speed + "px";
				setTimeout(go,interval);	//继续执行切换go()函数
			}
			else {
				piclist.style.left = left + "px";
				if(left>0) {
					piclist.style.left=-2400+"px";
				}
				if (left<-2400) {
					piclist.style.left="0px";
				}
				animated = false;    //切换完成
			}
		}
		go();
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

	//自动播放
    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, interval);
    }
     //清除定时器
    function stop() {
        clearTimeout(timer);
    }
}