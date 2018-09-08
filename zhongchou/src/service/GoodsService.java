package service;

import java.util.List;

import dao.GoodsDao;
import model.Goods;

public class GoodsService {

	private GoodsDao goodsDao =new GoodsDao();
	
	public boolean addGoods(Goods goods){                                           //添加众筹商品
		
		if(goodsDao.addGoods(goods))
			
			return true;
		
		return false;
		
	}
	
	public Goods  showDetail(Integer id){
		
		return goodsDao.showDetail(id);
	}
	
	public List<Goods> checkGoods(){                                                     //审核众筹商品
		
		return goodsDao.checkGoods();
	}
	
	public boolean checkPass(Integer id){                                                //审核通过
		
		if(goodsDao.checkPass(id))
			
			return true;
		
		return false;	
	}
	
	public boolean checkReject(Integer id){                                               //审核拒绝
		
		if(goodsDao.checkReject(id))
			
			return true;
		
		return false;	
	}
	
	public List<Goods> showPassed(){                                                        //查看已审核商品	
		
		return goodsDao.showPassed();	
	}
	
	public List<Goods> showRejected(){                                                      //查看已拒绝商品
			
		return goodsDao.showRejected();
	}
	
	public boolean deleteGoods(Integer id){
		
		return goodsDao.deleteGoods(id);
	}
	
}
