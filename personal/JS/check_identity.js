// JavaScript Document
//验证表单脚本
var check_dialog=document.getElementById("check_dialog");
var error=document.getElementById("error_dialog");
check_dialog.show();
//验证输入内容函数
function check(){
	var me=document.getElementById("me");
	var check=document.getElementById("check").value;
	
	if(check=="牛哥"){me.style.display="block";check_dialog.close();check="";}
	else{check_dialog.close(); error.show();check="";}
	}
//为表单各按钮添加点击监听
var check_message=document.getElementById("check_message");
check_message.onclick=function(){
	check();
	};
	
var check_error=document.getElementById("check_error");
check_error.onclick=function(){
	error.close();
	};

