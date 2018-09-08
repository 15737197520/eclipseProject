package util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
//import org.hibernate.classic.Session;

public class HibernateUtil {
	
	private static SessionFactory sessionFactory;
	
	static {
		
		Configuration  cfg = new Configuration();
		
		cfg.configure();
		
		sessionFactory=cfg.buildSessionFactory();
		
	}
	
	public static Session  getSession(){
		
		return sessionFactory.getCurrentSession();
	}
	
	public static Session getCurrentSession(){
		
		return sessionFactory.getCurrentSession();
	}
	
	public static void closeSessionFactory(){
		
		if(sessionFactory!=null){
			
			sessionFactory.close();
			
			sessionFactory=null;
			
		}
		
	}
	
	public static void closeSession(Session session){
		
		if(session!=null){
			
			session.close();
			
			session=null;
			
		}
		
	}

}
