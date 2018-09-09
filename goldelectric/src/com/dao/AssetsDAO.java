package com.dao;

import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.entity.Assets;

import com.utils.C3p0Utils;

public class AssetsDAO {
	   Assets a=null;
	   Connection connection =null;
	   PreparedStatement pstmt=null;
	   ResultSet resultSet=null;
	   
	   public AssetsDAO(){}
	   //获取所有资产
	   public List<Assets> getAllById(int userId){
		   connection = C3p0Utils.getConnection();
		   String sql = "select * from assets where user_id=?";
		
		   //该查询查到的结果集对应多个实体类对象  这里用一个list加实体类泛型的集合来接收返回的数据
			  List<Assets> list = new ArrayList();
				try {
					pstmt = (PreparedStatement) connection.prepareStatement(sql);
					pstmt.setInt(1, userId);
					resultSet = pstmt.executeQuery();
					//结果集的元素对象 
			        ResultSetMetaData rsmd = resultSet.getMetaData();
			        //获取结果集的元素个数
			        int colCount = rsmd.getColumnCount();
			        Assets a = new Assets();
			        //业务对象的属性数组
			        Class c = a.getClass();
			        Field[] fields = c.getDeclaredFields();
					while(resultSet.next()){
						try {
							a = (Assets) c.newInstance();
							for (int i = 0; i < fields.length; i++) {
								 Field f = a.getClass().getDeclaredField(fields[i].getName());
								 // 参数true 可跨越访问权限进行操作
				                 f.setAccessible(true);
				                 // 判断其类型进行赋值操作
				                 if (f.getType().getName().equals(String.class.getName())) {
				                     f.set(a, resultSet.getString(fields[i].getName()));
				                 } else if (f.getType().getName().equals(int.class.getName())) {
				                     f.set(a, resultSet.getInt(fields[i].getName()));
				                 }
				            }
								list.add(a);
							}catch(Exception e){
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
						}  
					
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return list;
		   
	   }
	   
	   //购买产品
	   public int buyProduct(int user_id,int product_id,int price,int amount,int total,String rate,String start_time,String end_time){
		   connection = C3p0Utils.getConnection();
		   String sql = "insert into assets(user_id,product_id,price,amount,total,rate,createtime,endtime) values("+user_id+","+product_id+","+price+","+amount+","+total+","+rate+",'"+start_time+"','"+end_time+"')";
		   int result = 0;
		   try {
				pstmt = (PreparedStatement) connection.prepareStatement(sql);
			/*	pstmt.setInt(1, user_id);
				pstmt.setInt(2, product_id);
				pstmt.setInt(3, price);
				pstmt.setInt(4, amount);
				pstmt.setInt(5, total);
				pstmt.setString(6, rate);*/
				result = pstmt.executeUpdate(sql);
				if(result==1){
					System.out.println("购买成功");
				}else{
					System.out.println("购买失败");
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return result;
	   }
}
