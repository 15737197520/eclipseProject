<%@ page language="java" 	pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<table>
	<tr>
		<td colspan="9" class="nocontent">
			<p>
				您好
				<!-- 获取session中的用户对象，显示用户名 -->
				<s:if test="#session.user!=null">${user.userName}</s:if>
				，欢迎进入个人中心！
			</p>
		</td>
	</tr>
</table>