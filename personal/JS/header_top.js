// JavaScript Document
var p=0,t=0,x=0,y=0;
window.onscroll=function(){
//获得滚动条距离顶部的距离
	p=document.documentElement.scrollTop||document.body.scrollTop;
//获得头部div
	var header=document.getElementById("head");
//当p（滚动条距离顶部的距离）大于零时说明发生下拉事件
	 if(t<=p){
		 
		 var Opacity_down=100-x;
		 var Opacity_down_degree=Opacity_down/100;
		 Opacity_down_degree.toString;
		 header.style.opacity=Opacity_down_degree;
		 //当发生过下拉事件后，接着又发生本次上拉事件时，将下拉事件时的全局变量y赋值变为0
		 if(y!=0){y=0;}

		 x+=5;
		 }  
//当p（滚动条距离顶部的距离）小于零时说明发生下拉事件 
            else{ 
			var Opacity_up=y;
		 var Opacity_up_degree=Opacity_up/100;
		 Opacity_up_degree.toString;
		 header.style.opacity=Opacity_up_degree;
		 if(x!=0){x=0;}
		 y+=5;}
//通过setTimeout(0)来不停地进行回调
            setTimeout(function(){t = p;},0);  
	};