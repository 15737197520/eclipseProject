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
	private GoodsDao goodsDao=new GoodsDao(); //��������Goods�е�supports and nowPrice  Ҳ������CurrentSession ��һ��dao�в���
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
		goodsDao.updateSupportsAndNowPrice(order.getPrice(),order.getGoodsId());   //����֧��������Ŀǰ���
		
		
		return SUCCESS;
	}
	
	public String showOrder(){                                                        //�û���ѯ�Լ��Ķ���
		
		userorderList=orderDao.showOrder(id);
		
		return SUCCESS;
	}
	
public String showUserOrder(){                                                  //����Ա��ѯ�û��Ķ���
		
		orderList= orderDao.showOrder(id);
		
		return SUCCESS;
	}

public String deleteOrder(){                                                       //ɾ������
	System.out.println("OrderAction��orderid"+orderId);
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
