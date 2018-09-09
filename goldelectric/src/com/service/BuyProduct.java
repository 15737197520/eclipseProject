package com.service;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.AssetsDAO;
import com.dao.ProductDAO;
import com.dao.UserDAO;

/**
 * 购买产品
 */
@WebServlet(urlPatterns="/BuyProduct")
public class BuyProduct extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BuyProduct() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		String Total = request.getParameter("total");
		String User_id = request.getParameter("user_id");
		String Product_id = request.getParameter("product_id");
		String Price = request.getParameter("price");
		String Amount = request.getParameter("amount");
		String rate = request.getParameter("rate");
		String ProAmount = request.getParameter("ProAmount");
		
		int total=Integer.parseInt(Total);
		int user_id=Integer.parseInt(User_id);
		int product_id=Integer.parseInt(Product_id);
		int price=Integer.parseInt(Price);
		int amount=Integer.parseInt(Amount);
		int proAmount = Integer.parseInt(ProAmount);
		
		AssetsDAO assetsDao = new AssetsDAO(); 
		String star_time = dateFormat(new Date());
		String m = (String) request.getSession().getAttribute("Month");
		int i = Integer.parseInt(m);
		String end_time = getAfterMonth(star_time,i);		
		int result1 = assetsDao.buyProduct(user_id, product_id, price, amount, total, rate,star_time,end_time);
		int result2 = 0;
		int result3=0;
		//设置返回给页面的参数
		PrintWriter out = response.getWriter();
						
		if(result1==1){
			//购买成功后  从余额中减少对应的金额
			UserDAO userDao = new UserDAO();
			result2 = userDao.delMoneyForBuyPro(user_id, total);
			ProductDAO prodao = new ProductDAO();
			int am = proAmount-amount; 
			result3 = prodao.updatProAmount(product_id, am);
			if(result2==1&&result3==1){
				out.write("购买成功");
			}else{
				out.write("购买失败");
			}
		}else{
			out.write("购买失败");
		}
	}

	public String dateFormat(Date d) {
		SimpleDateFormat sim = new SimpleDateFormat("yyyy-MM-dd");
		return sim.format(d);
	}
	 public String  getAfterMonth(String startDate,int month) {  
	        Calendar c = Calendar.getInstance();//获得一个日历的实例     
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");     
	        Date date = null;     
	        try{     
	            date = sdf.parse(startDate);//初始日期     
	        }catch(Exception e){    
	        }     
	        c.setTime(date);//设置日历时间     
	        c.add(Calendar.MONTH,month);//在日历的月份上增加6个月     
	        String strDate = sdf.format(c.getTime());//的到你想要得6个月后的日期     
	        return strDate;  
	 }  
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
	}

}
