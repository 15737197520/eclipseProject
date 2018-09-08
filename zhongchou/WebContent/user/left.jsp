<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="../css/rightContent.css" type="text/css" rel="stylesheet" />
<link href="../css/left.css" type="text/css" rel="stylesheet" />
<link href="../css/top.css" type="text/css" rel="stylesheet" />
<link href="css/rightContent.css" type="text/css" rel="stylesheet" />
<link href="css/left.css" type="text/css" rel="stylesheet" />
<link href="css/top.css" type="text/css" rel="stylesheet" />
</head>
<body>

<div class="grzxOuterBox">

<div class="mainInnerBox clearfix" style="position:relative;">
<div class="ng-scope" style="min-height:400px;">

<div class="grzxLeftBox">

    <div class="grzxLNavItem">
        <h3>我的众筹商品</h3>

        <div class="grzxLNav">
            <div class="grzxLNavABox">
                <a class="site_hoverCssA btn_ALink" href="#/user-center/focus" >已审核</a>
            </div>
            
        </div>
    </div>
    <div class="grzxLNavItem">
        <h3>我的订单</h3>

        <div class="grzxLNav">
      
            <div class="grzxLNavABox">
                <a class="site_hoverCssA btn_ALink" href="showOrder?id=${userL.userId}" target="content">我的订单<i class="news_i ng-binding ng-hide" ng-bind="user.commentsNum" ng-show="user.commentsNum>0">0</i></a>
            </div>
            
        </div>
    </div>
    <div class="grzxLNavItem">
        <h3>设置</h3>

        <div class="grzxLNav">
            <div class="grzxLNavABox">
                <a class="site_hoverCssA btn_ALink" href="#/user-center/userinfo" >个人资料</a>
            </div>
            <div class="grzxLNavABox">
                <a class="site_hoverCssA btn_ALink" href="#/user-center/change-password" >修改密码</a>
            </div>
           
        </div>
    </div>

</div>


</div></div></div>
</body>
</html>