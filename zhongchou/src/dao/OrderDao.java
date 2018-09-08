package dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import model.Goods;
import model.Order;
import util.HibernateUtil;

public class OrderDao {

	public void createOrder(Order order){
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		 session.save(order);
		
//		 String sql="update Goods g set g.supports=g.supports+1 where g.goodsId=?";                                          //用currentSession操作几个类，或者action中调用两个类，
//		 
//		 Query q=session.createQuery(sql);
//		 
//		 q.setInteger(0, order.getGoodsId());
//		 
//		 int res=q.executeUpdate();
//		 
//		 System.out.println("是否执行了"+res);
		 
		tx.commit();
		
	//	session.close();
		
		
	}
	
public List<Order> showDeleteOrder(){
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="from Order o where o.del=1";
		
		Query query=session.createQuery(hql);
		
			
		List<Order> orders=query.list();
		
		tx.commit();
		
	//	session.close();
		
		return orders;
		
		
	}
	
	
	public List<Order> showOrder(Integer id){
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="from Order o where o.userId=? and o.del=0";
		
		Query query=session.createQuery(hql);
		
		query.setInteger(0, id);
			
		List<Order> orders=query.list();
		
		tx.commit();
		
	//	session.close();
		
		return orders;
		
		
	}
	
	public  boolean deleteOrder(String id){
		
		System.out.println(id);
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="update Order ord set ord.del=1 where ord.orderId=?";
		
		Query query= session.createQuery(hql);
		
		query.setString(0, id);
		
		int result=query.executeUpdate();
		tx.commit();
		System.out.println(result);
	
		
			
	//		HibernateUtil.closeSession(session);
			
			return true;
		
				
				
		
	}
	
}
