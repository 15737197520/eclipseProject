package com.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.UserDAO;

/**
 * Servlet implementation class MoneyService
 */
@WebServlet("/MoneyService")
public class MoneyService extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MoneyService() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		String userId = request.getParameter("user_id");
		String Money = request.getParameter("money");
		String State = request.getParameter("state");
		
		int user_id = Integer.parseInt(userId);
		int money = Integer.parseInt(Money);
		int state = Integer.parseInt(State);
		UserDAO userDao = new UserDAO();
		int result=0;
		//设置返回给页面的参数
		PrintWriter out = response.getWriter();
		
		if(state==1){
			result = userDao.addMoney(user_id, money);
		}else{
			result = userDao.delMoneyForBuyPro(user_id, money);
		}
		
		if(result==1){
			out.write("操作成功");
		}else{
			out.write("操作失败");
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
