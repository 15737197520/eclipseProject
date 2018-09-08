<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
.table{

font-size: 14px;
}
.wrapper{
margin-left:15px;
margin-right:15px;

}
</style>
</head>

<body>
<h2 align="center">所有用户</h2>
<div class="wrapper">
<table width="100%" border="0" align="center" cellpadding="1" cellspacing="1" bgcolor="#CECECE" class="table">
<tr >
  <th width="10%" height="26" bgcolor="#ffffff" >用户Id</th>
   <th width="10%" height="26" bgcolor="#ffffff">用户名</th>
   <th width="10%" height="26" bgcolor="#ffffff">  密码  </th>
  <th width="10%" height="26" bgcolor="#ffffff"  >手机号</th>
  <th width="10%" height="26" bgcolor="#ffffff"  >邮箱</th>
  <th width="10%" height="26" bgcolor="#ffffff" >地址</th>
  <th colspan="2" width="16%" height="26" bgcolor="#ffffff" >操作</th>
</tr>
<s:iterator value="users" id="user">
<tr align="center">
  <td height="23" bgcolor="#ffffff"> ${user.userId}</td>
   <td height="23" bgcolor="#ffffff">${user.userName}</td>
   <td height="23" bgcolor="#ffffff">  <s:property value="#user.password"/>  </td>
  <td height="23" bgcolor="#ffffff"><s:property value="mobile"/></td>
  <td height="23" bgcolor="#ffffff">${email}</td>
  <td height="23" bgcolor="#ffffff">${user.address}</td>
  <td height="23" bgcolor="#ffffff"><a href="toModifyPage?userId=${user.userId }">修改</a></td>
  <td height="23" bgcolor="#ffffff"><a href="deleteUser?userId=${user.userId }" >删除</a></td>
</tr>
</s:iterator>

</table>
</div>
</body>
</html>