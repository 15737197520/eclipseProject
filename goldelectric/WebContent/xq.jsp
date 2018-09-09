<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
<link rel="icon" href="" type="/image/x-icon">
<link rel="shortcut icon" href="" type="/image/x-icon">
<script charset="utf-8" src="js/v.js"></script>
<script src="js/push.js"></script>
<script src="js/hm.js"></script>
<script>
	var API_ENV = 'production', API_SUCCESS = '0000', API_FAILURE = '9999', API_TIMEOUT = '9998', API_PWD = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7mvvUKmV13ByFNs3XooPlffwm/qrA4jNlAc8BgoPIvdTkRsZ50UVzDl3GZycCvaeN2OHgRv1pxU9Q2CBgt/4VLbtpEc/z+gL6K23TXM1Fg04Gg3ZnA5GiamqX2Hl47qfKJiVoZiWuDTMuqyNuKxHeZ+fQ7K3NBK8qcWjZF3rgswIDAQAB', VAR_PREFIX = 'qbjrPC';
	var version = '20171030', static_url = '/static', lib_url = '//lib01.haodaibao.com', module_name = 'Home', resthub_url = '', back_key = 'qbjrPCurl ';
</script>
<link rel="stylesheet" type="text/css" href="css/c_dc330a6.css">
<link rel="stylesheet" type="text/css" href="css/detail_day_af9f100.css">
<script src="${pageContext.request.contextPath}/js/jquery-1.12.4.js"></script>
<script type="text/javascript">
	$(
			function() {
<%//获取传过来的参数
			String ProductId = request.getParameter("ProductId");
			String ProductName = request.getParameter("ProductName");
			String Rate = request.getParameter("Rate");
			String Price = request.getParameter("Price");
			String Month = request.getParameter("Month");
			String UserName = request.getParameter("UserName");
			String UserId = request.getParameter("userId");
			String Money = request.getParameter("Money");
			String ProAmount = request.getParameter("Proamount");
			session.setAttribute("ProductId", ProductId);
			session.setAttribute("ProductName", ProductName);
			session.setAttribute("Rate", Rate);
			session.setAttribute("Price", Price);
			session.setAttribute("Month", Month);
			session.setAttribute("UserName", UserName);
			session.setAttribute("UserId", UserId);
			session.setAttribute("Money", Money);
			session.setAttribute("Proamount", ProAmount);%>
	})
</script>

</head>

<body>
	<input type="hidden" value="15" class="jsBidInput">
	<input type="hidden" value="每日返息，到期还本" class="jsRefundWay">
	<input type="hidden" value="3" class="jsInterestRule">
	<input type="hidden" value="2" class="jsPeriodUnit">
	<input type="hidden" value="3" class="jsPeriod">
	<input type="hidden" value="10.22" class="jsRateMax">
	<input type="hidden" value="10000" class="jsAmount">
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
						<span>您好,<%=UserName%></span> <a href="index.jsp">安全退出</a>
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
					<li class="active"><a href="javascript:void(0)"
						onclick="javascript :history.back(-1);">首页</a></li>
					<li class="account "><a href="wd.html"><span
							class="span-icon"></span>我的账户</a></li>
				</ul>
			</div>
		</div>
		<div id="main">
			<div class="hr-line"></div>
			<div class="com-width main-hd cf">
				<div class="fl">
					<a href="index.html">首页</a><i>></i> <a
						href="/financial_plan/financialday">日息宝</a><i>></i> <a
						href="javascript:;">详情</a>
				</div>
				<div class="fr">
					<p>市场有风险 投资需谨慎</p>
				</div>
			</div>
			<div class="main-banner">
				<div class="com-width main-pros cf">
					<div class="main-top-lt fl">
						<h3><%=ProductName%></h3>
						<div class="cf main-top-hd">
							<div class="main-lt-num fl">
								<p>预期年化</p>
								<h4>
									<span id="Rate"><%=Rate%></span><i>%</i>
								</h4>
							</div>
							<div class="main-lt-t fl">
								<div class="main-t-top cf">
									<div class="fl">
										<p>
											项目期限<span><%=Month%></span>
										</p>
									</div>
									<div class="fl main-t-line"></div>
									<div class="fl">
										<p>
											起投金额<span id="price"><%=Price%></span>元
										</p>
									</div>
								</div>
								<!-- <div class="main-t-bm">
                                    <p>项目总额<span>100,000,000.00元</span></p>
                                </div> -->
							</div>
						</div>
						<p>计息方式：每日返息，到期还本</p>
						<div class="cf main-bm-box">
							<div class="fl main-bm-lt">
								投资10000元，3个月后到期预计可赚 <i class="jsLxhj"></i>元
							</div>
							<div class="fr">
								<a href="javascript:;" class="jsJisuan"><span></span>收益计算器</a>
							</div>
						</div>
					</div>
					<div class="main-top-rt fr">
						<!-- 未登录 -->
						<div class="show">
							<form action="" onsubmit="return false" method="post"
								class="goLogin">
								<div class="main-rt-tp">
									<div class="cf hide">
										<div class="fl main-l-txt">剩余可投金额</div>
										<div class="fl">
											<span>100,000,000.00元</span>
										</div>
									</div>
									<div class="cf mb0">
										<div class="fl main-l-txt">
											您的账户余额:<span id="money"><%=Money%></span>
										</div>
										<div class="fl">
											<a href="JavaScript:void(0);" class="jsGoLogin">${user.name}</a>
										</div>
									</div>
								</div>
								<div class="main-rt-tit">投资金额</div>
								<div class="cf main-inpt">
									<div class="fl main-inpt-t">
										<input id="RMB" type="text" ignore="ignore" name="money"
											class="jsInvestmentAmount" placeholder="请输入加入金额">
									</div>
									<div class="fl">
										<input type="submit" class="sub-btn" value="立即加入"
											onclick="checkMoney()">
									</div>

									<input type="hidden" id="ProductId" value="<%=ProductId%>" />
									<input type="hidden" id="UserId" value="<%=UserId%>" /> <input
										type="hidden" id="ProAmount" value="<%=ProAmount%>" />
									<script type="text/javascript">
										function checkMoney() {
											
											var money = $('#money').html();
											var price = $('#price').html();
											var rate = $('#Rate').html();
											var rmb = $('#RMB').val();
											var product_id = $('#ProductId')
													.val();
											var user_id = $('#UserId').val();
											var ProAmount = $('#ProAmount').val();

											//console.log(user_id,rate,product_id,money,price,rmb,  money%price);
											if (rmb > money) {
												alert("输入金额不能大于账户余额！");
												$('#RMB').val('');
											}
											if (rmb == null || rmb == '') {
												alert("请输入金额！");
											}
											if (rmb % price != 0) {
												alert("输入金额只能是" + price + "的整数");
											} else {
												var price = $('#price').html();
												var amount = rmb / price;
												$
														.ajax({
															url : '${pageContext.request.contextPath}/BuyProduct',
															data : {
																'total' : rmb,
																'user_id' : user_id,
																'product_id' : product_id,
																'price' : price,
																'amount' : amount,
																'rate' : rate,
																'ProAmount' : ProAmount,
															},
															success : function(
																	data) {
																console
																		.log(111111);
																console
																		.log(data);
																var newMoney = money
																		- rmb;
																$('#RMB').val(
																		"");
																document
																		.getElementById('money').innerHTML = newMoney;
															}
														});
											}
										}
									</script>
									<div class="customForm"></div>
								</div>
								<div class="form-check">
									<input type="checkbox" id="check2" checked="checked"
										class="protocol"> <label for="check2"></label> <span
										class="label-tip">我已经同意 <a
										href="/agreement/plan_agreement_day/15" target="_blank">《日息宝计划协议》</a>、
										<a href="/agreement/static_borrowing_contract/15/3"
										target="_blank">《借款合同》</a>和 <a href="/agreement/riskTip"
										target="_blank">《风险提示书》</a>
									</span> <span class="form-tip-text Validform_checktip"></span>
								</div>
								<a href="javascript:;" class="go-login jsGoLogin">登录后才能投资&nbsp;去登录&nbsp;&nbsp;></a>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="main-ct">
				<div class="main-ct-top cf">
					<div class="main-ct-lt fl">
						<div class="icon1"></div>
						<p>加入日息宝</p>
					</div>
					<div class="main-ct-c fr">
						<div class="icon2"></div>
						<p>开始计息</p>
					</div>
					<div class="main-line"></div>
					<div class="main-ct-rt">
						<div class="icon3"></div>
						<p>24小时匹配成功</p>
					</div>
					<div class="main-line"></div>
				</div>
				<div class="main-ft com-width">
					<div class="main-nav jsNav cf">
						<div class="fl mr96 active">计划详情</div>
						<div class="fl">加入记录</div>
					</div>
					<div class="main-ft-ct jsNavCt">
						<div class="main-text">
							<div class="main-t-ct">
								<div class="cf">
									<div class="fl main-t-lt">项目名称</div>
									<div class="main-t-rt">
										<p>日息宝C计划</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">项目介绍</div>
									<div class="main-t-rt">
										<p>日息宝计划是金融平台为方便用户投资推出的标准化投资理财工具，用户加入日息宝计划后，平台立即启动优先匹配投标，在用户认可的标的范围内，对符合要求的标的进行优先自动投标，提高了用户投资的速度和灵活度，及时盘活用户资金，更好的满足用户多样化的理财需求。预期收益不等于实际收益，投资人需自行承担资金投资的风险与责任。</p>
									</div>
								</div>
							</div>
							<div class="main-t-ct">
								<div class="cf">
									<div class="fl main-t-lt">预期年化利率</div>
									<div class="main-t-rt">
										<p>10.22%</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">投资期限</div>
									<div class="main-t-rt">
										<p>3个月</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">还款方式</div>
									<div class="main-t-rt">
										<p>每日返息，到期还本</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">投标范围</div>
									<div class="main-t-rt">
										<p>车辆抵押借款、个人日常消费借款、小企业信用贷</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">加入条件</div>
									<div class="main-t-rt">
										<p>100元起投，按100元的整数倍递增</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">起息日</div>
									<div class="main-t-rt">
										<p>匹配资金进入融资人平台账户次日起息</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">退出方式</div>
									<div class="main-t-rt">
										<p>到期自动退出</p>
									</div>
								</div>
							</div>
							<div class="main-t-ct broder-none">
								<div class="cf">
									<div class="fl main-t-lt">退出计划</div>
									<div class="main-t-rt">
										<p>自用户加入当期日息宝计划起，加入计划的资金将被冻结在用户本人的账户中；
											若24小时内系统未将用户加入计划的资金全额投向融资项目（融资项目数量大于等于1个，根据用户加入计划的金额不同而分散投标），则未投资出去的资金将解除冻结并由用户自由支配。</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">费用</div>
									<div class="main-t-rt">
										<p>暂不收取服务费</p>
									</div>
								</div>
								<div class="cf">
									<div class="fl main-t-lt">保障措施</div>
									<div class="main-t-rt">
										<p>系统安全，日息宝计划采用业界先进的加密技术，用户的注册、账户收支信息都已进行高强度的加密处理，不会被不法分子窃取；</p>
										<p>信息安全，金融严格遵守国家法律法规，对用户的隐私信息进行严格的保护，绝不会将您的账户信息、银行信息以任何形式透露给第三方。</p>
									</div>
								</div>
							</div>
						</div>
						<div class="main-list jsList hide"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/html" class="jsSuccess">
			<div class="succ-ct">
            <div class="succ-img"></div>
            <div class="succ-t">成功加入<i class="jsMoneySucc"></i>元</div>
            <p>我们会尽快帮您匹配优质项目，若24小时内<br>没有匹配成功将退回资金至您的账户中。</p>
            <a href="/financial_plan/financialday" class="succ-btn">返回计划列表</a>
            <a href="/" class="go-link">先去随便逛逛</a>
        </div></script>
	<script type="text/html" id="listHtml">{{if list.length>0}}
        <div class="main-lst-top cf">
            <div class="fl w190">投资人</div>
            <div class="fl w280">投资金额(元)</div>
            <div class="fl w380">投资时间</div>
        </div>
        <div class="main-lst-s ">
            {{each list value index}}
                <div class="main-lst-bm cf">
                    <div class="fl w190">{{value.uname}}</div>
                    <div class="fl w280">{{value.amount}}</div>
                    <div class="fl w380">{{value.createDate | dateFormat 'yyyy-MM-dd hh:mm'}}</div>
                </div>
            {{/each}}
        </div>
        {{else}}
        <div class="nodata">
            <div class="nodata-pic"></div>
            <p>暂无数据</p>
        </div>
        {{/if}}</script>
	<script type="text/html" class="jsCoupon" id="couponHtml"><ul class="coupon-list">
            {{each list value index}}
            {{if value.resourceType == "101"}}
            <li class="fxq" data-id="{{value.resourceCode}}" data-resourceAmount="{{value.resourceAmount/100}}" data-limitAmount="{{value.limitAmount/100}}">
            {{else}}
            <li class="jxq" data-id="{{value.resourceCode}}" data-resourceAmount="{{value.resourceAmount}}" data-limitAmount="{{value.limitAmount/100}}">
            {{/if}}
                <div class="fl">
                    <div class="counpu-top cf">
                        {{if value.resourceType == '101'}}
                        <div class="counpu-t-lt fl"><span>￥{{value.resourceAmount/100}}</span></div>
                        {{else}}
                        <div class="counpu-t-lt fl"><span>{{value.resourceAmount/100 | toFix}}</span><span class="counpu-sm">%</span></div>
                        {{/if}}
                        <div class="counpu-t-rt fl">
                            <div class="counpu-text"><span class="counpu-btn">{{value.resourceTypeDes}}</span><span>{{value.resourceDes}}</span></div>
                            <div>
                                <p>有效期：{{value.fromTime | dateFormat 'yyyy.MM.dd'}}-{{value.thruTime | dateFormat 'yyyy.MM.dd'}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="counpu-bm">
                        <div class="counpu-bm-text">
                            <p class="text-overflow jsTextOverFlow">使用规则:{{value.resourceProperties}}</p>
                        </div>
                    </div>
                </div>
                <div class="coupon-select hide"></div>
                <div class="coupon-open"></div>
            </li>
            {{/each}}
        </ul>
        <a href="javascript:;" class="select-btn jsCouponBtnActive">确定</a></script>
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
				<!--<div class="footer-t-ct fl footer-line">
                <ul class="footer-list fl">
                    <li><h3><a class=" cursor-no" href="javascript:;">关于我们</a></h3></li>
                    <li><a class=" cursor-no" href="javascript:;">基本信息</a></li>
                    <li><a class=" cursor-no" href="javascript:;">资质荣誉</a></li>
                    <li><a class=" cursor-no" href="javascript:;">公司动态</a></li>
                </ul>
                <ul class="footer-list fl">
                    <li><h3><a class=" cursor-no" href="javascript:;">理财频道</a></h3></li>
                    <li><a class="" href="/financial_plan/financialday"> 日息宝计划</a></li>
                    <li><a class="" href="/financial_plan/financialmonth">月息宝计划</a></li>
                    <li><a class="" href="/current/currentdetail">活期</a></li>
                    <li><a class="" href="/bid/lists">散标</a></li>
                </ul>
                <ul class="footer-list fl">
                    <li><h3><a href="/home/safe">保障措施</a></h3></li>
                    <li><a class=" cursor-no" href="javascript:;">风控信息</a></li>
                    <li><a class=" cursor-no" href="javascript:;">教育专栏</a></li>
                </ul>
                <ul class="footer-list footer-last fl">
                    <li><h3><a class=" cursor-no" href="javascript:;">帮助中心</a></h3></li>
                    <li><a class=" cursor-no" href="javascript:;">项目介绍</a></li>
                    <li><a class=" cursor-no" href="javascript:;">常见问题</a></li>
                </ul>
            </div>-->
				<div class="footer-t-rt fl">
					<img src="images/erweima.jpg" class="fl" alt="金融app" width="86"
						height="86">
					<div class="footer-t-down fl">
						<a target="_blank" href=""><div class="ios">iOS下载</div></a> <a
							target="_blank" href=""><div class="android">Android下载</div></a>
						<p>扫描下载金融APP</p>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bm">
			<p>Copyright © 2017 版权所有 闽ICP备15025661号-3</p>
			<!--<div class="footer-logo">
            <a href="javascript:;" class="mr10">
                <img src="static/images/common/cert.png" alt="">
            </a>
            <a href="javascript:;" class="mr20">
                <img src="static/images/common/ICPlev1.png" alt="">
            </a>
            <a href="javascript:;" class="mr10">
                <img src="static/images/common/cnnic.png" alt="">
            </a>
            <a href="javascript:;">
                <img src="static/images/common/safe.png" alt="">
            </a>
        </div>-->
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
		})();
	</script>
	<script>
		var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();
	</script>
	<script>
		(function() {
			var bp = document.createElement('script');
			var curProtocol = window.location.protocol.split(':')[0];
			if (curProtocol === 'https') {
				bp.src = '';
			} else {
				bp.src = '';
			}
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(bp, s);
		})();
	</script>
	<!-- 
<ul class="fixed-right" id="J_fixed"><li class="fix-jisuan jsJisuan"><span></span><div class="fixe-t hide">计算<br>收益</div></li><li class="fix-kf bor-t"><a id="jsQQKf" href="/help/index"><span></span><div class="fixe-t hide">在线<br>客服</div></a></li><li class="fix-code J_show"><span></span><div class="fixe-t hide">下载<br>APP</div><div class="fix-pic J_hover" style="display: none"><img src="/pkg/images/common/erweima.jpg" widht="120" height="122" alt="下载"><p>金融APP下载</p></div></li> -->

	<li id="goTop" class="go-top" style="display: none"><span></span></li>
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
    </div></script>
	<script type="text/javascript" src="/pkg/l_b9c612e.js"></script>
	<script type="text/javascript" src="/pkg/c_33ae5bd.js"></script>
	<script type="text/javascript" src="/pkg/js/detail_day_479aa42.js"></script>
	<script type="text/javascript">
		require('common:static/widget/financial_plan_detail_day/init');
	</script>
</body>
</html>