<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page language="java" import="model.Admin" %>

<html>
<head>
<link href="css/style.css" type="text/css" rel="stylesheet" />
<link href="css/frame.css" type="text/css" rel="stylesheet" />
</head>
<body>
<h1 class="f-left">
	<a href="toIndex.action">众筹网</a>
</h1>
<span class="chat"></span>
<ul>
	<% 
		Admin user = (Admin) session.getAttribute("admin");
		if (user == null) {
 %>
	<li>
		<a href="toRegister.action">注册</a>
	</li>
	<li>
		｜
	</li>
	<li>
		<a href="toLogin.action">登录</a>
	</li>
	<% 
			} else {
 %>
	<li>
		<a href="toHostIndex.action"> <%=user.getAdminName() %> </a>
	</li>
	<li>
		｜
	</li>
	<li>
		<a href="logout.action">退出</a>
	</li>
	<% 
			}
		 %>
	<li>
		｜
	</li>

</ul>
</body>
</html>