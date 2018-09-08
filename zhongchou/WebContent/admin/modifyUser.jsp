<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>                                                                                             <!-- sproperty怎样带value -->
<body>
<br />
<h2 align="center">修改用户</h2>
<form action="modifyUser" method="post">
<table align="center">
		<tr>
				<td colspan="2"><input type="hidden"  name="UserId" value="${modifyUser.userId }" /><br /><br />  </td>
        </tr>
        <tr>
        		<td>用户名：</td><td><input type="text"  name="userName"  value="${modifyUser.userName}" /><br /><br /></td>
        </tr>
        <tr>
        		<td>密码：</td><td><input  type="text" name="password"  value="${modifyUser.password}" /><br /><br /></td>        		
        </tr>
        <tr>
        		<td>手机号：</td><td><input type="text" name="mobile"  value="${modifyUser.mobile }" /><br /><br /></td>
        </tr>
        <tr>
        		<td>邮箱：</td><td><input type="text" name="email"  value="${modifyUser.email}" /><br /><br /></td>
        </tr>
        <tr>
        		<td>地址：</td><td><input type="text"  name="address"  value="${modifyUser.address }" /><br /><br /></td>
        </tr>
        <tr>
        		<td colspan="2"><input type="submit"   value="确认修改" /></td>
        </tr>
</table>
</form>

${modifyMessage }
</body>
</html>