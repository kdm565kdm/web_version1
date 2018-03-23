// JavaScript Document
//获取画笔图案
var image=document.getElementById("image");
//获取增大画笔尺寸按钮
var plus=document.getElementById("plus");
//获取减小画笔尺寸按钮
var minus=document.getElementById("minus");
//获取绘图区
var canvas=document.getElementById("canvas");
//获取canvas绘图对象
var context=canvas.getContext("2d");
//绘图开关
var isDrawing=false;
var clear=document.getElementById("clear");
clear.onclick=function(){
canvas.height=canvas.height;
	};
var size_value=document.getElementById("size_value").onfocus=function(){this.blur();};
//画笔尺寸
var size=5;
//屏蔽pointerdown事件
canvas.addEventListener("pointerdown", function(e){e.preventManipulation()},false);
//为按下鼠标事件添加事件处理函数指定为startDrawing函数
canvas.addEventListener("mousedown",startDrawing,false);
//为移动鼠标事件添加事件处理函数指定为Draw函数
canvas.addEventListener("mousemove",draw,false);
//为抬起鼠标事件添加事件处理函数指定为stopDrawing函数
canvas.addEventListener("mouseup", stopDrawing,false);
//为增大画笔尺寸按钮添加点击事件并指定事件处理函数
plus.onclick=function(){
	size+=3;
	document.getElementById("size_value").value=size;
	}
//为减小画笔尺寸按钮添加点击事件并指定事件处理函数
minus.onclick=function(){	
	size-=3;
	if(size<=0){size=2;}
	document.getElementById("size_value").value=size;
	}

//startDrawing函数，用于开启绘制
function startDrawing(){isDrawing=true;}
//draw函数，用于绘制图案
function draw(event){
	if(isDrawing){
		
		var sx=canvas.width/canvas.offsetWidth;
		var sy=canvas.height/canvas.offsetHeight;
		var x=sx*event.clientX-image.naturalWidth/2;
		var y=sy*event.clientY-image.naturalHeight/2;
		context.beginPath();
		context.arc(x,y,size,0,Math.PI*2,true);
		context.closePath();
		var color=document.getElementById("color").value;
		context.fillStyle=color;
		context.fill();
		}
	}
	
//stopDrawing函数用于停止绘制
function stopDrawing(){
	isDrawing=false;
	}
