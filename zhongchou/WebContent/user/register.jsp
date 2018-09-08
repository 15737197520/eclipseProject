<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="../css/toOrder.css" type="text/css" rel="stylesheet" />
<link href="../css/style.css" type="text/css" rel="stylesheet" />
<link href="../css/reg.css" type="text/css" rel="stylesheet" />
<link href="../css/top.css" type="text/css" rel="stylesheet" />

<link href="css/toOrder.css" type="text/css" rel="stylesheet" />
<link href="css/style.css" type="text/css" rel="stylesheet" />
<link href="css/reg.css" type="text/css" rel="stylesheet" />
<link href="css/top.css" type="text/css" rel="stylesheet" />
</head>
<body class="ng-scope" id="ng-app" >

<jsp:include page="top.jsp"></jsp:include>

<div class="grzxOuterBox hidden ng-scope" style="display: block;" >
<div class="zhifuOuterBox"><div class="mainIn02Box"><div class="zhifuInnerBox">
<div class="zhifuCBox"><div class="ui-view-container">
<div class="animate-slide ng-scope" style="position: relative; min-height: 400px;" >
<div class="slide-container ng-scope" >
<div class="tjddCont ng-scope" >
        <!-- ngIf: step==0 -->
        <!-- ngIf: step==1 -->

        <div class="tjdd_list">
            <div class="tjdd_item animate-reward cur" style="display: block;" >
                  
                <!-- 普通支持项目 -->
                <div >
                    <!-- ngIf: !pay.selectedItem -->
                   
				<div class="reg-left">
					<form id="registerform" method="post" name="registerform"  action="register">
						<dl>
							<dt>
								注册新账号
							</dt>
							<dd>
								<label id="label_username" class="labeltips">
									 用户名：
								</label>
								<input id="username" class="input-reg" type="text" name="userName" />
							</dd>
							
							<dd>
								<label id="label_password" class="labeltips">
								 密码：
								</label>
								<input id="password" class="input-reg" type="password"
									name="password" />
							</dd>


							<dd>
								<label id="label_password2">
									 确认密码：
								</label>
								<input id="password2" class="input-reg" type="password"
									name="password2" />
							</dd>
							
							<dd>
								<label id="label_mobile" class="labeltips">
									 手机号：
								</label>
								<input id="mobile" class="input-reg" type="text" name="mobile" />
							</dd>
							
							<dd>
								<label id="label_email" class="labeltips">
									&nbsp;&nbsp;邮箱：
								</label>
								<input id="email" class="input-reg" type="text" name="email" />
							</dd>
							
							<dd>
								<label id="label_email" class="labeltips">
									&nbsp;&nbsp;地址：
								</label>
								<input id="email" class="input-reg" type="text" name="address" />
							</dd>
							
						</dl>
						
						<div>
							<!-- 显示提示信息 -->
							<% if(request.getAttribute("message") != null){
							%>
							<font color="red"> <%=request.getAttribute("message") %> </font>
							<%
							}
							%>
						</div>
						
							<input type="submit" 	value="立刻注册" />
						
					</form>
				</div>
                    
                  </div>
			   </div><!-- end ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards -->
        </div>
            
    </div>
    
   
    
    </div></div></div></div></div></div></div></div></body>
</html>