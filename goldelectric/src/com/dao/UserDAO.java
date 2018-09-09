package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.entity.User;
import java.sql.ResultSet;
import java.sql.SQLException;
 


import com.utils.C3p0Utils;


public class UserDAO {
	   User u=null;
	   Connection connection =null;
	   PreparedStatement pstmt=null;
	   ResultSet resultSet=null;
 
		//登录的方法
		public  User  login(String account,String password) {
		  //赋值
		  try {
			connection=C3p0Utils.getConnection();
			  //静态sql语句
			String sql = "select * from user where account=? and password=?"; 
		    pstmt = (PreparedStatement) connection.prepareStatement(sql);
			pstmt.setString(1, account);
			pstmt.setString(2, password);  
			resultSet = pstmt.executeQuery();
			if(resultSet.next()){
				u=new User();
				u.setUser_id(resultSet.getInt("user_id"));
				u.setName(resultSet.getString("name"));
				u.setAccount(resultSet.getString("account"));
				u.setPassword(resultSet.getString("password"));
				u.setMoney(resultSet.getInt("money"));
			}else{
				System.out.println("用户名或者密码错误！");
			}  
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {	
			C3p0Utils.close(connection,pstmt,resultSet);	
		}
		 return u;
	}
	
	//充值的方法
	public int addMoney(int user_id,int money){
		connection = C3p0Utils.getConnection();
		String sql = "select * from user where user_id=?";
		int RMB=0;//余额用变量RMB接收
		int result = 0;//设置返回的结果变量
		try {
			pstmt = (PreparedStatement) connection.prepareStatement(sql);
			pstmt.setInt(1, user_id);
			resultSet = pstmt.executeQuery();
			
			while(resultSet.next()){
				RMB = resultSet.getInt("money");
			}
			String sql2 = "update user set money="+(RMB+money)+" where user_id="+user_id;
			result = pstmt.executeUpdate(sql2);
			
			
		}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
		}finally {	
			C3p0Utils.close(connection,pstmt,resultSet);	
		}
		return result;
	}
	
	//购买产品后  减少用户对应的金额
	public int delMoneyForBuyPro(int user_id,int money){
		connection = C3p0Utils.getConnection();
		//设置执行SQL语句后返回的结果
		int result = 0;
		//先根据用户获取余额
		String sql = "select * from user where user_id=?";
		int RMB=0;//余额用变量RMB接收
		try {
			pstmt = (PreparedStatement) connection.prepareStatement(sql);
			pstmt.setInt(1, user_id);
			resultSet = pstmt.executeQuery();
			
			while(resultSet.next()){
				RMB = resultSet.getInt("money");
			}
			if(RMB < money){
				//判断条件   余额大于购买产品所用金额
				System.out.println("余额不足以购买当前数量的产品");
				return result;
			}else{
				//余额足够
				System.out.println("余额足够购买当前数量的产品");
				String sql2 = "update user set money="+(RMB-money)+" where user_id="+user_id;
				result = pstmt.executeUpdate(sql2);
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {	
			C3p0Utils.close(connection,pstmt,resultSet);	
		}
		
		return result;
	}
	
	//首页点击  进入我的账户  获取当前用户的所有信息
	public User getMessageById(int user_id){
		connection = C3p0Utils.getConnection();
		String sql = "select * from user where id=?";
		User u = new User();
		try {
			pstmt = (PreparedStatement) connection.prepareStatement(sql);
			pstmt.setInt(1, user_id);
			resultSet = pstmt.executeQuery();
			while(resultSet.next()){
				u.setUser_id(resultSet.getInt("user_id"));
				u.setMoney(resultSet.getInt("money"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return u;
	}
}
