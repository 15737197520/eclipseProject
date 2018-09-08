package model;

import java.io.File;
import java.util.Date;

public class Goods {
	 java.text.SimpleDateFormat formatter=new java.text.SimpleDateFormat("yyyy-MM-dd");
	private Integer goodsId;
	private Integer userId;
	private String userName; 
	private String goodsName;
	private String descri;                       //众筹商品描述
	private float price ;
	private float aimPrice;
	private Date startDate;
	private Date endDate;
	private int supports;                   //支持人数
	private float nowPrice;              //目前筹资金额
	private String feedBack;             //报酬描述
	private int checkState;               //审核状态
	private File[] pic;
	private String[] picFileName;
	private String picture1;		//图片1：存放在upload文件夹中
	private String shotcut1;		//缩略图1：存放在upload文件夹中
	private String picture2;		//图片2：存放在upload文件夹中
	private String shotcut2;		//缩略图2：存放在upload文件夹中
	private String picture3;		//图片3：存放在upload文件夹中
	private String shotcut3;		//缩略图3：存放在upload文件夹中
	
	public Goods() {
	
		this.goodsId = 0;
		this.userId = 0;
		this.goodsName = "aaaa";
		this.descri = "";
		this.price = 0;
		this.aimPrice = 0;
		this.startDate = new Date();
		this.endDate = new Date();
		this.pic = null;
		this.supports=0;
		this.nowPrice=0;
		this.picFileName = null;
		this.picture1 = "";
		this.shotcut1 = "";
		this.picture2 = "";
		this.shotcut2 = "";
		this.picture3 = "";
		this.shotcut3 = "";
	}
	public Integer getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(Integer goodsId) {
		this.goodsId = goodsId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getGoodsName() {
		return goodsName;
	}
	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}
	public String getFeedBack() {
		return feedBack;
	}
	public void setFeedBack(String feedBack) {
		this.feedBack = feedBack;
	}
	public String getDescri() {
		return descri;
	}
	public void setDescri(String descri) {
		this.descri = descri;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public float getAimPrice() {
		return aimPrice;
	}
	public void setAimPrice(float aimPrice) {
		this.aimPrice = aimPrice;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		System.out.println(endDate.toString());
		this.endDate = endDate;
	}
	public int getSupports() {
		return supports;
	}
	public void setSupports(int supports) {
		this.supports = supports;
	}
	public float getNowPrice() {
		return nowPrice;
	}
	public void setNowPrice(float nowPrice) {
		this.nowPrice = nowPrice;
	}
	public int getCheckState() {
		return checkState;
	}
	public void setCheckState(int checkState) {
		this.checkState = checkState;
	}
	public File[] getPic() {
		return pic;
	}
	public void setPic(File[] pic) {
	
		this.pic = pic;
	}
	public String[] getPicFileName() {
		return picFileName;
	}
	public void setPicFileName(String[] picFileName) {
		this.picFileName = picFileName;
	}
	public String getPicture1() {
		return picture1;
	}
	public void setPicture1(String picture1) {
		this.picture1 = picture1;
	}
	public String getShotcut1() {
		return shotcut1;
	}
	public void setShotcut1(String shotcut1) {
		this.shotcut1 = shotcut1;
	}
	public String getPicture2() {
		return picture2;
	}
	public void setPicture2(String picture2) {
		this.picture2 = picture2;
	}
	public String getShotcut2() {
		return shotcut2;
	}
	public void setShotcut2(String shotcut2) {
		this.shotcut2 = shotcut2;
	}
	public String getPicture3() {
		return picture3;
	}
	public void setPicture3(String picture3) {
		this.picture3 = picture3;
	}
	public String getShotcut3() {
		return shotcut3;
	}
	public void setShotcut3(String shotcut3) {
		this.shotcut3 = shotcut3;
	}
	
	
	
	
	
}
