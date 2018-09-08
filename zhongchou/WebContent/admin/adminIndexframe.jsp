<%@ page language="java" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>" />
		<title>管理员中心 </title>
		<style type="text/css">
		body{
	 background: url("../images/fj.jpg") no-repeat scroll transparent;
}
		</style>
	</head>
	<frameset rows="16%,84%">
	  <frame src="user/head2.jsp" noresize="noresize" frameborder="0" />
	  <frameset cols="20%,80%">
	  	   <frame src="admin/left.html" noresize="noresize" frameborder="0" />
	  	   <frame src="admin/content.jsp" noresize="noresize" name="content" frameborder="0"/>
	  </frameset>
	
	</frameset>

</html>