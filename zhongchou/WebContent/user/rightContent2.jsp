<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html class="ng-scope" id="ng-app">
<head>
<title></title>
<link href="../css/rightContent.css" type="text/css" rel="stylesheet" />
<link href="../css/left.css" type="text/css" rel="stylesheet" />
<link href="../css/top.css" type="text/css" rel="stylesheet" />
<link href="css/rightContent.css" type="text/css" rel="stylesheet" />
<link href="css/left.css" type="text/css" rel="stylesheet" />
<link href="css/top.css" type="text/css" rel="stylesheet" />
</head>
<body >
<jsp:include page="top.jsp"></jsp:include>

<div class="grzxOuterBox">

<div class="mainInnerBox clearfix" style="position:relative;">
<div class="ng-scope" style="min-height:400px;" ng-element-ready="" data-ui-view="">

<div class="grzxLeftBox">

    <div class="grzxLNavItem">
        <h3>我的众筹商品</h3>

        <div class="grzxLNav">
            <div class="grzxLNavABox">
                <a class="site_hoverCssA btn_ALink" href="#/user-center/focus" ui-sref=".focus">已审核</a>
            </div>
            
        </div>
    </div>
    <div class="grzxLNavItem">
        <h3>我的订单</h3>

        <div class="grzxLNav">
      
            <div class="grzxLNavABox">
                <a class="site_hoverCssA btn_ALink" href="showOrder?id=${userL.userId}" target="c">我的订单<i class="news_i ng-binding ng-hide" ng-bind="user.commentsNum" ng-show="user.commentsNum>0">0</i></a>
            </div>
            
        </div>
    </div>
    <div class="grzxLNavItem">
        <h3>设置</h3>

        <div class="grzxLNav">
            <div class="grzxLNavABox">
                <a class="site_hoverCssA btn_ALink" href="#/user-center/userinfo" ui-sref=".userinfo">个人资料</a>
            </div>
            <div class="grzxLNavABox">
                <a class="site_hoverCssA btn_ALink" href="#/user-center/change-password" ui-sref=".changePassword">修改密码</a>
            </div>
           
        </div>
    </div>

</div>
<div class="grzxRightBox ng-scope">
<div class="grzxTabBox moduleItem ng-scope" >

<div class="grzxTabCBox ng-scope" id="grzxTabCBox">
    <!-- ngIf: loading -->
    <div class="grzxTabItem" ng-show="loading==false">
        <div class="grzx_ddList">
<iframe  src="user/myOrder.jsp" name="c" frameborder="0" width="100%" height="100%" scrolling=no>
  
</iframe>
        </div>
        <div class="xxPageBox">
            <div class="sitePageBox">
                <div class="ng-isolate-scope" pages="pages" current-page="currentPage" pagination=""></div>
            </div>
        </div>
        <!-- ngIf: moredis&&(!list.length) -->
    </div>
</div>
</div></div>

</div></div></div></body>
</html>