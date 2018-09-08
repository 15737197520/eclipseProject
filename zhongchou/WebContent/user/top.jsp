<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="model.User" %>
    <%@taglib prefix="s"  uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="css/top.css" type="text/css" rel="stylesheet" />
<link href="../css/top.css" type="text/css" rel="stylesheet" />
</head>
<body>
<div class="siteHTopBox" >
</div>
<div class="siteMTopBox">

	<div class="mainInnerBox clearfix relative">

		<a class="siteMIndexA" href="">

			<img src="">

		</a>
	
		<div class="siteHNavBox clearfix">
      
 		      	<div class="siteHNavItem">
 	
		              	<a class="siteHNavItemA" href="index" target="_top">首&nbsp;&nbsp;页</a>
 
	                </div>
			<div class="siteHNavItem">
			     <a class="siteHNavItemA" href="toCreate" target="_top">发起众筹</a>
			</div>
			<div class="siteHNavItem">
			</div>
	
			
                 </div>	
			<div class="siteHLoginBox clearfix">
     <%
		User user = (User) session.getAttribute("userL");
		if (user == null) {
	%>
				<a class="siteH_login Js-showLogin" href="toLogin">登录</a>

			<span class="line"></span>

				<a class="siteH_register Js-showRegister" href="toReg">注册</a>
	<%
			} else {
		%>
	       
	
	
	<a class="siteH_register Js-showRegister" href="toCenter"><%=user.getUserName() %></a>
	<span class="line"></span>
	<a class="siteH_register Js-showRegister" href="userLogout" target="_top">退出</a>
	<%
			}
		%>
			</div>
		</div>
	</div>
</body>
</html>