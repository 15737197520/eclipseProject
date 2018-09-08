<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="css/rightContent.css" type="text/css" rel="stylesheet" />
<link href="../css/left.css" type="text/css" rel="stylesheet" />
<link href="../css/top.css" type="text/css" rel="stylesheet" />
<link href="../css/rightContent.css" type="text/css" rel="stylesheet" />
</head>
<body>


            <table class="gqDDListTable" ng-show="list.length">
                <colgroup>
                    <col width="300">
                    <col width="60">
                    <col width="160">
                    <col width="80">
                    <col width="50">
                    <col width="90">
                    <col wdith="auto">
                </colgroup>
                <thead>
                <tr>
                    <th>项目信息</th>
                    <th>项目状态</th>
                    <th>筹资进度</th>
                    <th>支付总额</th>
                    <th>份数</th>
                    <th>状态</th>
                  
                </tr>
                </thead>
                <!-- ngRepeat: order in list -->
                
                <s:if test="showDeleteOrder==null">
				<tr>
					<td colspan="7"  align="center">
						<p>
							您还没有此项数据
						</p>
					</td>
				</tr>
			</s:if>
                
                
                       <s:iterator value="showDeleteOrder" var="list">
                <tbody class="ng-scope" >
         
                <tr>
                    <td colspan="7"></td>
                </tr>
                <tr class="ftTr">
                    <td class="ng-binding" colspan="6">2018-06-19 05:31
                            <span class="dingdan">订单号码：
                                <span class="fqr_linkA  ng-binding">${list.orderId }</span>
                            </span>
                            <span class="dingdan" style="text-indent:0px;">发起人:
                                <a title="" class="fqr_linkA colorA02Link  ng-binding ng-isolate-scope" style="text-indent:0px;" content="姓名:Higgs Mining ||城市:||&#10;                                   联系方式: 13147567849" tooltip="" data-original-title="">
                                   ${list.userName}</a>
                                   <div class="tooltip fade bottom in" style="left: 394.19px; top: 275.92px; display: none;">
                                   <div class="tooltip-arrow"></div>
                                   <div class="tooltip-inner">姓名:${list.createUserName}
                                    <br>城市:<br>
                                   联系方式: 13147567849<br></div></div>
                            </span>
                    </td>
                    <td>
                        <!-- ngIf: order.canDelete --><a class="ftTr_delA site_ALink ng-scope" href="javascript:;" ng-click="deleteOrder(order)" ng-if="order.canDelete" content="删除"></a><!-- end ngIf: order.canDelete -->
                    </td>
                </tr>
                <tr class="inforTr">
                    <td>
                        <div class="ddImgBox siteImgBox">
                            <a href="showDetail?id=${list.goodsId}" >
                                <img src="../${list.shotcut1}"/>
                            </a>
                            
                        </div>
                        <div class="ddImgText">
                            <a class="site_ALink ng-binding" href="showDetail?id=" >${list.goodsName}</a>

                            <p class="jlzc_ddImgText siteIlB_box">
                                
                                   <p></p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p class="inforText_p ng-binding">众筹中</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p class="inforText_p ng-binding">目标：${list.price}元</p>

                            <div class="inforRatioBox">
                                <div class="inforRatio">
                                    <div class="inner" style="width: 111%;" ng-style="{width: order.project.progress+'%'}"></div>
                                </div>
                                <span class="ng-binding">${goodsDetail.nowPrice/goodsDetail.aimPrice}%</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p class="inforText_p ng-binding">${list.price}元</p>

                            <!-- ngIf: order.voucher -->

                            <p class="inforText_p gray ng-binding">免运费</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p class="inforText_p ng-binding">${list.price}元</p>
                        </div>
                    </td>
                    <td>
                        <div class="tc">
                            <p class="inforText_p ng-binding">已支付</p>

                            <p class="inforText_p gray ng-hide" ng-show="showStatusStr(order.status) != '未支付' &amp;&amp; showLottery(order.lottery) &amp;&amp; order.lottery.lott_conf.status == '0'">未开奖</p>

                            <p class="inforText_p lottery_A ng-hide" ng-show="showStatusStr(order.status) != '未支付' &amp;&amp; showLottery(order.lottery) &amp;&amp; order.lottery.lott_conf.status == '1' &amp;&amp; lotteryWin(order.lottery.code_list)">您已中奖</p>

                            <p class="inforText_p ng-hide" ng-show="showStatusStr(order.status) != '未支付' &amp;&amp;  showLottery(order.lottery) &amp;&amp; order.lottery.lott_conf.status == '1' &amp;&amp; !lotteryWin(order.lottery.code_list)">未中奖</p>


                            <!-- ngIf: isShowSendOutTime(order) -->

                            <p class="inforText_p ng-hide" ></p>

                            <div class="tooltip fade bottom in ng-hide" style=" margin-left:-124px!important; width: 340px!important; " ng-show="order.expressdisplay">
                                <div class="tooltip-arrow"></div>
                                <div class="tooltip-inner"><!-- end ngRepeat: mess in order.expressinfo --></div>
                            </div>
                        </div>
                    </td>

                
                </tr>
                </tbody>
                       </s:iterator>
            </table>
</body>
</html>