package com.utils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet; 
import java.sql.SQLException;
 
import javax.sql.DataSource;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class C3p0Utils { 
    static DataSource cpds=null; 
    static{         
          cpds= new ComboPooledDataSource("mysql");
          System.out.println(cpds);
    } 
    /**
     * 获得数据库连接 
     */ 
    public static Connection getConnection(){ 
        try { 
            return cpds.getConnection(); 
        } catch (SQLException e) { 
            e.printStackTrace(); 
            return null; 
        } 
    } 
     
    /**
     * 数据库关闭操作
     */ 
    public static void close(Connection conn,PreparedStatement pst,ResultSet rs){ 
        if(rs!=null){ 
            try { 
                rs.close(); 
            } catch (SQLException e) { 
                e.printStackTrace(); 
            } 
        } 
        if(pst!=null){ 
            try { 
                pst.close(); 
            } catch (SQLException e) { 
               e.printStackTrace(); 
            } 
        } 
 
        if(conn!=null){ 
            try { 
                conn.close(); 
            } catch (SQLException e) { 
                e.printStackTrace(); 
            } 
        } 
    } 
}

