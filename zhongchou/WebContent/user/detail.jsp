<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>详细页面-${goodsDetail.goodsName}</title>
<link href="css/goodsDetail.css" type="text/css" rel="stylesheet" />
</head>
<body>

<jsp:include page="top.jsp"></jsp:include>


<div class="jlxqOuterBox" id="jlxqOuterBox" >
             <div class="mainIn02Box">
        <div class="jlxqBox">
            <!-- 详情header begin -->
            <div class="jlxqTitle">
                <a>
                    <img class="jltitphoto" src="${goodsDetail.shotcut1}">
                </a>
                <div class="jlxqtittext">
                    <div class="jlxqh3_wai">
                        <h3 class="jlxqTitle_h3" id="move">${goodsDetail.goodsName}</h3>
                    </div>
                    <div class="faqipeeson">
                        <span class="txt1">发起人</span>
                        <span class="txt2" style="text-decoration:none !important;"><font>
                            ${goodsDetail.userName}</font></span>
                          <span title="营业执照／其他材料1／其他材料2" class="per-v"></span>
                    </div>
                </div>
               
         
                <!-- 分享 e-->
            </div>
            <div class="xqDetailBox">
                <span class="xqStatusSpan zcz ordering"></span>
                <div class="xqDetailLeft siteImgBox">
                    <img class="lazy1 go" src="${goodsDetail.picture1}"  width="534" height="400" />
                </div>
                <div class="xqDetailRight">
                    <div class="xqDetailDataBox">
                        <div class="xqDetailData">
                            <p><span class="scP pl5">支持数</span>&nbsp;&nbsp;<span class="ftP">${goodsDetail.supports}</span></p>
                            <!-- <p class="scP">支持数</p> -->
                        </div>
                        <div class="xqDetailData">
                            <p><span class="scP pl5">已筹款</span>&nbsp;&nbsp;<span class="ftP">¥${goodsDetail.nowPrice}</span></p>
                            <!-- <p class="scP">已筹款</p> -->
                        </div>
                    </div>
                    <div class="xqRatioOuterBox">
                        <p class="ftP">${goodsDetail.nowPrice/goodsDetail.aimPrice*100}%</p>
                        <div class="xqRatio">
                            <div class="xqRatioInner " style="width: ${goodsDetail.nowPrice/goodsDetail.aimPrice*100}%;"></div>
                        </div>
                        <div class="xqRatioText clearfix">
                            <span class="leftSpan">
                                             <span>结束日期</span>&nbsp;&nbsp;<b>${goodsDetail.endDate}</b>  </span>
                            <span class="rightSpan">目标筹资<b>¥${goodsDetail.aimPrice}</b></span>
                        </div>
                    </div>
                    <div class="xqDetailBtnBox">
<br /><br /><br />
                      <s:set name="nowTime" value="new java.util.Date()"></s:set>

						<s:if test="#nowTime.getTime()<#session.goodsDetail.endDate.getTime()">
                        <a class="xqDetail_supA js-linkTaget 1 btn_ALink " href="toOrder" target="_self">立即支持</a>
                        </s:if>
                        <s:else>
                         <span class="xqDetail_supB js-linkTaget 1 btn_ALink " >众筹结束</span>
                       </s:else>
<br /><br />

                        <div class="xqDetailShareBox clearfix">
                            <div class="jlxqTitleText siteIlB_box">
                                <span class="gy siteIlB_item">
                                         
                                </span>
                                 <span class="addr siteIlB_item">
									   
						        </span>
    							  <span class="label siteIlB_item">
                                        
                            			
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 详情header end -->
            <!-- 详情选项卡 begin -->
            <div class="xqTabOuterBox" id="xqTabOBox">
                <div class="xqTabHeader" id="xqTabHeader">
                    <div class="xqInner clearfix">
                        <ul class="xqTabNav_ul siteIlB_box" id="xqTabNav_ul">
                            <li data-scrollto="fqrInforBox">项目详情</li>
                                                        <li data-scrollto="zxjzBox">项目更新（<b>0</b>）</li>
                                <li data-scrollto="plOuterBox">评论（<b>49</b>）</li>
                                <li data-scrollto="zczOuterBox">支持记录（<b>168</b>）</li>
                                                </ul>
                                                    <!-- <div class="xqTabNavRight siteIlB_box">
                                <a href="javascript:;" class="support btn_ALink" onClick="$('#sitefixedMask,#yqc_popBox').show();"><i></i>邀请朋友支持</a>
                            </div> -->
                            <!-- 分享 s-->
                            <ul class="common-share switch" style="display: none;">
                                <li class="common-wechat">
                                    <a class="jiathis_button_weixin">
                                        <i></i>微信
                                    </a>
                                </li>
                                <li class="common-qq">
                                    <a class="jiathis_button_qzone">
                                        <i></i>QQ空间
                                    </a>
                                </li>
                                <li class="common-sina">
                                    <a class="jiathis_button_tsina">
                                        <i></i>新浪微博
                                    </a>
                                </li>
                            </ul>
                            <!-- 分享 e-->
                                            </div>
                </div>
            </div>
            <!-- 详情选项卡 end346346346346346346 -->
            <!-- 详情主题内容 begin -->
            <div class="xqInner">
                <div class="xqMainOuterBox clearfix" id="tage">
                    <div class="xqMainLeftBox" id="left">
                    <!-- 分享 s-->
                        <div class="common-share-box clearfix">
                            <p class="fl">
<!--                                <span class="share-num">759</span><span class="share-num-tag">分享</span>-->
                                <span class="share-num">分享</span>
                            </p>
                             <ul class="common-share">
                                <li class="common-wechat">
                                    <a class="jiathis_button_weixin">
                                        <i></i>微信
                                    </a>
                                </li>
                                <li class="common-qq">
                                    <a class="jiathis_button_qzone">
                                        <i></i>QQ空间
                                    </a>
                                </li>
                                <li class="common-sina">
                                    <a class="jiathis_button_tsina">
                                        <i></i>新浪微博
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <input id="is-self-deal" type="hidden" data-name="0">
                        <!-- 分享 e-->
                        <!-- 项目更新 begin -->
                            <div class="zxjzBox" id="zxjzBox">
                            <div class="xqLeftTitleBox">                    <p class="xqLeftTitle_p"></p>                    <div class="xqLeftTitleInner">                        <h2>项目更新</h2>                    </div>                </div><div class="zxjz_NavOuterBox"><div class="zxjz_NavBox" id="progressList"></div></div><div class="zxjz_pageBox" style="display: none;"><div class="sitePageBox" id="progressPagination"></div></div></div>
                        <!-- 项目更新 end -->
                                                    <a class="xqMainLeft_vedioA siteImgBox" href="" target="_blank">
                                <div class="play-box" >
                                    <img alt="" src="${goodsDetail.picture1}"  width="670" height="418" />
                                    <div class="media-time">00:00/00:03:50</div>
                                </div>
                            </a>
                        
                       
                        <!-- 详情页 -->
                        <div class="newXmxqBox" id="xmxqBox">
                        <img title="" class="lazy1 go" style="width:670px; height:419px" alt="" src="${goodsDetail.picture2}" />
<div class="xqLeftTitleBox"><p class="xqLeftTitle_p"></p><div class="xqLeftTitleInner">
<h2>项目信息</h2></div></div>
<p>名称：${goodsDetail.goodsName}</p>
                                                    <!-- 分享 s-->
                            <div class="common-share-box clearfix">
                                <p class="fl">
                                    <span class="share-num">分享</span>
                                </p>
                                <ul class="common-share">
                                <li class="common-wechat">
                                    <a class="jiathis_button_weixin">
                                        <i></i>微信
                                    </a>
                                </li>
                                <li class="common-qq">
                                    <a class="jiathis_button_qzone">
                                        <i></i>QQ空间
                                    </a>
                                </li>
                                <li class="common-sina">
                                    <a class="jiathis_button_tsina">
                                        <i></i>新浪微博
                                    </a>
                                </li>
                            </ul>
                            </div>
                            <!-- 分享 e-->
                            <!-- 评论 begin -->
                            <input id="csrf_token_topic" type="hidden" value="27160691">
                            <input id="csrf_token_comment" type="hidden" value="13077289">
                            <div class="plOuterBox" id="plOuterBox" name="plOuterBox"><div class="xqLeftTitleBox">                    <p class="xqLeftTitle_p"></p>                    <div class="xqLeftTitleInner">                        <h2>评论</h2>                    </div>                </div><div class="zxjz_inputOuterBox">                    <div class="zxjz_countBox siteCircleBox"><a onclick="siXin(6674690,'用户QK5F');sitePop.showSixin(6674690);" href="javascript:void(0);"><img src="http://zcs6.ncfstatic.com/zhongchou/../img/defaultavatar_new/default_91.png"></a></div>                    <div class="zxjzTextBox sitePHBox">                        <span>                            <textarea class="zxjzTextArea sitePHInput" placeholder="用户QK5F，说点什么吧~~"></textarea>                            <span class="sitePHTip">用户QK5F，说点什么吧~~</span>                        </span>                    </div>                    <div class="zxjz_btnBox siteIlB_box">                        <div id="uploadCommentImageBtn" style="width: 86px; height: 36px;"><object width="86" height="36" class="swfupload" id="SWFUpload_0" data="/static/v3/static/uploadify/uploadify.swf?v=201&amp;preventswfcaching=1529335651564" type="application/x-shockwave-flash" style="width: 86px; height: 36px; position: absolute; z-index: 999;"><param name="wmode" value="transparent"><param name="movie" value="/static/v3/static/uploadify/uploadify.swf?v=201&amp;preventswfcaching=1529335651564"><param name="quality" value="high"><param name="menu" value="false"><param name="allowScriptAccess" value="always"><param name="flashvars" value="movieName=SWFUpload_0&amp;uploadURL=%2Fuploadimg&amp;useQueryString=false&amp;requeueOnError=false&amp;httpSuccess=&amp;assumeSuccessTimeout=30&amp;params=dealID%3D1a232a1cfbdf9b059e954d7b%26amp%3Btype%3D1&amp;filePostName=images&amp;fileTypes=*.gif%3B*.jpeg%3B*.jpg%3B*.png&amp;fileTypesDescription=Image%20Files&amp;fileSizeLimit=0&amp;fileUploadLimit=0&amp;fileQueueLimit=1&amp;debugEnabled=false&amp;buttonImageURL=&amp;buttonWidth=86&amp;buttonHeight=36&amp;buttonText=&amp;buttonTextTopPadding=0&amp;buttonTextLeftPadding=0&amp;buttonTextStyle=color%3A%20%23000000%3B%20font-size%3A%2016pt%3B&amp;buttonAction=-100&amp;buttonDisabled=false&amp;buttonCursor=-2"></object><div class="zxjz_picA" id="uploadCommentImageBtn-button" style="width: 86px; height: 36px; line-height: 36px;">选择图片</div></div><div class="uploadify-queue" id="uploadCommentImageBtn-queue" style="display: none;"></div>                        <span>最多5张</span>                        <a class="zxjz_publishA btn_ALink" id="submitCommentBtn" href="javascript:;" data-fname="pl">发布</a>                        <p class="errorP"></p>                    </div>                    <div class="zxjz_picList clearfix" id="commentImageList"></div>                </div><div class="plListBox" id="commentList" style="min-height:30px;">                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673460,'用户_PABHQE');sitePop.showSixin(6673460);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_61.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673460,'用户_PABHQE');sitePop.showSixin(6673460);" href="javascript:void(0);">用户_PABHQE</a>                         <p class="plItem_textP">加油，子明</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">14小时前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673460" topicid="685440">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673572,'用户_PABUVQ');sitePop.showSixin(6673572);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_73.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673572,'用户_PABUVQ');sitePop.showSixin(6673572);" href="javascript:void(0);">用户_PABUVQ</a>                         <p class="plItem_textP">支持你，有梦想的年轻人。</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">3天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673572" topicid="685093">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673518,'用户_PABKQB');sitePop.showSixin(6673518);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_19.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673518,'用户_PABKQB');sitePop.showSixin(6673518);" href="javascript:void(0);">用户_PABKQB</a>                         <p class="plItem_textP">谭有财</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">3天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673518" topicid="685089">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673518,'用户_PABKQB');sitePop.showSixin(6673518);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_19.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673518,'用户_PABKQB');sitePop.showSixin(6673518);" href="javascript:void(0);">用户_PABKQB</a>                         <p class="plItem_textP">谭有财</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">3天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673518" topicid="685085">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673518,'用户_PABKQB');sitePop.showSixin(6673518);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_19.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673518,'用户_PABKQB');sitePop.showSixin(6673518);" href="javascript:void(0);">用户_PABKQB</a>                         <p class="plItem_textP">谭有财</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">3天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673518" topicid="685084">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673460,'用户_PABHQE');sitePop.showSixin(6673460);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_61.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673460,'用户_PABHQE');sitePop.showSixin(6673460);" href="javascript:void(0);">用户_PABHQE</a>                         <p class="plItem_textP">王平仇健预祝影片成功</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">4天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673460" topicid="685076">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673326,'用户_PABAZ6');sitePop.showSixin(6673326);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_27.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673326,'用户_PABAZ6');sitePop.showSixin(6673326);" href="javascript:void(0);">用户_PABAZ6</a>                         <p class="plItem_textP">你妈妈的好朋友，非常支持你。对你。一定点个赞</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">4天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673326" topicid="685061">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673141,'用户_PAB1EM');sitePop.showSixin(6673141);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_42.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673141,'用户_PAB1EM');sitePop.showSixin(6673141);" href="javascript:void(0);">用户_PAB1EM</a>                         <p class="plItem_textP">加油！</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">4天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673141" topicid="685041">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6673041,'用户_PAAVV5');sitePop.showSixin(6673041);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_42.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6673041,'用户_PAAVV5');sitePop.showSixin(6673041);" href="javascript:void(0);">用户_PAAVV5</a>                         <p class="plItem_textP">祝福子明早日成功</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">4天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6673041" topicid="685029">评论(0)</a>                        </div>                                            </div>                    <div class="plListItem">                        <div class="plItemCountBox siteCircleBox">                            <a onclick="siXin(6672953,'用户_PAASHL');sitePop.showSixin(6672953);" href="javascript:void(0);">                                <img src="http://www.zhongchou.com/static/zhongchou/../img/defaultavatar_new/default_54.png">                            </a>                        </div>                        <a class="plItem_countA colorALink" onclick="siXin(6672953,'用户_PAASHL');sitePop.showSixin(6672953);" href="javascript:void(0);">用户_PAASHL</a>                         <p class="plItem_textP">子明，加油。</p>                        <div class="plItemPicBox clearfix"></div>                        <div class="plItemFooter">                            <span class="timeSpan">4天前</span>                            <a class="plA hoUdLink" href="javascript:;" openreply="false" operate="replyTopic" to="6672953" topicid="685018">评论(0)</a>                        </div>                                            </div></div><div class="pl_pageBox" style="display: block;"><div class="sitePageBox" id="topicPagination"><div class="pager"><a class="prev normalPage" style="cursor: pointer;">上一页</a><a class="cur normalPage" style="cursor: pointer;">1</a><a class="normalPage" style="cursor: pointer;">2</a><a class="normalPage" style="cursor: pointer;">3</a><a class="normalPage" style="cursor: pointer;">4</a><a class="next normalPage" style="cursor: pointer;">下一页</a><div style="clear: both;"></div></div></div></div></div>
                            <!-- 评论 end -->
                            <!-- 支持者 begin -->
                            <div class="zczOuterBox" id="zczOuterBox">
                                <div class="xqLeftTitleBox">
                                    <p class="xqLeftTitle_p"></p>
                                    <div class="xqLeftTitleInner">
                                        <h2>支持记录</h2>
                                    </div>
                                </div>
                                <div class="xqLoadWrap" id="zczLoadWrap">
                                    <table class="zczTable" id="zczTable">
                                        <colgroup>
                                            <col width="80">
                                            <col width="220">
                                            <col width="80">
                                            <col width="140">
                                            <col width="auto">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>订单序号</th>
                                                <th>支持者</th>
                                                <th>支持项</th>
                                                <th>数量(168)</th>
                                                <th>支持时间</th>
                                            </tr>
                                        </thead>
                                        <tbody><tr><td class="numBold">165</td><td class="numBold"><a onclick="siXin(6673460,'用户_PABHQE');sitePop.showSixin(6673460);" href="javascript:void(0);">用户_PABHQE</a></td><td class="numBold"><p class="yelBold">¥1,000</p></td><td class="numBig">2</td><td class="numBig"><p>2018-06-18</p><p>08:28:10</p></td></tr><tr><td class="numBold">164</td><td class="numBold"><a onclick="siXin(6673460,'用户_PABHQE');sitePop.showSixin(6673460);" href="javascript:void(0);">用户_PABHQE</a></td><td class="numBold"><p class="yelBold">¥1,000</p></td><td class="numBig">2</td><td class="numBig"><p>2018-06-16</p><p>13:37:36</p></td></tr><tr><td class="numBold">163</td><td class="numBold"><a onclick="siXin(6674280,'用户_PACZSA');sitePop.showSixin(6674280);" href="javascript:void(0);">用户_PACZSA</a></td><td class="numBold"><p class="yelBold">¥60</p><p class="grayColor">无私支持</p></td><td class="numBig">1</td><td class="numBig"><p>2018-06-15</p><p>18:07:59</p></td></tr><tr><td class="numBold">162</td><td class="numBold"><a onclick="siXin(6628581,'用户_P89GKQ');sitePop.showSixin(6628581);" href="javascript:void(0);">用户_P89GKQ</a></td><td class="numBold"><p class="yelBold">¥50</p><p class="grayColor">无私支持</p></td><td class="numBig">1</td><td class="numBig"><p>2018-06-15</p><p>17:01:27</p></td></tr><tr><td class="numBold">161</td><td class="numBold"><a onclick="siXin(6671609,'用户_PA7WPO');sitePop.showSixin(6671609);" href="javascript:void(0);">用户_PA7WPO</a></td><td class="numBold"><p class="yelBold">¥200</p></td><td class="numBig">1</td><td class="numBig"><p>2018-06-15</p><p>13:33:38</p></td></tr><tr><td class="numBold">160</td><td class="numBold"><a onclick="siXin(6671609,'用户_PA7WPO');sitePop.showSixin(6671609);" href="javascript:void(0);">用户_PA7WPO</a></td><td class="numBold"><p class="yelBold">¥200</p></td><td class="numBig">1</td><td class="numBig"><p>2018-06-15</p><p>12:42:31</p></td></tr><tr><td class="numBold">159</td><td class="numBold"><a onclick="siXin(6673305,'用户_PAB9R2');sitePop.showSixin(6673305);" href="javascript:void(0);">用户_PAB9R2</a></td><td class="numBold"><p class="yelBold">¥10</p><p class="grayColor">无私支持</p></td><td class="numBig">1</td><td class="numBig"><p>2018-06-15</p><p>12:30:42</p></td></tr><tr><td class="numBold">158</td><td class="numBold"><a onclick="siXin(6673572,'用户_PABUVQ');sitePop.showSixin(6673572);" href="javascript:void(0);">用户_PABUVQ</a></td><td class="numBold"><p class="yelBold">¥2,000</p></td><td class="numBig">1</td><td class="numBig"><p>2018-06-15</p><p>03:18:43</p></td></tr><tr><td class="numBold">157</td><td class="numBold"><a onclick="siXin(6673518,'用户_PABKQB');sitePop.showSixin(6673518);" href="javascript:void(0);">用户_PABKQB</a></td><td class="numBold"><p class="yelBold">¥2,000</p></td><td class="numBig">1</td><td class="numBig"><p>2018-06-15</p><p>00:02:13</p></td></tr><tr><td class="numBold">156</td><td class="numBold"><a onclick="siXin(6673518,'用户_PABKQB');sitePop.showSixin(6673518);" href="javascript:void(0);">用户_PABKQB</a></td><td class="numBold"><p class="yelBold">¥1,000</p></td><td class="numBig">1</td><td class="numBig"><p>2018-06-14</p><p>23:45:46</p></td></tr></tbody>
                                    </table>
                                    <!-- 分页结构 begin -->
                                    <div class="zcz_pageBox">
                                        <div class="sitePageBox" id="zczPageBox"><a class="normalPage" href="javascript:;" data-pagenum="1">上一页</a><a class="normalPage cur" href="javascript:;" data-pagenum="1">1</a><a class="normalPage" href="javascript:;" data-pagenum="2">2</a><a class="normalPage" href="javascript:;" data-pagenum="3">3</a><a class="normalPage" href="javascript:;" data-pagenum="4">4</a><a class="normalPage" href="javascript:;" data-pagenum="5">5</a><a class="normalPage dot" href="javascript:;" data-pagenum="6">...</a><a class="normalPage" href="javascript:;" data-pagenum="2">下一页</a></div>
                                    </div>
                                    <!-- 分页结构 end -->
                                    <div class="xqLoading" id="zczloading"></div>
                                </div>
                                
                                
                                <!-- 风险说明 -->
		
                                <div class="fxBox">
                                      <div class="fxBox-head">风险说明</div>
                                      <div class="fxBox-body">
                                          <ol>
                                              <li>众筹不是商品交易。支持者根据自己的判断选择、支持众筹项目，与发起人共同实现梦想并获得发起人承诺的回报，众
                 筹存在一定风险。</li>
                                              <li>众筹网平台只提供平台网络空间、技术服务和支持等中介服务。作为居间方，并不是发起人或支持者中的任何一方，众
                 筹仅存在于发起人和支持者之间，使用众筹平台产生的法律后果由发起人与支持者自行承担。</li>
                                              <li>众筹项目的回报发放、发票开具及其他后续服务事项均由发起人负责。如果发生发起人无法发放回报、延迟发放回报、
                 不提供回报后续服务等情形，您需要直接和发起人协商解决，众筹网对此不承担任何责任。</li>
                                              <li>由于发起人能力和经验不足、市场风险、法律风险等各种因素，众筹可能失败。众筹期限内未达到目标筹资额失败的项
                 目，您支持的款项会全部原路退还给您；其他情况下，您需要直接和发起人协商解决，众筹网对此不承担任何责任。</li>
                                               <li>支持纯抽奖档位、无私支持档位，一旦支付成功将不予退款，众筹失败的除外。</li>
                                          </ol>
                                      </div>
                                  </div>	

                                <!-- 风险说明 e-->	
                                
                              
                            </div>
                </div>
        <!--  -->        <div class="xqMainRightBox" id="right" style="left: 880px;">
                    <a class="invite-friend" onclick="$('#sitefixedMask,#yqc_popBox').show();" href="javascript:"><i></i>邀请朋友一起筹</a>
                    <div>
                    <div>
                        <div>
                    	<!-- 支持金额列表 begin -->
                            <div class="zcjeOuterBox">
                            	<div>
                            		<h3 class="wszc_h3">无私支持<b>60 人</b></h3>
                            		<p class="zcje_textP">感谢您的无私奉献，这份支持将助我们的梦想飞的更高更远。</p>
                                    <div class="wszcWrap siteIlB_box" id="wszcWrap">
                                    	<a class="cur btn_ALink" href="javascript:;">¥1</a>
                                        <a class="btn_ALink" href="javascript:;">¥5</a>
                                        <a class="btn_ALink" href="javascript:;">¥10</a>
                                    </div>
                                    <div class="wszc_inputBox sitePHBox">
                                    	<label>其他<b>¥</b></label>
                                        <input class="wszc_input sitePHInput" id="wszc_input" type="text" maxlength="8">
                                    </div>
                                    <!--<a href="/payapp/#/submit?projectID=1a232a1cfbdf9b059e954d7b&itemID=5223462725d48a38c9d971b7&money=" target="_blank" class="wszc_submitBtn">无私支持</a>-->
                                    <input class="wszc_submitBtn 1" id="wszc_Btn" type="button" value="立即支持" data-tarurl="/payapp/#/submit?projectID=1a232a1cfbdf9b059e954d7b&amp;itemID=5223462725d48a38c9d971b7&amp;money=">
                                </div>



                                                                                        <div class="zcje_ItemBox">
                                        <h3 class="zcje_h3 available"><b>¥100</b>20 人／限100人</h3>
                                                                                    <div class="zcje_title">感谢您的支持</div>
                                                                                <p class="zcje_textP">片尾字幕鸣谢</p>
                                        <div class="zcjePicList clearfix">
                                                                                    </div>

                                        <div class="zcjeFooter">
                                                                                        <p>预计回报发送时间：<b>项目成功结束后30天内<!--项目结束后立即回报项目成功结束后天内-->                                                </b></p>

                                        </div>


                                                                                                                                    <div class="newMaskBox">
                                                    <span class="xqmore"></span>
                                                    <a class="btn_ALink js-linkTaget" href="/payapp/#/submit?projectID=1a232a1cfbdf9b059e954d7b&amp;itemID=b575a18fba128930e215a205">
                                                    </a>
                                                </div>
                                                                                                                        </div>
                            
                                                                                        <div class="zcje_ItemBox">
                                        <h3 class="zcje_h3 available"><b>¥200</b>21 人／限100人</h3>
                                                                                    <div class="zcje_title">感谢您的支持</div>
                                                                                <p class="zcje_textP">片尾字幕鸣谢+实体海报</p>
                                        <div class="zcjePicList clearfix">
                                                                                    </div>

                                        <div class="zcjeFooter">
                                                                                        <p>预计回报发送时间：<b>项目成功结束后30天内<!--项目结束后立即回报项目成功结束后天内-->                                                </b></p>

                                        </div>


                                                                                                                                    <div class="newMaskBox">
                                                    <span class="xqmore"></span>
                                                    <a class="btn_ALink js-linkTaget" href="/payapp/#/submit?projectID=1a232a1cfbdf9b059e954d7b&amp;itemID=57f7cd41cf64e11375d8dd05">
                                                    </a>
                                                </div>
                                                                                                                        </div>
                            
                                                                                        <div class="zcje_ItemBox">
                                        <h3 class="zcje_h3 available"><b>¥500</b>28 人／限60人</h3>
                                                                                    <div class="zcje_title">感谢您的支持</div>
                                                                                <p class="zcje_textP">片尾字幕鸣谢+实体海报+剧照+高清版本第一时间观看</p>
                                        <div class="zcjePicList clearfix">
                                                                                    </div>

                                        <div class="zcjeFooter">
                                                                                        <p>预计回报发送时间：<b>项目成功结束后30天内<!--项目结束后立即回报项目成功结束后天内-->                                                </b></p>

                                        </div>


                                                                                                                                    <div class="newMaskBox">
                                                    <span class="xqmore"></span>
                                                    <a class="btn_ALink js-linkTaget" href="/payapp/#/submit?projectID=1a232a1cfbdf9b059e954d7b&amp;itemID=3b39b937a44776de3dd4dc05">
                                                    </a>
                                                </div>
                                                                                                                        </div>
                            
                                                                                        <div class="zcje_ItemBox">
                                        <h3 class="zcje_h3 available"><b>¥1,000</b>19 人／限30人</h3>
                                                                                    <div class="zcje_title">感谢您的支持</div>
                                                                                <p class="zcje_textP">片尾字幕鸣谢+实体海报+剧照+高清版本第一时间观看+首映</p>
                                        <div class="zcjePicList clearfix">
                                                                                    </div>

                                        <div class="zcjeFooter">
                                                                                        <p>预计回报发送时间：<b>项目成功结束后30天内<!--项目结束后立即回报项目成功结束后天内-->                                                </b></p>

                                        </div>


                                                                                                                                    <div class="newMaskBox">
                                                    <span class="xqmore"></span>
                                                    <a class="btn_ALink js-linkTaget" href="/payapp/#/submit?projectID=1a232a1cfbdf9b059e954d7b&amp;itemID=4f4fd114328a3ed24582df05">
                                                    </a>
                                                </div>
                                                                                                                        </div>
                            
                                                                                        <div class="zcje_ItemBox">
                                        <h3 class="zcje_h3"><b>¥2,000</b><em>已满额</em>／限15人</h3>
                                                                                    <div class="zcje_title">感谢您的支持</div>
                                                                                <p class="zcje_textP">联合制片署名+实体海报+剧照+高清版本第一时间观看+首映+DVD</p>
                                        <div class="zcjePicList clearfix">
                                                                                    </div>

                                        <div class="zcjeFooter">
                                                                                        <p>预计回报发送时间：<b>项目成功结束后30天内<!--项目结束后立即回报项目成功结束后天内-->                                                </b></p>

                                        </div>


                                                                                                                                    <div class="maskBox">
                                                    <div class="maskBgBox gray"></div>
                                                    <div class="maskInner">
                                                        <p class="mask_grayText">已满额</p>
                                                    </div>
                                                </div>
                                                                                                                        </div>
                            
                                                                                        <div class="zcje_ItemBox">
                                        <h3 class="zcje_h3 available"><b>¥5,000</b>2 人／限6人</h3>
                                                                                    <div class="zcje_title">感谢您的支持</div>
                                                                                <p class="zcje_textP">联合制片署名+实体海报+剧照+高清版本第一时间观看+首映+DVD+导演亲自为您画肖像画</p>
                                        <div class="zcjePicList clearfix">
                                                                                    </div>

                                        <div class="zcjeFooter">
                                                                                        <p>预计回报发送时间：<b>项目成功结束后30天内<!--项目结束后立即回报项目成功结束后天内-->                                                </b></p>

                                        </div>


                                                                                                                                    <div class="newMaskBox">
                                                    <span class="xqmore"></span>
                                                    <a class="btn_ALink js-linkTaget" href="/payapp/#/submit?projectID=1a232a1cfbdf9b059e954d7b&amp;itemID=b0a10ed50cd069de73c4d905">
                                                    </a>
                                                </div>
                                                                                                                        </div>
                            
                                                                                        <div class="zcje_ItemBox">
                                        <h3 class="zcje_h3"><b>¥10,000</b><em>已满额</em>／限3人</h3>
                                                                                    <div class="zcje_title">感谢您的支持</div>
                                                                                <p class="zcje_textP">联合制片署名+实体海报+剧照+高清版本第一时间观看+首映+DVD+导演亲自为您画肖像画+主创的感谢信+神秘礼物</p>
                                        <div class="zcjePicList clearfix">
                                                                                    </div>

                                        <div class="zcjeFooter">
                                                                                        <p>预计回报发送时间：<b>项目成功结束后30天内<!--项目结束后立即回报项目成功结束后天内-->                                                </b></p>

                                        </div>


                                                                                                                                    <div class="maskBox">
                                                    <div class="maskBgBox gray"></div>
                                                    <div class="maskInner">
                                                        <p class="mask_grayText">已满额</p>
                                                    </div>
                                                </div>
                                                                                                                        </div>
                            
                                            </div>

                    
                     <a class="xqMainRight_btn js-linkTaget 1 btn_ALink" href="/payapp/#/submit?projectID=1a232a1cfbdf9b059e954d7b" target="_blank">支持此项目</a>

                </div>
                        
                <!-- 联系我们 -->
                <div class="contactBox">
                        <div class="contact-head">联系我们</div>
                        <div class="contact-body">
                            <ul class="contact-list">
                                                                <!--机构-->
                                <li>
                                    <div class="item-contact item1">
                                        <div class="obj-media"></div>
                                        <div class="obj-body">
                                            <span class="m1">发起人</span>
                                            <span>怡迅（上海）影视传播有限公司</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="item-contact item2">
                                        <div class="obj-media"></div>
                                        <div class="obj-body">
                                            <span class="m1">联系地址</span>
                                            <span>上海市松江区富永路425弄212号1楼</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="item-contact item3">
                                        <div class="obj-media"></div>
                                        <div class="obj-body">
                                            <span class="m1">联系电话</span>
                                            <span>13488734788</span>
                                        </div>
                                    </div>
                                </li>
                                                            </ul>
                        </div>
                    </div>	
                </div>    
                <!-- 联系我们 e-->
                        
                <div class="gdr" id="gdr"></div>
                 </div>
            </div>
        </div>
        <!-- 详情主题内容 end -->
    </div>
</div>
    </div>
</div>

</div>

</body>
</html>