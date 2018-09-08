<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>发布众筹</title>
</head>
<body>
<h2 align="center">发布众筹</h2>
<form action="addGoods" method="post" enctype="multipart/form-data">

<table align="center">
	<tr>
			<td>项目名称：</td><td><input type="text" name="goodsName" /></td><td>项目描述：</td><td rowspan="2"><textarea name="descri"></textarea></td>
	</tr>
	<tr>
			<td>筹资金额：</td><td><input type="text" name="aimPrice"/></td>
	</tr>
	<tr>
			<td>支持金额：</td><td><input type="text"  name="price" /></td><td>开始日期：</td><td><input type="date" name="startDate" /></td>
	</tr>
	<tr>
		  <td>上传图片：</td><td rowspan="3"><input type="file" name="pic"/><br /><input type="file" name="pic"/><br /><input type="file" name="pic"/></td><td>结束日期：</td><td><input type="date" name="endDate" /></td>			
	</tr>  
	<tr>
			<td ></td><td >回馈描述：</td><td ><input type="text"  name="feedBack" /></td>
	</tr>
	<tr>
			<td colspan="2"><input type="submit" value="发起众筹"></td>
	</tr>
</table>
</form>
<s:fielderror></s:fielderror>
</body>
</html>