// JavaScript Document
//提交表单脚本
var name_error=document.getElementById("name_error");
var message_error=document.getElementById("message_error");
var name_message_error=document.getElementById("name_message_error");
var success=document.getElementById("success");
//验证输入内容函数
function submit_form(){
//获取输入的名字
//获取输入的留言内容
	var name=document.getElementById("name").value;
	var message=document.getElementById("message").value;
//验证输入信息

//当未输入姓名但输入了留言时
	if(name==""&&message!=""){name_error.show();}
//当输入姓名但未输入留言时
	if(name!=""&&message==""){message_error.show();}
//当姓名和留言均为输入时
	if(name==""&&message==""){name_message_error.show();}
//当姓名和留言都不为空，并提交后
	if(name!=""&&message!=""){success.show();}
	}

//获取表单提交按钮
var btn_sub=document.getElementById("sub");
//为各弹出框的确认按钮添加事件并绑定函数
var btn_check_name_error=document.getElementById("check_name");
btn_check_name_error.onclick=function(){name_error.close();document.getElementById("name").value=""; document.getElementById("message").value="";};

var btn_check_message_error=document.getElementById("check_message");
btn_check_message_error.onclick=function(){message_error.close();document.getElementById("name").value=""; document.getElementById("message").value="";};

var btn_check_name_message_error=document.getElementById("check_name_message");
btn_check_name_message_error.onclick=function(){name_message_error.close();document.getElementById("name").value=""; document.getElementById("message").value="";};

var btn_check_success=document.getElementById("check_success");
btn_check_success.onclick=function(){success.close();document.getElementById("name").value=""; document.getElementById("message").value="";};
//为表单提交按钮添加点击监听
btn_sub.onclick=function(){
	submit_form();
	};