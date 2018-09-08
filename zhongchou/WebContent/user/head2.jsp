<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="model.Admin" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<style type="text/css">
.right{
 float:right;
 margin-top:-30px;
}
</style>
</head>

<body>
<center>
<h2 >
	众筹网后台管理
</h2>
<% 
		Admin admin = (Admin) session.getAttribute("admin");
		if (admin == null) {
 %>
<div class="right">
		请管理员登陆！
</div>
<% 
			} else {
 %>
<div class="right">
		${admin.adminName }, 欢迎您!<!-- 这地方该怎么写？如果存在同名怎么办只写adminName -->
	
		<a href="adminLogout"  target="_top">退出</a>
</div>
	<% 
			}
		 %>
</center>
</body>
</html>