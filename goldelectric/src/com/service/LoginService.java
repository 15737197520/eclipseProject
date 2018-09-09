package com.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.ProductDAO;
import com.dao.UserDAO;
import com.entity.Product;
import com.entity.User;

/**
 * Servlet 登录的方法
 */
@WebServlet("/LoginService")
public class LoginService extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public LoginService() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String username = request.getParameter("account");
		String password = request.getParameter("password");
		UserDAO userDAO=new UserDAO(); 
		User user=userDAO.login(username, password);
		String errorMessage = "帐号密码有误,请重新输入";
		if(user!=null){
			ProductDAO p = new ProductDAO();
			List<Product> list= p.getAllProduct();
			request.setAttribute("list", list);
			request.setAttribute("user", user);
			request.getRequestDispatcher("allProduct.jsp").forward(request, response);;
		}else{
			request.setAttribute("errorMessage", errorMessage);
			request.getRequestDispatcher("index.jsp").forward(request, response);
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
