<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="UTF-8">
	<title>我的</title>
	<meta name="author" content="zhaowei">
	<meta name="renderer" content="webkit">
	<meta name="keywords" content="P2P,理财,投资,安全保障 ,本息 ,金融 ,互联网 ,借款, 收益, 贷款、">
	<meta name="description" content="金融是A股上市公司奥马电器（股票代码：002668）旗下平台，专注于金融科技领域的技术创新与发展，为您提供专业的金融服务。">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="icon" href="images/favicon_8f6562a.ico" type="/image/x-icon">
	<link rel="shortcut icon" href="images/favicon_8f6562a.ico" type="/image/x-icon"><script>var API_ENV = 'production',
	API_SUCCESS = '0000',
	API_FAILURE = '9999',
	API_TIMEOUT = '9998',
	API_PWD = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7mvvUKmV13ByFNs3XooPlffwm/qrA4jNlAc8BgoPIvdTkRsZ50UVzDl3GZycCvaeN2OHgRv1pxU9Q2CBgt/4VLbtpEc/z+gL6K23TXM1Fg04Gg3ZnA5GiamqX2Hl47qfKJiVoZiWuDTMuqyNuKxHeZ+fQ7K3NBK8qcWjZF3rgswIDAQAB',
	VAR_PREFIX ='qbjrPC';
	var version = '20171030',
	static_url = '/static',
	lib_url = '//lib01.haodaibao.com',
	module_name = 'my_info_total_assets',
	resthub_url = 'http://apis.qianbao.com',
	back_key = 'qbjrPCurl ';
var QB_OC = {"api_env":"production","api_success":"0000","api_failure":"9999","api_timeout":"9998","api_pwd":"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7mvvUKmV13ByFNs3XooPlffwm\/qrA4jNlAc8BgoPIvdTkRsZ50UVzDl3GZycCvaeN2OHgRv1pxU9Q2CBgt\/4VLbtpEc\/z+gL6K23TXM1Fg04Gg3ZnA5GiamqX2Hl47qfKJiVoZiWuDTMuqyNuKxHeZ+fQ7K3NBK8qcWjZF3rgswIDAQAB","api_h5_bridge_app":"9200","version":"20171030","static_url":"\/static","lib_url":"\/\/lib01.haodaibao.com","resthub_url":"http:\/\/apis.qianbao.com","module_name":"my_info_total_assets","is_new_interaction":false,"is_app":0,"is_login":1,"login_url":"\/login\/index?qbjrPCurl=%2Fmy%2Finfo%2Ftotal_assets","platform":"hdb","source":"h5","wx":null,"appversion":0,"var_prefix":"qbjrPC","var_prefix_url":"qbjrPCurl"};</script>    <link rel="stylesheet" type="text/css" href="css/c_dc330a6.css" />
<link rel="stylesheet" type="text/css" href="css/__0a1b256.css" />


  <script src="${pageContext.request.contextPath}/js/jquery-1.12.4.js"></script>
<script type="text/javascript">
$(function () {
	<% //获取传过来的参数
		String sum = request.getParameter("sum");
		String interest = request.getParameter("interest");
		String user_id = request.getParameter("user_id");
		String money = request.getParameter("money");
		String name = request.getParameter("userName");
		session.setAttribute("sum",sum);  
        session.setAttribute("interest",interest);
        session.setAttribute("user_id",user_id);  
        session.setAttribute("money",money);  
        session.setAttribute("name",name);  
        
	%>	

})

</script>







</head>
<body>
	<div id="container">
		<div class="header-wrapper">
			<div class="header-content cf com-width">
				<div class="header-lt fl">
					<span>服务热线：</span>
					<span class="header-tele">400-888-8888</span>
					<i class="header-line"></i>
					<a href="">帮助中心</a>
				</div>
				<div class="header-rt fr"><!-- 未登录 --> <!-- 已登录 -->
					<div class="header-login fl">
						<span>您好,${name}</span>
						<a href="index.jsp">安全退出</a>
					</div>
					<div class="header-icon fl">
						<a href="" target="_blank" class="header-app J_show">
							<i class="span-icon"></i><span>移动客户端</span>
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
								<img src="images/wx_code_60f2369.png" widht="83" height="84" alt="公众号">
								<p>公众号</p>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div class="header-nav com-width cf">
					<div class="layout-wrapper fl">
						<a href="" class="logo-wrapper">
							<img src="images/logo_c41f399.png" width="104" height="39" alt="金融">
						</a>
					</div>
						<ul class="header-list fr">
							<li class="active">
								<a href="javascript:void(0)" onclick="javascript :history.back(-1);">首页</a>
							</li>
							<li class="account ">
								<a href="javascript:void(0)" >
									<span class="span-icon"></span>我的账户
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div id="main" class="com-width cf mt10"><div id="main-cont"><div class="main-left fl"><ul class="main-lt-list"><li class="main-lt-cur"><h3><span class="left-icon"></span>我的账户</h3><ul class="main-sm-list" id="J-leftList"><li class="active"><a href="/my/info/total_assets">资产总览</a></li><li class="">
				<a data-val="realname" data-text="recharge" href="javascript:void(0)">我要充值</a></li>
				<li class=""><a data-val="realname" data-text="withdraw" href="javascript:void(0)">我要提现</a></li><li class=""></li></ul></li>

<!-- 

<li class="main-lt-fina"><h3><span class="left-icon"></span>理财管理</h3><ul class="main-sm-list"><li class=""><a href="/my/financial_management/day">日息宝计划</a></li><li class=""><a href="/my/financial_management/month">月息宝计划</a></li><li class=""><a href="/my/financial_management/current">活期</a></li><li class=""><a href="/my/financial_management/bid">散标</a></li></ul></li><li class="main-lt-core"><h3><span class="left-icon"></span>个人中心</h3><ul class="main-sm-list"><li><a href="javascript:;">自动投标设置</a></li><li class=""><a href="/my/info/usersafe">安全管理</a></li>


	<li class=" notice"><a href="/notice/notices">消息中心</a></li></ul></li> -->
</ul></div>

<!--未实名--><div id="d-real" class="hide"><div class="d-real-main d-com-main"><div class="d-header"><h3>安全提示</h3><div class="d-close"></div></div><div class="d-pic"></div><p class="d-text">您还未进行实名认证，仅身份信息填写并且审核，<br>并绑卡通过用户才可以进行充值。</p><a href="/my/realname/certification" class="border-btn d-btn">去实名</a></div></div><!-- 实名认证中 --><div id="d-realing" class="hide"><div class="d-realing d-com-main"><div class="d-header"><h3>安全提示</h3><div class="d-close"></div></div><div class="d-pic"></div><p class="d-text">您的实名信息正在审核中...<br>如需帮助拨打 400-618-6183。</p><a href="index.html" class="border-btn d-btn">返回首页</a></div></div><!--未绑卡--><div id="d-bank" class="hide"><div class="d-bank d-com-main"><div class="d-header"><h3>安全提示</h3><div class="d-close"></div></div><div class="d-pic"></div><p class="d-text">您还未进行绑卡认证，绑卡通过审核验证<br>用户才可以进行充值。</p><a href="/my/bankcard/bindcard?qbjrPCurl=%2Fmy%2Finfo" class="border-btn d-btn">去绑卡</a></div></div>

<div class="main-rt fl" id="main-right">
<!-- 右侧内容 -->
	<div class="accountT">
		<div class="portrait fl"></div>
			<div class="message">
				<p class="f18">${name}<span class="f16">&nbsp;&nbsp;&nbsp;&nbsp;下午好</span></p>
				<!--<p class="f12">上次登录时间  2017-04-28  13:00</p>-->
			</div>
			<div class="iconW">
				<ul class="cf">
					<li class="ico1 J_show">
					<!-- 手机已经验证-->
						<div class="icon-pop J-width J_hover" style="display:none">手机已验证</div>
					</li>
					<!--<li class="ico2 no-set J_show">--><!--&lt;!&ndash; 邮箱已经验证&ndash;&gt;--><!--<div class="icon-pop J-width J_hover" style="display: none;">邮箱已设置</div>--><!--&lt;!&ndash; 邮箱未认证 &ndash;&gt;--><!--<div class="icon-pop J-width J_hover" style="display: none;">完成邮箱设置使账户更安全，<a href="javascript:;" class="blue">去验证></a></div>--><!--</li>--> 
					</li>
					<li class="ico3 no-set J_show">
					<!-- 未实名 -->
						<div class="icon-pop J-width J_hover" style="display: none">还未进行实名认证，认证可投资，
							<a href="/my/realname/certification" class="blue">去认证></a>
						</div>
					</li>
					</li>
					<li class="ico4 J_show no-set">
					<!-- 未绑卡 -->
						<div class="icon-pop J-width J_hover" style="display: none">还未进行绑定银行卡，绑定用于提现，
							<a data-val="realname" data-text="bank" href="/my/bankcard/bindcard" class="blue jsBank queryfirstPay">去绑定></a>
						</div>
					</li> 
					</li>
					<li class="ico5 J_show no-set">
					<!-- 未设置密码 -->
						<div class="icon-pop J-width J_hover" style="display: none">完成交易密码设置用户提现，
							<a href="/my/password/settradepwd?qbjrPCurl=%2Fmy%2Finfo%2Ftotal_assets" class="blue">去设置></a>
						</div>
					</li>
				</ul>
				<div class="f14">安全等级：  <span class="color3">弱&nbsp;&nbsp;</span>
					<a href="javascript:void(0)" class="blue">立即提升></a> 
				</div>
			</div>
			<input id="user_id" type="hidden" value="<%=user_id %>"/>
				<a class="cash queryfirstPay" data-val="realname" data-text="withdraw" href="javascript:void(0)" onclick="moneyAbout('cut')">提现</a> 
				<a class="pay queryfirstPay" data-val="realname" data-text="recharge" href="javascript:void(0)" onclick="moneyAbout('add')">充值</a> 
				<a href="/my/coupon/index" class="coupon"> <i class="couponN">7</i> </a>
				<script type="text/javascript">
				function moneyAbout(name){
					var add,cut;//对应充值和提现
					var money;//定义接收页面传入金额的变量
					var state;//定义状态  区分是充值还是提现
					var user_id=$('#user_id').val();
					console.log(user_id);
					if(name=="add"){
						add=prompt("请输入充值金额");
						money = parseInt(add);
						console.log(money);
						state=1;
					}
					if(name=="cut"){
						cut=prompt("请输入提现金额"); 
						money = parseInt(cut);
						console.log(money);
						state=2;
					}
					if(user_id != null && money.length >0 && state != null){
						$.ajax({
							url: '${pageContext.request.contextPath}/MoneyService',
							data: {'user_id':user_id,'money':money,'state':state},
							success: function(data){
								if(data=="操作成功"){
									var qian = $('#money').html();
									var balance = qian+money;
									document.getElementById("money").innerHTML=balance;
								}
							}
						});
					}
				}
				</script>
				
		</div>
			<h3 class="accountH">账户总览</h3>
			<ul class="accountC">
				<li class="property">
					<div class="cf"><div class="propertyH">总资产</div>
						<div class="propertyT">¥<%=sum %></div>
					</div>
					<div class="propertyChart" id="J_chart1"></div>
					<ul class="propertyList" id="J_list1">
						<li class="blue" data-charts="0">
							<i class="square blue_1"></i>可用余额
							<span id="money" class="balance">${money}</span>
						</li>
						<li data-charts="0">
							<i class="square blue_2"></i><span class="properyW">日息宝金额</span>
							<span class="currentBalance">¥0.00</span>
						</li>
						<li data-charts="0">
							<i class="square blue_3"></i><span class="properyW">待收本金</span>
							<span class="collectedAmount">¥0.00</span>
						</li>
						<li data-charts="0">
							<i class="square blue_4"></i><span class="properyW">待收利息</span>
							<span class="collectedInterest">¥0.00</span>
						</li>
						<li data-charts="0">
							<i class="square blue_5"></i><span class="properyW">冻结金额</span>
							<span class="frozenAmount">¥0.00</span>
						</li>
						</ul>
							</li>
								<li class="spacer"></li>
								<li class="interest">
								<div class="cf"><div class="propertyH">总利息</div>
								<div class="propertyT">¥<%=interest %></div>
								</div><div class="propertyChart" id="J_chart2"></div>
									<ul class="propertyList" id="J_list2">
										<li data-charts="0">
											<i class="square red"></i>已赚利息&nbsp;&nbsp;&nbsp;&nbsp;¥0.00</li>
											<li data-charts="0"><i class="square orange"></i>待赚利息&nbsp;&nbsp;&nbsp;&nbsp;¥0.00
											</li>
									</ul>
								</li>
								</ul><h3 class="accountH manageH">理财管理</h3><ul class="manageWrap clearfix cf"><li class="rixibao"><div class="manage-top"><div class="manage-tit"><h3>日息宝计划</h3><div class="J_show note"><div class="J_hover total-mask total-big" style="display: none"><ul><li><h3>投资总额：0.00元</h3><p>所有投资项目的本金总和</p></li><li><h3>总利息：0.00元</h3><p>所有投资项目的利息总和，包含待收和已收</p></li><!-- <li>
                                                <h3>加权收益率：0</h3>
                                                <p>投资项目净收益之和与项目投资总额的比率。</p>
                                            </li> --><li><h3>项目数量：0</h3><p>所有投资项目的数量</p></li></ul></div></div></div><div class="manage-num"><div class="cf"><div class="fl">投资总额</div><div class="fr">0.00元</div></div><div class="cf"><div class="fl">总利息</div><div class="fr">0.00元</div></div></div></div><div class="manage-bm cf"><!-- <div class="fl manage-bm-lt">
                                <h4>0%</h4>
                                <p>加权收益率</p>
                            </div> --><div class="manage-bm-rt"><p>项目数量</p><span class="blue">0</span></div></div></li> <li class="yuexibao"><div class="manage-top"><div class="manage-tit"><h3>月息宝计划</h3><div class="J_show note"><div class="J_hover total-mask total-big" style="display: none"><ul><li><h3>投资总额：0.00元</h3><p>所有投资项目的本金总和</p></li><li><h3>总利息：0.00元</h3><p>所有投资项目的利息总和，包含待收和已收</p></li><!-- <li>
                                                <h3>加权收益率：0</h3>
                                                <p>投资项目净收益之和与项目投资总额的比率。</p>
                                            </li> --><li><h3>项目数量：0</h3><p>所有投资项目的数量</p></li></ul></div></div></div><div class="manage-num"><div class="cf"><div class="fl">投资总额</div><div class="fr">0.00元</div></div><div class="cf"><div class="fl">总利息</div><div class="fr">0.00元</div></div></div></div><div class="manage-bm cf"><!-- <div class="fl manage-bm-lt">
                                <h4>0%</h4>
                                <p>加权收益率</p>
                            </div> --><div class="manage-bm-rt"><p>项目数量</p><span class="blue">0</span></div></div></li> <li class="huoqi"><div class="manage-top"><div class="manage-tit"><h3>活期</h3><div class="J_show note"><div class="J_hover total-mask total-big" style="display: none"><ul><li><h3>总金额：0.00元</h3><p>当前活期账户总金额</p></li><li><h3>总利息：0.00元</h3><p>所有投资项目的利息总和，包含待收和已收</p></li><!-- <li>
                                                <h3>加权收益率：6.02</h3>
                                                <p>投资项目净收益之和与项目总金额的比率。</p>
                                            </li> --><li><h3>项目数量：0</h3><p>所有投资项目的数量</p></li></ul></div></div></div><div class="manage-num"><div class="cf"><div class="fl">总金额</div><div class="fr">0.00元</div></div><div class="cf"><div class="fl">总利息</div><div class="fr">0.00元</div></div></div></div><div class="manage-bm cf"><!-- <div class="fl manage-bm-lt">
                                <h4>6.02%</h4>
                                <p>加权收益率</p>
                            </div> --><div class="manage-bm-rt"><p>项目数量</p><span class="blue">0</span></div></div></li> <li class="sanbiao"><div class="manage-top"><div class="manage-tit"><h3>散标</h3><div class="J_show note"><div class="J_hover total-mask total-big" style="display: none"><ul><li><h3>投资总额：0.00元</h3><p>所有投资项目的本金总和</p></li><li><h3>总利息：${sum2}元</h3><p>所有投资项目的利息总和，包含待收和已收</p></li><li><h3>项目数量：0</h3><p>所有投资项目的数量</p></li></ul></div></div></div><div class="manage-num"><div class="cf"><div class="fl">投资总额</div><div class="fr">0.00元</div></div><div class="cf"><div class="fl">总利息</div><div class="fr">0.00元</div></div></div></div><div class="manage-bm cf"><div class="manage-bm-rt"><p>项目数量</p><span class="blue">0</span></div></div></li></ul></div></div></div></div>

                            <div class="footer-box"><div class="footer-top"><div class="footer-t-box com-width cf"><div class="footer-t-lt fl footer-line"><h3>服务热线</h3><h4>400-618-6183</h4><div class="footer-data"><span></span>9:00~21:00</div><p class="footer-tip">市场有风险 投资需谨慎</p></div><div class="footer-t-rt fl"><img src="images/erweima.jpg" class="fl" alt="金融app" width="86" height="86"><div class="footer-t-down fl"><a target="_blank" href="itunes.apple.com/cn/app/hao-dai-bao/id828260089?mt=8"><div class="ios">iOS下载</div></a> <a target="_blank" href="http://sj.qq.com/myapp/detail.htm?apkName=com.haodaibao.android"><div class="android">Android下载</div></a><p>扫描下载金融APP</p></div></div></div></div><div class="footer-bm"><p>Copyright © 2017 版权所有 闽ICP备15025259号-5</p></div></div><!--已锁定--><div id="d-lock" class="hide"><div class="d-lock d-com-main"><div class="d-header"><h3>您的账户已被锁定</h3><div class="d-close"></div></div><div class="d-pic"></div><p class="d-text">请拨打客服热线400-618-6183<br>客服人员会及时帮助您解决问题</p><a href="/" class="border-btn d-btn">返回首页</a></div></div>
                            <script>
                            	var _hmt = _hmt || [];
                            	(function() {
                            		var hm = document.createElement("script");
                            		hm.src = "hm.baidu.com/hm.js?f9775cbfa48720ae20ad3787f7a34771";
                            		var s = document.getElementsByTagName("script")[0];
                            		s.parentNode.insertBefore(hm, s);
                            	})();</script><script>var _hmt = _hmt || [];
                            	(function(){
                            		var hm = document.createElement("script");
                            		hm.src = "hm.baidu.com/hm.js?fe96e5adac110d3c0c401fc70cffe5d7";
                            		var s = document.getElementsByTagName("script")[0];
                            		s.parentNode.insertBefore(hm, s);
                            	})();</script><script>(function(){
                            		var bp = document.createElement('script');
                            		var curProtocol = window.location.protocol.split(':')[0];
                            		if (curProtocol === 'https') {
                            			bp.src = 'zz.bdstatic.com/linksubmit/push.js';
                            		}
                            		else {
                            			bp.src = 'http://push.zhanzhang.baidu.com/push.js';
                            		}
                            		var s = document.getElementsByTagName("script")[0];
                            		s.parentNode.insertBefore(bp, s);
                            	})();
                            </script> 


                            <!-- 收益计算器 --><script type="text/html" class="jsCalc"><div class="calc-investc jsCalcForm">
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
                            </div></script><script type="text/javascript" src="/js/l_b9c612e.js"></script>
                            <script type="text/javascript" src="/js/c_33ae5bd.js"></script>
                            <script type="text/javascript" src="/pkg/js/total_assets_06be5f9.js"></script>
                            <!-- <script type="text/javascript">require('common:static/widget/my_totalassets/init');</script> -->

 </body>
 
 </html>