<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="css/toOrder.css" type="text/css" rel="stylesheet" />
<link href="../css/toOrder.css" type="text/css" rel="stylesheet" />
</head>
<body class="ng-scope" id="ng-app" >

<jsp:include page="top.jsp"></jsp:include>

<div class="grzxOuterBox hidden ng-scope" style="display: block;" >
<div class="zhifuOuterBox"><div class="mainIn02Box"><div class="zhifuInnerBox">
<div class="zhifuCBox"><div class="ui-view-container">
<div class="animate-slide ng-scope" style="position: relative; min-height: 400px;" >
<div class="slide-container ng-scope" >
<form action="createOrder" method="post">
<div class="tjddCont ng-scope" >
        <!-- ngIf: step==0 -->
        <!-- ngIf: step==1 -->

        <div class="tjdd_list">
            <div class="tjdd_item animate-reward cur" style="display: block;" >
                  
                <!-- 普通支持项目 -->
                <div >
                    <!-- ngIf: !pay.selectedItem -->
                    <h3 class="support_h3 ng-binding">支持成功！<!-- ngIf: reward.limit --></h3>
                    
<br /><br /><br /><br /><br /><br />
                    
                  </div>
			   </div><!-- end ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards -->
        </div>
            
    </div>
    
    </form>
    
    </div></div></div></div></div></div></div></div></body>
</html>