//cell类型，描述所有格子的属性和方法
function Cell(r,c,img) {
	this.r=r;
	this.c=c;
	this.img=img;
}
//用来描述所有图形的属性和方法
function Shape() {

}
Shape.prototype= {
	IMGS: {
		O:"images/O.png",
		I:"images/I.png",
		J:"images/J.png",
		L:"images/L.png",
		S:"images/S.png",
		Z:"images/Z.png",
		T:"images/T.png",
	}
}

function O() {
	//借用父类型构造函数
	Shape.call(this);
	this.cells=[
		new Cell(0,4,this.IMGS.O),
		new Cell(0,5,this.IMGS.O),
		new Cell(1,4,this.IMGS.O),
		new Cell(1,5,this.IMGS.O),
	];
}
Object.setPrototype(O.prototype,Shape.prototype);
function T() {
	Shape.call(this);
	this.cells=[
		new Cell(0,3,this.IMGS.T),
		new Cell(0,4,this.IMGS.T),
		new Cell(0,5,this.IMGS.T),
		new Cell(1,4,this.IMGS.T),
	];
}
Object.setPrototype(T.prototype,Shape.prototype);
function I() {
	Shape.call(this);
	this.cells=[
		new Cell(0,3,this.IMGS.I),
		new Cell(0,4,this.IMGS.I),
		new Cell(0,5,this.IMGS.I),
		new Cell(0,6,this.IMGS.I),
	];
}
Object.setPrototype(I.prototype,Shape.prototype);