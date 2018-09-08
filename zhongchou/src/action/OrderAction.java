package action;

import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import dao.GoodsDao;
import dao.OrderDao;
import model.Order;
import model.User;

public class OrderAction extends ActionSupport implements ModelDriven<Order>{

	private Order order=new Order();
	private OrderDao orderDao=new OrderDao();
	private GoodsDao goodsDao=new GoodsDao(); //用来更新Goods中的supports and nowPrice  也可以用CurrentSession 在一个dao中操作
	private Integer id;
	private String orderId;
	private List<Order> orderList;
	private List<Order> userorderList;
	private List<Order> deleteOrderList;
	
	public String toOrder(){
		User user=(User) ActionContext.getContext().getSession().get("userL");
		if(user==null){
			
			return ERROR;
			
		}
		
		return SUCCESS;
	}
	
	public String createOrder(){
	
		orderDao.createOrder(order);
		goodsDao.updateSupportsAndNowPrice(order.getPrice(),order.getGoodsId());   //更新支持人数和目前筹款
		
		
		return SUCCESS;
	}
	
	public String showOrder(){                                                        //用户查询自己的订单
		
		userorderList=orderDao.showOrder(id);
		
		return SUCCESS;
	}
	
public String showUserOrder(){                                                  //管理员查询用户的订单
		
		orderList= orderDao.showOrder(id);
		
		return SUCCESS;
	}

public String deleteOrder(){                                                       //删除订单
	System.out.println("OrderAction中orderid"+orderId);
	orderDao.deleteOrder(orderId);
		
		return SUCCESS;
}

public String showDeleteOrder(){
	deleteOrderList=orderDao.showDeleteOrder();
	return"success";
}


	public Order getModel() {
		
		return order;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}



	public List<Order> getOrderList() {
		return orderList;
	}

	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}

	public List<Order> getDeleteOrderList() {
		return deleteOrderList;
	}

	public void setDeleteOrderList(List<Order> deleteOrderList) {
		this.deleteOrderList = deleteOrderList;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public List<Order> getUserorderList() {
		return userorderList;
	}

	public void setUserorderList(List<Order> userorderList) {
		this.userorderList = userorderList;
	}

}
