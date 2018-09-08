package dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import model.Goods;
import model.User;
import util.HibernateUtil;

public class GoodsDao {

	public boolean addGoods(Goods goods){                                                  //����ڳ���Ʒ
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		session.save(goods);
		
		tx.commit();
		
	//	session.close();
		
		return true;
		
	}
	
	public boolean updateSupportsAndNowPrice(float nowPrice,Integer id){
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="update Goods g set g.supports=g.supports+1 where g.goodsId=?";
		String hql1="update Goods g set g.nowPrice=g.nowPrice+? where g.goodsId=?";
		
		
		Query query= session.createQuery(hql);
		Query query1=session.createQuery(hql1);
		
		query.setInteger(0, id);
		
		query1.setFloat(0, nowPrice);
		query1.setInteger(1, id);
		
		
		int result=query.executeUpdate();
		int r2=query1.executeUpdate();
		
		if(result==1){
			
			tx.commit();
			
		//	HibernateUtil.closeSession(session);
			
			return true;
		
		}else{
			
			tx.rollback();
			
	//		HibernateUtil.closeSession(session);
			
			return false;			
		}				
		
	}
	
	public Goods  showDetail(Integer id){
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		Goods g=(Goods) session.load(Goods.class, id);
		
		tx.commit();
		
	//	session.close();
		
		return g;
		
	}
	
	public List<Goods> checkGoods(){                                                             //�����Ʒ
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="from Goods g where g.checkState=0";                                           //û���������ӣ�
	
		Query query=session.createQuery(hql);
		
		List<Goods> unchecked=query.list();
		
		tx.commit();
		
	//	session.close();
		
		if(unchecked.size()!=0){
			
			return unchecked;			
		}		
		return null;
	}
	public boolean checkPass( Integer id){                                                                     //���ͨ��

		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="update Goods g set g.checkState=1 where g.goodsId=?";
		
		Query query= session.createQuery(hql);
		
		query.setInteger(0, id);
		
		int result=query.executeUpdate();
		
		if(result==1){
			
			tx.commit();
			
	//		HibernateUtil.closeSession(session);
			
			return true;
		
		}else{
			
			tx.rollback();
			
		//	HibernateUtil.closeSession(session);
			
			return false;			
		}				
	}
	public boolean checkReject( Integer id){                                                                     //��˾ܾ�

		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="update Goods g set g.checkState=2 where g.goodsId=?";
		
		Query query= session.createQuery(hql);
		
		query.setInteger(0, id);
		
		int result=query.executeUpdate();
		
		if(result==1){
			
			tx.commit();
			
	//		HibernateUtil.closeSession(session);
			
			return true;
		
		}else{
			
			tx.rollback();
			
	//		HibernateUtil.closeSession(session);
			
			return false;			
		}				
	}
	
	public List<Goods> showPassed(){                                                                             //�鿴�������Ʒ

		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="from Goods g where g.checkState=1";                                           
	
		Query query=session.createQuery(hql);

		List<Goods> passed=query.list();
		
		tx.commit();
		
	//	session.close();
		
		if(passed.size()!=0){
			
			return passed;			
		}	
		
		return null;
	}
	
	public boolean deleteGoods(Integer id){                                                                                      //ɾ����Ʒ
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		Goods g=(Goods)session.get(Goods.class, id);
		
		session.delete(g);
		
		tx.commit();
		
	//	HibernateUtil.closeSession(session);
		
		return true;
		
	}
	
	public List<Goods> showRejected(){                                                              //�鿴δ�����Ʒ
		
		Session session=HibernateUtil.getSession();
		
		Transaction tx=session.beginTransaction();
		
		String hql="from Goods g where g.checkState=2";                                           
	
		Query query=session.createQuery(hql);

		List<Goods> rejected=query.list();
		
		tx.commit();
		
	//	session.close();
		
		if(rejected.size()!=0){                                                                                //  if ������һ��
			
			return rejected;			
		}	
		return null;
	}
	
	
}
