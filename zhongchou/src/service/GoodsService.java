package service;

import java.util.List;

import dao.GoodsDao;
import model.Goods;

public class GoodsService {

	private GoodsDao goodsDao =new GoodsDao();
	
	public boolean addGoods(Goods goods){                                           //����ڳ���Ʒ
		
		if(goodsDao.addGoods(goods))
			
			return true;
		
		return false;
		
	}
	
	public Goods  showDetail(Integer id){
		
		return goodsDao.showDetail(id);
	}
	
	public List<Goods> checkGoods(){                                                     //����ڳ���Ʒ
		
		return goodsDao.checkGoods();
	}
	
	public boolean checkPass(Integer id){                                                //���ͨ��
		
		if(goodsDao.checkPass(id))
			
			return true;
		
		return false;	
	}
	
	public boolean checkReject(Integer id){                                               //��˾ܾ�
		
		if(goodsDao.checkReject(id))
			
			return true;
		
		return false;	
	}
	
	public List<Goods> showPassed(){                                                        //�鿴�������Ʒ	
		
		return goodsDao.showPassed();	
	}
	
	public List<Goods> showRejected(){                                                      //�鿴�Ѿܾ���Ʒ
			
		return goodsDao.showRejected();
	}
	
	public boolean deleteGoods(Integer id){
		
		return goodsDao.deleteGoods(id);
	}
	
}
