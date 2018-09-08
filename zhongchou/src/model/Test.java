package model;


import java.util.Date;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.hibernate.tool.hbm2ddl.SchemaExport;

import util.HibernateUtil;

public class Test {

	public static void main(String[] args) {
		
		Configuration cfg=new AnnotationConfiguration().configure();
		SchemaExport export =new SchemaExport(cfg);
		export.create(true, true);
//		Order or=new Order();
//	Order oo=new Order();
//		System.out.println(or.getOrderId());
//		System.out.println(oo.getOrderId());
//		User u=new User();
//		u.setUserName("tom");
//		u.setPassword("123456");
//		u.setMobile("15704958837");
//		u.setEmail("843589327@qq.com");
//		u.setAddress("жЃжн");
//		Session s=HibernateUtil.getSession();
//		Transaction tx=s.beginTransaction();
//		s.save(or); s.save(oo);
//		tx.commit();
//		s.close();
////		Admin a=new Admin();
////		a.setAdminName("admin");
////		a.setAdminPassword("admin");
////		Session s=HibernateUtil.getSession();
////		Transaction tx=s.beginTransaction();
////		s.save(a);
////		tx.commit();
////		s.close();
		
	//	 java.text.SimpleDateFormat formatter=new java.text.SimpleDateFormat("yyyy-MM-dd");
		 
//	System.out.println(formatter.format(new Date()));	 
	//	 System.out.println(new Date());
		
	}
	
}
