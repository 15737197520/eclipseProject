<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@taglib prefix="s"  uri="/struts-tags"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>管理员增加用户</title>
</head>
<body>
<center>
<h2>增加用户</h2>
<s:form action="addUser" method="post">
<s:textfield name="userName" label="用户名"></s:textfield>
<s:textfield name="password" label="密 码"></s:textfield>
<s:textfield name="mobile" label="手 机"></s:textfield>
<s:textfield name="email" label="邮 箱"></s:textfield>
<s:textfield name="address" label="地 址"></s:textfield>
<s:submit value="提交"></s:submit>
</s:form>
${addMessage }
</center>

</body>
</html>