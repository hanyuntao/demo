var tetris= {
	CELL_SIZE:26,
	RN:20,//行数
	CN:10,//列数
	PG:null,//背景
	OFFSET:15,//修正原点
	shape:null,
	start:function() {
		var self=this;
		self.pg=document.querySelector("playground");
		self.shape=new O();
	},
}