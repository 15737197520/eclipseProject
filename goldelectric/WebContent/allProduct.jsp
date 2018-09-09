<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>金融平台</title>
<meta name="description" content="金融平台">
<meta name="keywords" content="金融官网">
<meta name="author" content="">
<meta name="renderer" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="icon" href="" type="image/x-icon">
<link rel="shortcut icon" href="" type="image/x-icon">
<script charset="utf-8" src="${pageContext.request.contextPath}/js/v.js"></script>
<script src="${pageContext.request.contextPath}/js/push.js"></script>
<script src="${pageContext.request.contextPath}/js/hm.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery-2.0.0.min.js"></script>
<script>
    	var API_ENV = 'production',
        API_SUCCESS = '0000',
        API_FAILURE = '9999',
        API_TIMEOUT = '9998',
        API_PWD = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7mvvUKmV13ByFNs3XooPlffwm/qrA4jNlAc8BgoPIvdTkRsZ50UVzDl3GZycCvaeN2OHgRv1pxU9Q2CBgt/4VLbtpEc/z+gL6K23TXM1Fg04Gg3ZnA5GiamqX2Hl47qfKJiVoZiWuDTMuqyNuKxHeZ+fQ7K3NBK8qcWjZF3rgswIDAQAB',
        VAR_PREFIX ='qbjrPC';
    var version = '20171030',
        static_url = '/static',
        lib_url = '//lib01.haodaibao.com',
        module_name = 'Home',
        resthub_url = 'http://apis.qianbao.com',
        back_key = 'qbjrPCurl ';</script>
<link rel="stylesheet" type="text/css" href="css/c_dc330a6.css">
<link rel="stylesheet" type="text/css" href="css/__047b776.css">
</head>
<body>
	<div class="" style="display: none; position: absolute;">
		<div class="aui_outer">
			<table class="aui_border">
				<tbody>
					<tr>
						<td class="aui_nw"></td>
						<td class="aui_n"></td>
						<td class="aui_ne"></td>
					</tr>
					<tr>
						<td class="aui_w"></td>
						<td class="aui_c">
							<div class="aui_inner">
								<table class="aui_dialog">
									<tbody>
										<tr>
											<td colspan="2" class="aui_header">
												<div class="aui_titleBar">
													<div class="aui_title" style="cursor: move;"></div>
													<a class="aui_close" href="javascript:/*artDialog*/;">×</a>
												</div>
											</td>
										</tr>
										<tr>
											<td class="aui_icon" style="display: none;">
												<div class="aui_iconBg" style="background: none;"></div>
											</td>
											<td class="aui_main" style="width: 420px; height: 80px;">
												<div class="aui_content" style="padding: 20px;"></div>
											</td>
										</tr>
										<tr>
											<td colspan="2" class="aui_footer">
												<div class="aui_buttons"></div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</td>
						<td class="aui_e"></td>
					</tr>
					<tr>
						<td class="aui_sw"></td>
						<td class="aui_s"></td>
						<td class="aui_se" style="cursor: se-resize;"></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div id="container">
		<div class="header-wrapper">
			<div class="header-content cf com-width">
				<div class="header-lt fl">
					<span>服务热线：</span> <span class="header-tele">400-888-8888</span> <i
						class="header-line"></i> <a href="">帮助中心</a>
				</div>
				<div class="header-rt fr">
					<!-- 未登录 -->
					<!-- 已登录 -->
					<div class="header-login fl">
						<span>您好,${user.name}</span> <a href="index.jsp">安全退出</a>
					</div>
					<div class="header-icon fl">
						<a href="" target="_blank" class="header-app J_show"> <i
							class="span-icon"></i> <span>移动客户端</span>
							<div class="header-pic J_hover" style="display: none">
								<img src="images/erweima.jpg" widht="83" height="84" alt="移动客户端">
								<p>金融</p>
							</div>
						</a>
					</div>
					<div class="header-icon fl">
						<div class="header-wb span-icon J_show">
							<div class="header-pic J_hover" style="display: none">
								<img src="images/wb.jpg" widht="83" height="84" alt="服务号">
								<p>服务号</p>
							</div>
						</div>
					</div>
					<div class="header-icon fl">
						<div class="header-wx span-icon J_show">
							<div class="header-pic J_hover" style="display: none">
								<img src="images/wx_code_60f2369.png" widht="83" height="84"
									alt="公众号">
								<p>公众号</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="header-nav com-width cf">
				<div class="layout-wrapper fl">
					<a href="" class="logo-wrapper"> <img
						src="images/logo_c41f399.png" width="104" height="39" alt="金融"></a>
				</div>
				<ul class="header-list fr">
					<li class="active">
						<!-- 	<a href="index.html">首页</a> -->
					</li>
					<li class="account "><a href="javascript:void(0)"><span
							class="span-icon"></span></a></li>
				</ul>
			</div>
		</div>
		<div id="main">
			<div class="banner">
				<div class="com-width main-acc-box">
					<div class="main-account">
						<div class="acc-tp">上午好</div>
						<h2>尊敬的${user.name}</h2>
						<p>欢迎来到这里~</p>

						<form id="hidForm">
							<input id="userId" type="hidden" value="${user.user_id}" />
							<input id="money" type="hidden" value="${user.money}" />
							<input id="userName" type="hidden" value="${user.name}" />
						</form>
						<a href="javascript:void(0)" class="red-btn acc-btn"
							onclick="jumpToMe()">进入我的账户</a>
						<script type="text/javascript">
	    					function jumpToMe(){
	    						var id = $('#userId').val();
	    						var userName = $('#userName').val();
	    						 $.ajax({
	    							url:'${pageContext.request.contextPath}/ShowAssets',
	    							data:{user_id:id},
	    							dataType:"json",
	    							async: false,
	    							success:function(data){
	    								var sum = data[0];
	    								var interest = data[1];
	    								var userId = $('#userId').val();
	    								var money = $('#money').val();
	    								window.location.href="wd.jsp?sum="+sum+"&interest="+interest+"&user_id="+userId+"&money="+money+"&userName="+userName;
	    						
	    								
										
	    							}
	    						}); 
	    					}
	    				</script>
					</div>
				</div>
				<div class="swiper-container" id="jsBannerSwi">
					<div class="swiper-wrapper"
						style="width: 9515px; height: 366px; transform: translate3d(-3806px, 0px, 0px); transition-duration: 1s;">
						<div class="swiper-slide swiper-slide-duplicate"
							style="background-image: url(&quot;images/bg.jpg&quot;); width: 1903px; height: 366px;">
							<a href=":images/bg.jpg" class="banner-btn" target="_blank"></a>
						</div>
						<div class="swiper-slide"
							style="background-image: url(&quot;images/bg.jpg&quot;); width: 1903px; height: 366px;">
							<a href="s://mp.weixin.qq.com/s/jkisu-6i_Fx2rXDZUhwGSg"
								class="banner-btn" target="_blank"></a>
						</div>
						<div class="swiper-slide swiper-slide-visible swiper-slide-active"
							style="background-image: url(&quot;:images/bg.jpg&quot;); width: 1903px; height: 366px;">
							<a href="images/bg.jpg" class="banner-btn" target="_blank"></a>
						</div>
						<div class="swiper-slide"
							style="background-image: url(&quot;:images/bg.jpg&quot;); width: 1903px; height: 366px;">
							<a href="://jr.qianbao.com/common/appdownload" class="banner-btn"
								target="_blank"></a>
						</div>
						<div class="swiper-slide swiper-slide-duplicate"
							style="background-image: url(&quot;images/bg.jpg&quot;); width: 1903px; height: 366px;">
							<a href="s://mp.weixin.qq.com/s/jkisu-6i_Fx2rXDZUhwGSg"
								class="banner-btn" target="_blank"></a>
						</div>
					</div>
					<div class="pagination">
						<span class="swiper-pagination-switch"></span> <span
							class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
						<span class="swiper-pagination-switch"></span>
					</div>
				</div>
			</div>
			<div class="main-ct com-width">
				<div class="main-center main-rxb cf">
					<!-- <div class="main-ct-lt fl"><h3>日息宝</h3><div class="main-ct-tp">活期</div><ul class="main-ct-list"><li>每日返息</li><li>随时支取</li><li>方便快捷</li></ul><a href="://jr.qianbao.com/current/currentdetail" class="main-ct-btn">查看更多 <span class="home-sprite"></span></a></div><div class="main-ct-rt fl"><div class="main-rt-lt fl"><ul class="main-rt-list"><li class="cf"><div class="list-lt home-sprite fl"></div><div class="list-rt fl"><h4>11:00</h4><p>更新时间 (每日)</p></div></li><li class="cf"><div class="list-lt list-money home-sprite fl"></div><div class="list-rt fl"><h4>1元起投,方便快捷</h4><p>起投金额</p></div></li><li class="cf"><div class="list-lt list-sum home-sprite fl"></div><div class="list-rt fl"><h4>0.00元</h4><p>可加入金额</p></div></li></ul></div><div class="main-rt-rt fl"><div class="main-rt-num"><span>6.02</span> <i>%</i></div><p>七日预期年化</p> <a href="javascript:;" class="gray-btn1 cursor-no dis-btn">今日已满额</a> </div></div> -->
				</div>
				<div class="main-center main-yxlc cf">
					<div class="main-ct-lt fl">
						<h3>日息宝</h3>
						<ul class="main-ct-list">
							<li>分散投标</li>
							<li>节省时间</li>
							<li>提高效率</li>
						</ul>
						<a href="://jr.qianbao.com/financial_plan/financialday"
							class="main-ct-btn"> 查看更多 <span class="home-sprite"></span>
						</a>
					</div>

					<div class="main-ct-rt fl">
						<ul class="main-ct-lst cf">
							<c:forEach items="${list}" var="proList">
								<c:if test="${proList.type == '1'}">

									<input id="product_id_" type="hidden"
										value="${proList.product_id}" />
									<input id="product_amount" type="hidden" value="${proList.amount}">
									<li class="fl">
										<!-- <h3>日息宝C计划</h3> -->
										<h3 id="productName">${proList.product_name}</h3> <!-- 	<div class="main-lst-num">10.22 <i>%</i></div> -->
										<div class="main-lst-num">
											<span id="rate">${proList.rate}</span> <i>%</i>
										</div>
										<p>预期年化</p>
										<div class="main-num-box cf">
											<div class="main-num-lt fl">
												<span id="price">${proList.price}</span>
												<p>起投金额</p>
											</div>
											<div class="main-num-rt fr">
												<span id="month">${proList.month}个月</span>
												<p>项目期限</p>
											</div>
										</div> <a href="javascript:void(0)" class="main-btn border-btn"
										onclick="buyProduct(${proList.product_id},'${proList.product_name}','${proList.rate}','${proList.price}','${proList.month}','${proList.amount}')">立即加入</a>

									</li>
								</c:if>
							</c:forEach>
							<script>
						function buyProduct(product_id,name,rate,price,month,pro_amount){
    						var userName = $('#userName').val();
    						var money = $('#money').val();
    						var userId = $('#userId').val();
    						console.log(userId);
							window.location.href="xq.jsp?ProductId="+product_id+"&ProductName="+name+"&Rate="+rate+"&Price="+price+"&Month="+month+"&UserName="+userName+"&Money="+money+"&userId="+userId+"&Proamount="+pro_amount;
						}
					</script>
							<!-- <li class="fl">
					<h3>日息宝E计划</h3>
					<div class="main-lst-num">11.86 <i>%</i></div>
					<p>预期年化</p>
					<div class="main-num-box cf">
						<div class="main-num-lt fl">
							<span>100</span>
							<p>起投金额</p>
						</div>
						<div class="main-num-rt fr">
							<span>12个月</span>
							<p>项目期限</p>
						</div>
					</div>
					<a href="xq.html" class="main-btn border-btn">立即加入</a> 
				</li>  
				<li class="fl">
					<h3>日息宝D计划</h3>
					<div class="main-lst-num">11.2 <i>%</i></div>
					<p>预期年化</p>
					<div class="main-num-box cf">
						<div class="main-num-lt fl">
							<span>100</span>
							<p>起投金额</p>
						</div>
						<div class="main-num-rt fr">
							<span>6个月</span>
							<p>项目期限</p>
						</div>
					</div> 
					<a href="xq.html" class="main-btn border-btn">立即加入</a> 
				</li>  -->

						</ul>
					</div>
				</div>


				<div class="main-center main-yxb cf">
					<div class="main-ct-lt fl">
						<h3>月息宝</h3>
						<ul class="main-ct-list">
							<li>精挑细选</li>
							<li>随时加入</li>
							<li>项目多样</li>
						</ul>
						<a href="://jr.qianbao.com/financial_plan/financialmonth"
							class="main-ct-btn"> 查看更多 <span class="home-sprite"></span>
						</a>
					</div>
					<div class="main-ct-rt fl">
						<ul class="main-ct-lst cf">
							<c:forEach items="${list}" var="proList">
								<c:if test="${proList.type == '2'}">
									<li class="fl">
										<h3>${proList.product_name}</h3>
										<div class="main-lst-num">${proList.rate}<i>%</i>
										</div>
										<p>预期年化</p>
										<div class="main-num-box cf">
											<div class="main-num-lt fl">
												<span>${proList.price}</span>
												<p>起投金额</p>
											</div>
											<div class="main-num-rt fr">
												<span>${proList.month}个月</span>
												<p>项目期限</p>
											</div>
										</div> <a href="://jr.qianbao.com/financial_plan/detail_month/19"
										class="main-btn dis-btn">即将开放</a>
									</li>
								</c:if>
							</c:forEach>
							<!-- <li class="fl">
				<h3>月息宝G计划</h3>
				<div class="main-lst-num">10 <i>%</i></div>
				<p>预期年化</p>
				<div class="main-num-box cf">
					<div class="main-num-lt fl">
						<span>100</span>
						<p>起投金额</p>
					</div>
					<div class="main-num-rt fr">
						<span>18个月</span>
						<p>项目期限</p>
					</div>
				</div> 
				<a href="://jr.qianbao.com/financial_plan/detail_month/24" class="main-btn dis-btn">即将开放</a> 
			</li>  
			<li class="fl">
				<h3>月息宝F计划</h3>
				<div class="main-lst-num">9.7 <i>%</i></div>
					<p>预期年化</p>
					<div class="main-num-box cf">
						<div class="main-num-lt fl">
							<span>100</span>
							<p>起投金额</p>
						</div>
						<div class="main-num-rt fr">
							<span>15个月</span>
							<p>项目期限</p>
						</div>
					</div> 
				<a href="://jr.qianbao.com/financial_plan/detail_month/18" class="main-btn dis-btn">即将开放</a> 
			</li>          -->


						</ul>
					</div>
				</div>



				<div class="main-center main-jxxm cf">
					<div class="main-ct-lt fl">
						<h3>年息宝</h3>
						<ul class="main-ct-list">
							<li>精挑细选</li>
							<li>随时加入</li>
							<li>项目多样</li>
						</ul>
						<a href="://jr.qianbao.com/financial_plan/financialmonth"
							class="main-ct-btn"> 查看更多 <span class="home-sprite"></span>
						</a>
					</div>
					<div class="main-ct-rt fl">
						<ul class="main-ct-lst cf">
							<c:forEach items="${list}" var="proList">
								<c:if test="${proList.type == '2'}">
									<li class="fl">
										<h3>${proList.product_name}</h3>
										<div class="main-lst-num">${proList.rate}<i>%</i>
										</div>
										<p>预期年化</p>
										<div class="main-num-box cf">
											<div class="main-num-lt fl">
												<span>${proList.price}</span>
												<p>起投金额</p>
											</div>
											<div class="main-num-rt fr">
												<span>${proList.month}个月</span>
												<p>项目期限</p>
											</div>
										</div> <a href="://jr.qianbao.com/financial_plan/detail_month/19"
										class="main-btn dis-btn">即将开放</a>
									</li>
								</c:if>
							</c:forEach>
							<!-- <li class="fl">
				<h3>年息宝G计划</h3>
				<div class="main-lst-num">10 <i>%</i></div>
				<p>预期年化</p>
				<div class="main-num-box cf">
					<div class="main-num-lt fl">
						<span>100</span>
						<p>起投金额</p>
					</div>
					<div class="main-num-rt fr">
						<span>18个月</span>
						<p>项目期限</p>
					</div>
				</div> 
				<a href="://jr.qianbao.com/financial_plan/detail_month/24" class="main-btn dis-btn">即将开放</a> 
			</li>  
			<li class="fl">
				<h3>年息宝F计划</h3>
				<div class="main-lst-num">9.7 <i>%</i></div>
					<p>预期年化</p>
					<div class="main-num-box cf">
						<div class="main-num-lt fl">
							<span>100</span>
							<p>起投金额</p>
						</div>
						<div class="main-num-rt fr">
							<span>15个月</span>
							<p>项目期限</p>
						</div>
					</div> 
				<a href="://jr.qianbao.com/financial_plan/detail_month/18" class="main-btn dis-btn">即将开放</a> 
			</li>  -->
						</ul>
					</div>
				</div>

				<!-- <div class="main-center main-jxxm cf"><div class="main-ct-lt fl"><h3>年息宝</h3><ul class="main-ct-list"><li>分散投标</li><li>期限灵活</li><li>选择自由</li></ul><a href="://jr.qianbao.com/bid/lists" class="main-ct-btn">查看更多 <span class="home-sprite"></span></a></div><div class="main-ct-rt fl"><ul class="main-ct-lst cf"><li class="fl"><h3>期限12个月</h3><p class="jx-text">精选项目-18081608259期</p><div class="main-lst-num">11.86 <i>%</i></div><p>预期年化</p><div class="main-line-box"><div class="main-line-tip" style="left: 0%">0%</div><div class="main-line" style="width: 0%"></div></div>标状态 进行中<a href="://jr.qianbao.com/bid/bid_detail/1045463" class="main-btn border-btn">立即购买</a> </li><li class="fl"><h3>期限6个月</h3><p class="jx-text">精选项目-18081404106期</p><div class="main-lst-num">11.20 <i>%</i></div><p>预期年化</p><div class="main-line-box"><div class="main-line-tip" style="left: 7%">7%</div><div class="main-line" style="width: 7%"></div></div>标状态 进行中<a href="://jr.qianbao.com/bid/bid_detail/1045139" class="main-btn border-btn">立即购买</a> </li><li class="fl"><h3>期限1个月</h3><p class="jx-text">精选项目-18081021921期</p><div class="main-lst-num">9.08 <i>%</i></div><p>预期年化</p><div class="main-line-box"><div class="main-line-tip" style="left: 100%">100%</div><div class="main-line" style="width: 100%"></div></div>标状态 <a href="://jr.qianbao.com/bid/bid_detail/1044334" class="main-btn dis-btn">还款中</a> </li></ul></div></div> -->
			</div>

			<div class="main-ft">
				<div class="com-width">
					<div class="main-about-box">
						<div class="com-width main-about cf">
							<a href="://jr.qianbao.com/rdirect/depository"
								class="w370 fl bor-rt">
								<div class="about-icon1 about-icon fl"></div>
								<div class="fl">
									<h3>长治银行资金存管</h3>
									<span class="about-icon-rt">更多详情</span>
								</div>
							</a> <a href="://jr.qianbao.com/rdirect/aboutus"
								class="w407 fl bor-rt">
								<div class="about-icon2 about-icon fl"></div>
								<div class="fl">
									<h3>资产安全风控措施</h3>
									<span class="about-icon-rt">更多详情</span>
								</div>
							</a> <a href="://jr.qianbao.com/rdirect/asset" class="fl pl90">
								<div class="about-icon3 about-icon fl"></div>
								<div class="fl">
									<h3>公开透明信息披露</h3>
									<span class="about-icon-rt">更多详情</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-box">
				<div class="footer-top">
					<div class="footer-t-box com-width cf">
						<div class="footer-t-lt fl footer-line">
							<h3>服务热线</h3>
							<h4>400-618-6183</h4>
							<div class="footer-data">
								<span></span>9:00~21:00
							</div>
							<p class="footer-tip">市场有风险 投资需谨慎</p>
						</div>
						<div class="footer-t-rt fl">
							<img src="images/erweima.jpg" class="fl" alt="金融app" width="86"
								height="86">
							<div class="footer-t-down fl">
								<a target="_blank"
									href="s://itunes.apple.com/cn/app/hao-dai-bao/id828260089?mt=8">
									<div class="ios">iOS下载</div>
								</a> <a target="_blank"
									href="://sj.qq.com/myapp/detail.htm?apkName=com.haodaibao.android">
									<div class="android">Android下载</div>
								</a>
								<p>扫描下载APP</p>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-bm">
					<p>Copyright © 2017 版权所有 闽ICP备15025569号-89</p>
				</div>
			</div>
			<!--已锁定-->
			<div id="d-lock" class="hide">
				<div class="d-lock d-com-main">
					<div class="d-header">
						<h3>您的账户已被锁定</h3>
						<div class="d-close"></div>
					</div>
					<div class="d-pic"></div>
					<p class="d-text">
						请拨打客服热线400-618-6183<br>客服人员会及时帮助您解决问题
					</p>
					<a href="index.html" class="border-btn d-btn">返回首页</a>
				</div>
			</div>


			<script>
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();</script>
			<script>var _hmt = _hmt || [];
(function(){
    var hm = document.createElement("script");
    hm.src = "";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();</script>
			<script>(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = '';
    }
    else {
        bp.src = '';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();</script>
			<li id="goTop" class="go-top" style="display: list-item;"><span></span></li>
			</ul>
			<!-- 收益计算器 -->
			<script type="text/html" class="jsCalc"><div class="calc-investc jsCalcForm">
        <form action="" onsubmit="return false;" method="post" class="jsCalc">
            <ul class="calc-list cf">
                <li class="fl">
                    <div class="calc-item-lt">投资金额</div>
                    <div class="calc-item-rt"><input type="text" datatype="n" class="rechargeRule jsBuyMoney"><span>元</span></div>
                    <div class="jsInfo calc-info">输入范围：1-10000000（整数）</div>
                </li>
                <li class="fr">
                    <div class="calc-item-lt">项目期限</div>
                    <div class="calc-item-rt">
                        <input type="" datatype="n" class="qixian jsUnit1 jsInputUnit jsBorrowExpired">
                        <input type="" datatype="n" class="qixian jsUnit2 jsInputUnit" style="display:none">
                        <select id="calc-incomeType" class="select-sm jsBorrowExpiredUnit"  name="calc-incomeType">
                            <option value="2">月</option> 
                            <option value="1">日</option>
                        </select>
                    </div>
                    <div class="jsInfo yue calc-info">输入范围：1-36</div>
                    <div class="jsInfo ri calc-info">输入范围：1-365</div>
                </li>
                <li class="fl">
                    <div class="calc-item-lt">预期年化</div>
                    <div class="calc-item-rt"><input type="text" datatype="n" class="rechargeRule jsInterestRate"><span>%</span></div>
                    <div class="jsInfo calc-info">输入范围：1-100，至多保留2位小数</div>
                </li>
                <li class="fr">
                    <div class="calc-item-lt">收益方式</div>
                    <div class="calc-item-rt">
                        <select id="calc-incomeType " name="calc-incomeType" class="jsRepayType">
                            <option value="0" class="jsIncome1">按月等额本息</option> 
                            <option value="1">一次性还本息</option>
                            <option value="2">按月付息，到期还本</option>
                            <option value="3">每日返息，到期还本</option>
                        </select>
                    </div>
                </li>
            </ul>
            <div id="cal-resultc" class="calc-resultc hide">
                <div class="result-title">计算结果</div>
                <div class="result-col result-col1">
                    <div class="result-col-row1">
                        <span class="title principal-title">本息合计</span>
                        <span class="money jsBxhj"></span>
                    </div>
                    <div class="result-col-row2 jsLxText">每月回收利息0.30元</div>
                </div>
                <div class="result-col result-col2">
                    <div class="result-col-row1">
                        <span class="title interest-title">利息合计</span>
                        <span class="money jsLxhjCalc">0.11元</span>
                    </div>
                    <div class="result-col-row2">您将在<i class="jsBxDate"></i>后收回全部本息</div>
                </div>
            </div>
            <a href="javascript:;" class="cal-btn jsCalcBtn">开始计算</a>
        </form>
    </div>
</script>
			<script type="text/javascript"
				src="${pageContext.request.contextPath}/js/l_b9c612e.js"></script>
			<script type="text/javascript"
				src="${pageContext.request.contextPath}/js/c_33ae5bd.js"></script>
			<script type="text/javascript"
				src="${pageContext.request.contextPath}/js/home_851fac8.js"></script>
			<script type="text/javascript">require('common:static/widget/home/init');</script>
</body>
</html>