package dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import model.Admin;
import model.User;
import util.HibernateUtil;

public class AdminDao {

	public Admin get(Admin admin){                             //查询管理员
		
		Session session =HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="from Admin a where a.adminName=? and a.adminPassword=?";		
		
		Query query= session.createQuery(hql);
		
		query.setString(0, admin.getAdminName());
		
		query.setString(1, admin.getAdminPassword());
		
		List<Admin> list=query.list();
		
		tx.commit();
		
	//	HibernateUtil.closeSession(session);
		
		if (list.size()!=0){
			
			return (Admin) list.get(0);			
		}		
			return null;		
	}
	
	public List<User> queryAllUser(){                                //查询所有用户
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		List<User> users;
		
		String hql="from User";
		
		Query query=session.createQuery(hql);
		
		users=query.list();
		
		tx.commit();
		
	//	HibernateUtil.closeSession(session);
		
		return users;
	}
	
	public boolean deleteUser(Integer id){                                        //删除用户
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		User u=(User) session.get(User.class, id);
		
		session.delete(u);
		
		tx.commit();
		
	//	HibernateUtil.closeSession(session);
		
		return true;
	}

	public User toModifyPage(Integer id){                                                  //修改前先查询
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		User u=(User) session.get(User.class, id);
		
		tx.commit();
		
		return u;
		
	}
	
	
	
	
	
	
	
}
