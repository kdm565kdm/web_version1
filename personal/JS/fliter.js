// JavaScript Document

if (typeof FileReader == 'undefined' )
{
   result.innerHTML = "<p>抱歉，你的浏览器不支持 FileReader</p>";
   file.setAttribute( 'disabled','disabled' );
}
//将文件以Data URL形式进行读入页面
function readAsDataURL()
{
    //检查是否为图像文件
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    //将文件以Data URL形式进行读入页面
    reader.readAsDataURL(file);
    reader.onload = function(e)
    {
       var origin=document.getElementById("origin");
	   var ps=document.getElementById("ps");
       //在页面上显示文件
	   ps.setAttribute("src",this.result);
       origin.setAttribute("src",this.result);
    }
}

var image=document.getElementById("ps");
var fliter=document.getElementById("fliter");
var size=document.getElementById("range1");
var read=document.getElementById("read");
var image_div=document.getElementById("image");
read.onclick=function(){image_div.style.display="block";readAsDataURL();};
function change_fliter(){
	var selected_fliter=fliter.options[fliter.selectedIndex].value;
	if(selected_fliter=="灰度滤镜"){size.oninput=function(){gray();}; size.setAttribute("max","100");size.value="0";}
	if(selected_fliter=="褐色滤镜"){size.oninput=function(){sepia();};size.setAttribute("max","100");size.value="0";}
	if(selected_fliter=="饱和度"){size.oninput=function(){saturate();};size.setAttribute("max","250");size.value="0";}
	if(selected_fliter=="色彩环滤镜"){size.oninput=function(){color_circle();};size.setAttribute("max","360");size.value="0";}
	if(selected_fliter=="颜色翻转"){size.oninput=function(){invert();};size.setAttribute("max","100");size.value="0";}
	if(selected_fliter=="透明度滤镜"){size.oninput=function(){opacity();};size.setAttribute("max","100");size.value="0";}
	if(selected_fliter=="对比度"){size.oninput=function(){contrast();};size.setAttribute("max","200");size.value="0";}
	if(selected_fliter=="模糊滤镜"){size.oninput=function(){mohu();};size.setAttribute("max","100");size.value="0";}
	}
fliter.onchange=function(){change_fliter();};
function sepia(){
	
		var fliter_style="sepia("+size.value+"%)";
		image.style.filter=fliter_style;
		var webkit_fliter_style="-webkit-filter:sepia("+size.value+"%)";
		image.style.cssText=webkit_fliter_style;
	}
	
function gray(){
	
		var fliter_style="grayscale("+size.value+"%)";
		image.style.filter=fliter_style;
		var webkit_fliter_style="-webkit-filter:grayscale("+size.value+"%)";
		image.style.cssText=webkit_fliter_style;
	}
	
function saturate(){
	var fliter_style="saturate("+size.value+"%)";
		image.style.filter=fliter_style;
		var webkit_fliter_style="-webkit-filter:saturate("+size.value+"%)";
		image.style.cssText=webkit_fliter_style;
	}
	
function color_circle(){
	var fliter_style="hue-rotate("+size.value+"deg)";
		image.style.filter=fliter_style;
		var webkit_fliter_style="-webkit-filter:hue-rotate("+size.value+"deg)";
		image.style.cssText=webkit_fliter_style;
	}
function invert(){
	var fliter_style="invert("+size.value+"%)";
		image.style.filter=fliter_style;
		var webkit_fliter_style="-webkit-filter:invert("+size.value+"%)";
		image.style.cssText=webkit_fliter_style;
	}
function opacity(){
	var opacity=100-parseInt(size.value);
	opacity.toString;
	var fliter_style="opacity("+opacity+"%)";
		image.style.filter=fliter_style;
		var webkit_fliter_style="-webkit-filter:opacity("+opacity+"%)";
		image.style.cssText=webkit_fliter_style;
	}
function contrast(){
	var fliter_style="contrast("+size.value+"%)";
		image.style.filter=fliter_style;
		var webkit_fliter_style="-webkit-filter:contrast("+size.value+"%)";
		image.style.cssText=webkit_fliter_style;
	}
function mohu(){
	var fliter_style="blur("+size.value+"px)";
		image.style.filter=fliter_style;
		var webkit_fliter_style="-webkit-filter:blur("+size.value+"px)";
		image.style.cssText=webkit_fliter_style;
	}