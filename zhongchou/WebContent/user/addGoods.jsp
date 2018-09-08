<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html >
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
    
        <div class="tjdd_list">
            <div class="tjdd_item animate-reward cur" style="display: block;" >
     
                <div >
    
				<div class="reg-left">
					<form id="registerform" method="post" name="registerform"  action="addGoods"  enctype="multipart/form-data">
						<dl>
							<dt>
								发布众筹
							</dt>
							<dd>
								<label id="label_username" class="labeltips">
									项目名称：
								</label>
								<input id="username" class="input-reg" type="text" name="goodsName" />
							</dd>
							
							<dd>
								<label id="label_password" class="labeltips">
								 项目描述：
								</label>
								<input id="mobile" class="input-reg" type="text" name="descri" />
							</dd>


							<dd>
								<label id="label_password2">
									 筹资金额：
								</label>
								<input id="password2" class="input-reg" type="text"
									name="aimPrice" />
							</dd>
							
							<dd>
								<label id="label_mobile" class="labeltips">
									 支持金额：
								</label>
								<input id="mobile" class="input-reg" type="text" name="price" />
							</dd>
							
							<dd>
								<label id="label_email" class="labeltips">
									开始日期：
								</label>
								<input id="email" class="input-reg" type="date"  name="startDate" />
							</dd>
							
							<dd>
								<label id="label_email" class="labeltips">
									结束日期：
								</label>
								<input id="email" class="input-reg" type="date" name="endDate" />
							</dd>
							
							<dd>
								<label id="label_email" class="labeltips">
									回馈描述：
								</label>
								<input id="mobile" class="input-reg" type="text" name="feedBack" />
							</dd>
							
							<dd>
								<label id="label_email" class="labeltips">
									上传图片：
								</label>
								<input id="email" class="input-reg" type="file" name="pic" />			
							</dd>
							
							<dd>
								<input id="email" class="input-reg" type="file" name="pic" />
							</dd>
							
							<dd>
								<input id="email" class="input-reg" type="file" name="pic" />
							</dd>
							<dd>
								
							</dd>
							<dd>
								<input id="email" class="input-reg" type="submit" value="发起众筹"/>
							</dd>
							
						</dl>
	
	
					</form>
				</div>
                    
                  </div>
			   </div><!-- end ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards -->
        </div>
            
    </div>
    
   
    
    </div></div></div></div></div></div></div></div></body>
</html>