<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页</title>
<link href="css/index.css" type="text/css" rel="stylesheet" />
<link href="../css/index.css" type="text/css" rel="stylesheet" />
</head>
<body>

<jsp:include page="top.jsp"></jsp:include>

<div class="indexBanner" id="indexBanner">

	<div class="indexBannerView">

        <ul class="indexB_ul" id="slider" style="left: -200.37%; width: 700%;">
	<li style="width: 14.28%;"><a style="background-image: url(a1.jpg);" href="http://www.zhongchou.com/deal-show/id-743567" target="_blank"></a></li>
	<li style="width: 14.28%;"><a style="background-image: url(a2.jpg);" href="http://www.zhongchou.com/deal-show/id-741682" target="_blank"></a></li>

	<li style="width: 14.28%;"><a style="background-image: url(http://zcr2.ncfstatic.com/attachment/201806/08/19/1528456696.jpg);" href="http://www.zhongchou.com/deal-show/id-744137" target="_blank"></a></li>

	<li style="width: 14.28%;"><a style="background-image: url(http://zcr2.ncfstatic.com/attachment/201806/14/14/1528958849.jpg);" href="http://www.zhongchou.com/deal-show/id-743567" target="_blank"></a></li>

	<li style="width: 14.28%;"><a style="background-image: url(http://zcr2.ncfstatic.com/attachment/201806/14/14/1528958953.jpg);" href="http://www.zhongchou.com/deal-show/id-741682" target="_blank"></a></li>

	<li style="width: 14.28%;"><a style="background-image: url(http://zcr2.ncfstatic.com/attachment/201806/08/19/1528456696.jpg);" href="http://www.zhongchou.com/deal-show/id-744137" target="_blank"></a></li>
	<li style="width: 14.28%;"><a style="background-image: url(http://zcr2.ncfstatic.com/attachment/201806/14/14/1528958849.jpg);" href="http://www.zhongchou.com/deal-show/id-743567" target="_blank"></a></li>
	</ul>
     
   <div class="indexBControls" id="indexBControls">
	<div class="indexBPageitem cur">
	</div>
	<div class="indexBPageitem">
	</div>
	<div class="indexBPageitem">
	</div>
   </div>
    
   <div class="indexBPage" id="indexBPage">

	<a class="pre" id="bannerPre" href="javascript:;"></a>
 
       	<a class="next" id="bannerNext" href="javascript:;"></a>
    
   </div>
   
 </div>
  
  <div class="indexBMask">
 
       <span class="leftItem"></span>
  
      <span class="rightItem"></span>
 
   </div>
</div>


<s:iterator value="showPassed" >

<div class="indexZCWrap">
    <div class="mainInnerBox">
	<div class="indCardListWrap clearfix">
            <div class="indCardItem">
	
                <a class="siteCardItemImgA ind" href="showDetail?id=${goodsId}" target="_blank">

                <img alt="" src="${picture1}"  width="320" height="240" />

        	<span class="siteCardStatus"></span>

        	</a> 
	
            <div class="indCardICBox siteCardICBox">
	
               	<div class="indCardICText">
	
         	     <a class="siteCardICH3" href="" target="_blank">${goodsName}</a>

		     <p class="siteCardIC_p ind">${descri}</p>

       		</div>
	
            <div class="siteCardFBox">

	
	        <div class="siteCardFLabelBox siteIlB_box">
	
		     <a class="site_ALink siteIlB_item" href="" target="_blank">香港</a>
         	     <a class="site_ALink siteIlB_item" href="" target="_blank">科技</a>
	
		     <a class="site_ALink siteIlB_item" href="" target="_blank">区块链</a>
	
		</div>
            <div class="siteCardRatio">
	
		<div class="siteCardRatioInner" style="width: ${nowPrice/aimPrice*100}%;">
           </div>
	
        	</div>
		
             <div class="siteCardFData">
	
 		<div class="ftDiv">
	
			<p class="ftP">￥${nowPrice}</p>
	
			<p class="scP">已筹款</p>

		</div>
			
		<div class="scDiv">
	
      			<p class="ftP">${supports}</p>
	
			<p class="scP">支持数</p>

		</div>

		
	  	<div class="thDiv">

			<p class="ftP">${nowPrice/aimPrice*100}%</p>
	
			<p class="scP">筹款进度</p>

		</div>
		
   	   </div>
		
	</div>

	</div>

	</div>
	</div>
	</div>
</div>


</s:iterator>

</body>
</html>