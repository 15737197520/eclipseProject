<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="css/toOrder.css" type="text/css" rel="stylesheet" />
<link href="css/style.css" type="text/css" rel="stylesheet" />
<link href="css/reg.css" type="text/css" rel="stylesheet" />
<link href="css/top.css" type="text/css" rel="stylesheet" />
<link href="../css/toOrder.css" type="text/css" rel="stylesheet" />
<link href="../css/style.css" type="text/css" rel="stylesheet" />
<link href="../css/reg.css" type="text/css" rel="stylesheet" />
<link href="../css/top.css" type="text/css" rel="stylesheet" />
</head>
<body class="ng-scope" id="ng-app" >

<jsp:include page="top.jsp"></jsp:include>

<div class="grzxOuterBox hidden ng-scope" style="display: block;" >
<div class="zhifuOuterBox"><div class="mainIn02Box"><div class="zhifuInnerBox">
<div class="zhifuCBox"><div class="ui-view-container">
<div class="animate-slide ng-scope" style="position: relative; min-height: 400px;" >
<div class="slide-container ng-scope" >
<div class="tjddCont ng-scope" >

        <div class="tjdd_list">
            <div class="tjdd_item animate-reward cur" style="display: block;" >
                  
                <!-- 普通支持项目 -->
                <div >
				<div class="reg-left">
					<form id="loginform" name="loginform" action="userLogin"
						method="post">
						
						<dl>
							<dt>
								用户登录
								<br />

							</dt>

							<dd>
								<label id="label_username" class="labeltips">
									用户名：
								</label>
								
								<input id="username" class="input-reg" type="text" name="userName"
									value="${userName }" />
							</dd>
							<dd class="">
								<label id="label_password" class="labeltips">
									密码：
								</label>
								<input id="password" class="input-reg" type="password"
									maxlength="12" value="" name="password" />
							</dd>
						</dl>

						<p>
							<a href="javascript:void(0);alert('功能待开发');">忘记密码？</a>
						</p>
						<div>
							${userLoginMessage}
						</div>
						<p class="my-login">
							<input  type="submit" value="登录"
								onclick="return check()" />
							<span></span>
						</p>
						<p class="reg-gj">
							还没有账户？
							<a href="toRegister.action">立即注册</a>
						</p>
					</form>
				</div>
                    
                  </div>
			   </div><!-- end ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards -->
        </div>
            
    </div>
    
    </div></div></div></div></div></div></div></div></body>
</html>