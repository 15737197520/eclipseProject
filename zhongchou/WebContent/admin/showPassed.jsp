<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="css/style.css" type="text/css" rel="stylesheet" />
<link href="css/frame.css" type="text/css" rel="stylesheet" />
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
<h2 align="center">已审核商品</h2>
<div class="wrapper">
<table width="100%" border="0" align="center" cellpadding="1" cellspacing="1" bgcolor="#CECECE" class="table">
<tr >
  <th  bgcolor="#ffffff" >众筹商品</th>
   <th bgcolor="#ffffff" >缩略图</th>
   <th  bgcolor="#ffffff">  创建人 </th>
  <th  bgcolor="#ffffff"  >筹资金额</th>
  <th  bgcolor="#ffffff"  >支持金额</th>
  <th bgcolor="#ffffff"  >开始日期</th>
  <th  bgcolor="#ffffff" >结束日期</th>
  <th colspan="2" width="16%" height="26" bgcolor="#ffffff" >操作</th>
</tr>
<s:if test="showPassed==null">
			<tr>
				<td colspan="8" bgcolor="#ffffff" align="center">
					<p>
						您还没有此项数据
					</p>
				</td>
			</tr>
</s:if>

<s:iterator value="showPassed" id="goods">
<tr align="center">
  <td  bgcolor="#ffffff"> ${goodsName}</td>
   <td  bgcolor="#ffffff" width="102" height="82"><img src="../${shotcut1}"/></td>
   <td bgcolor="#ffffff">  <s:property value="userName"/>  </td>
  <td bgcolor="#ffffff"><s:property value="#goods.aimPrice"/></td>
  <td bgcolor="#ffffff"><s:property value="#goods.price"/></td>
  <td  bgcolor="#ffffff">${startDate}</td>
  <td  bgcolor="#ffffff">${endDate}</td>
  <td  bgcolor="#ffffff">已通过</td>
  <td  bgcolor="#ffffff"><a href="PcheckReject?checkId=${goodsId}" >拒绝</a></td>
</tr>
</s:iterator>

</table>
</div>
</body>
</html>