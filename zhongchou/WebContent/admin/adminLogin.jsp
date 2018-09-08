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
		<title>管理员登录 </title>
		<link href="css/style.css" type="text/css" rel="stylesheet" />
		<link href="css/reg.css" type="text/css" rel="stylesheet" />
		<link href="../css/style.css" type="text/css" rel="stylesheet" />
		<link href="../css/reg.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript">
			function check(){
				var name=document.loginform.name.value;
				var password=document.loginform.password.value;
				if(name=="" || password==""){
					alert("用户名和密码不能为空！");
					return false;
				}
			}
		</script>
	</head>

	<body>
		<div id="wrapper">
			<center>
			<h1>
			众筹网后台管理
			</h1>
			</center>

			<div id="cols">
				<div class="reg-left">
					<form id="loginform" name="loginform"	action="adminLogin" method="post">
						<dl>
							<dt>
								管理员登录!
							</dt>
							<dd>
								<label id="label_username" class="labeltips">
									用户名：
								</label>
								<input id="username" class="input-reg" type="text" name="adminName"
									value="${adminName}" />
							</dd>
							<dd class="">
								<label id="label_password" class="labeltips">
									密码：
								</label>
								<input id="password" class="input-reg" type="password"
									maxlength="12" value="" name="adminPassword" />
							</dd>
						</dl>
						<p>
							<a href="#">忘记密码？</a>
						</p>
						<div>
							<font color="red">${message}</font>
						</div>
						<p class="my-login">
							<input id="login_btn" class="log-gj" type="submit" value="登陆"
								onclick="return check()" />
							<span></span>
						</p>
					</form> 
				</div>
			</div>
			<div id="footer">
				<jsp:include page="/user/foot.jsp"></jsp:include>
			</div>
		</div>
	</body>
</html>
