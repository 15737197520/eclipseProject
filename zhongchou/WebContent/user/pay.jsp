<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>确认支持</title>
<link href="css/toOrder.css" type="text/css" rel="stylesheet" />
</head>
<body class="ng-scope" id="ng-app" >

<jsp:include page="top.jsp"></jsp:include>

<div class="grzxOuterBox hidden ng-scope" style="display: block;" >
<div class="zhifuOuterBox"><div class="mainIn02Box"><div class="zhifuInnerBox">
<div class="zhifuCBox"><div class="ui-view-container">
<div class="animate-slide ng-scope" style="position: relative; min-height: 400px;" >
<div class="slide-container ng-scope" >
<form action="user/alipay.trade.page.pay.jsp" method="post">
<div class="tjddCont ng-scope" >
        <!-- ngIf: step==0 -->
        <!-- ngIf: step==1 --><a class="tjdd_h3 ng-scope" >选择支持</a><!-- end ngIf: step==1 -->

        <div class="tjdd_list">
            <div class="tjdd_item animate-reward cur" style="display: block;" >
                  
                <!-- 普通支持项目 -->
                <div >
                <h3 class="support_h3 ng-binding">确认付款：</h3>
                
                <br /><br />
                
                    <!-- ngIf: !pay.selectedItem -->
                    <h3 class="support_h3 ng-binding">￥${goodsDetail.price}<b><span class="ng-binding" >${goodsDetail.supports}</span>人支持<!-- ngIf: reward.limit --></b></h3>

                    <div class="support_title ng-binding" >个人标准套装</div>
                    <p class="support_inforP ng-binding" >
                                ${goodsDetail.feedBack}
                   </p>
                    <div class="supportFooter">
                        <div class="supportFLeft">
                            <p>
                                配送费用：
                                <!-- ngIf: reward.deliveryFee==0 --><b class="ng-scope" ng-if="reward.deliveryFee==0">免运费</b><!-- end ngIf: reward.deliveryFee==0 -->
                            </p>

                            <p style="display: none">预计回报发送时间：<b class="ng-binding">项目成功结束后20天内</b></p>
                        </div>
                        <div class="supportFRight" images="reward.imageUrls">
                           
                        </div>
                    </div>
                  </div>
			   </div><!-- end ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards --><!-- ngIf: reward.display==1 --><!-- end ngRepeat: (i, reward) in rewards -->
        </div>
        
        <div class="tjdd_QHCont">

            <div class="wszc_QHBox ng-scope" >
                <div class="tjdd_formItem clearfix">
                    <div class="tjddQHFGBox sitePHBox">
                     </div>
      
                </div>
            </div>
         
            <div>
                <div class="shdzForm_xnBox">
                    <p class="zj_valP ng-scope" ng-if="pay.logined || pay.selectedItem.itemType == 2">
                    支付<span><b>¥</b><span class="ng-binding">${goodsDetail.price}</span></span>
                    </p>
                   <input type="hidden"  id="WIDout_trade_no" name="WIDout_trade_no"  />
                   <input type="hidden"  name="WIDsubject" value="${goodsDetail.goodsName}" />
                   <input type="hidden"  name="WIDtotal_amount" value="${goodsDetail.price}" />
                   <input type="hidden"  name="WIDbody" value="${goodsDetail.descri}" />
                   
                   <input class="tjdd_submitBtn" type="submit" value="确认付款" >
                </div>
            </div>
            <!-- 实物回报 end -->
        </div>
        
    </div>
    
    </form>
    
    </div></div></div></div></div></div></div></div></body>
    <script language="javascript">
    function GetDateNow() {
		var vNow = new Date();
		var sNow = "";
		sNow += String(vNow.getFullYear());
		sNow += String(vNow.getMonth() + 1);
		sNow += String(vNow.getDate());
		sNow += String(vNow.getHours());
		sNow += String(vNow.getMinutes());
		sNow += String(vNow.getSeconds());
		sNow += String(vNow.getMilliseconds());
		document.getElementById("WIDout_trade_no").value =  sNow;
	}
	GetDateNow();
</script>
</html>