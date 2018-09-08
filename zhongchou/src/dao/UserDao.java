package dao;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import model.Admin;
import model.User;
import util.HibernateUtil;

public class UserDao {

	
	public User userLogin(User u){
		
		Session session =HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="from User u where u.userName=? and u.password=?";		
		
		Query query= session.createQuery(hql);
		
		query.setString(0, u.getUserName());
		
		query.setString(1, u.getPassword());
		
		List<User> list=query.list();
		
		tx.commit();
		
//		HibernateUtil.closeSession(session);
		
		if (list.size()!=0){
			
			return (User) list.get(0);			
		}		
			return null;		
	}
	
	
	public boolean addUser(User user){                                                           //管理员添加用户
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="from User u where u.userName=?";
		
		Query query= session.createQuery(hql);
       
		query.setString(0, user.getUserName());
		
		List<User> list=query.list();		
		
		if(list.size()==0){
			
			session.save(user);
			
			tx.commit();
			
		//	HibernateUtil.closeSession(session);
			
			return true;
						
		}		
		return false;
	}

	public boolean modifyUser(User user){                                            //管理员修改用户，用户也修改？
	
		Session session=HibernateUtil.getSession();
	
		Transaction tx=session.beginTransaction();		
		
			session.update(user);
		
			tx.commit();
		
	//		HibernateUtil.closeSession(session);
		
			return true;			

	}
	
	
}
