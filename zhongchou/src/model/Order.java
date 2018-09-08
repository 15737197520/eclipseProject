package model;

import java.util.Date;

public class Order {
	
	private String orderId;
	private Integer goodsId;
	private String goodsName;
	private String shotcut1;		          //缩略图1：存放在upload文件夹中
	private String descri;                      //商品描述
	private float price;
	private float aimPrice;                     
	private String createUserName;      //商品创造人
	private int userId;
	private String userName;
	private Date createTime;
	private String payTime;
	private int state;                    //              0未付款，1已付款    2已完成    订单收藏商品
	private int del;                      //              0未删除，1已删除
	
	public Order(){
		
		this.orderId="";
		
		
	}
	
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	
	public Integer getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(Integer goodsId) {
		this.goodsId = goodsId;
	}

	public float getAimPrice() {
		return aimPrice;
	}

	public void setAimPrice(float aimPrice) {
		this.aimPrice = aimPrice;
	}

	
	public String getGoodsName() {
		return goodsName;
	}
	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}
	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public String getDescri() {
		return descri;
	}
	public String getShotcut1() {
		return shotcut1;
	}

	public void setShotcut1(String shotcut1) {
		this.shotcut1 = shotcut1;
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
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public String getPayTime() {
		return payTime;
	}
	public void setPayTime(String payTime) {
		this.payTime = payTime;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public int getDel() {
		return del;
	}
	public void setDel(int del) {
		this.del = del;
	}
	
	
	

}
