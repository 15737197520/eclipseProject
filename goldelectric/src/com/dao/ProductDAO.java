package com.dao;

import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.entity.Product;
import com.utils.C3p0Utils;

public class ProductDAO {
	   Product p=null;
	   Connection connection =null;
	   PreparedStatement pstmt=null;
	   ResultSet resultSet=null;
	//获取当前库中所有产品
	public List<Product> getAllProduct(){
		  connection = C3p0Utils.getConnection();
		  String sql = "select * from product";
		  //该查询查到的结果集对应多个实体类对象  这里用一个list加实体类泛型的集合来接收返回的数据
		  List<Product> list = new ArrayList();
			try {
				pstmt = (PreparedStatement) connection.prepareStatement(sql);
				resultSet = pstmt.executeQuery();
				//结果集的元素对象 
		        ResultSetMetaData rsmd = resultSet.getMetaData();
		        //获取结果集的元素个数
		        int colCount = rsmd.getColumnCount();
		        Product p = new Product();
		        //业务对象的属性数组
		        Class c = p.getClass();
		        Field[] fields = c.getDeclaredFields();
				while(resultSet.next()){
					try {
						p = (Product) c.newInstance();
						for (int i = 0; i < fields.length; i++) {
							 Field f = p.getClass().getDeclaredField(fields[i].getName());
							 // 参数true 可跨越访问权限进行操作
			                 f.setAccessible(true);
			                 // 判断其类型进行赋值操作
			                 if (f.getType().getName().equals(String.class.getName())) {
			                     f.set(p, resultSet.getString(fields[i].getName()));
			                 } else if (f.getType().getName().equals(int.class.getName())) {
			                     f.set(p, resultSet.getInt(fields[i].getName()));
			                 } 
			            }
							list.add(p);
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
	   public int updatProAmount(int id,int amount) {
		   connection = C3p0Utils.getConnection();
		   String sql = "update product set amount = ? where product_id=?";
		   int result = 0;
		   try {
			pstmt = connection.prepareStatement(sql);
			pstmt.setInt(1, amount);
			pstmt.setInt(2, id);
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		   return result;
	   }
}
