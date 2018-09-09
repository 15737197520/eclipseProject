package com.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.AssetsDAO;
import com.entity.Assets;

/**
 * Servlet implementation class ShowAssets
 */
@WebServlet("/ShowAssets")
public class ShowAssets extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowAssets() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String user_id = request.getParameter("user_id");
		int userId = Integer.parseInt(user_id);
		AssetsDAO a = new AssetsDAO();
		List<Assets> list = a.getAllById(userId);
		int total;
		double rate;
		double sum1 = 0;//总本金
		double sum2 = 0;//总利息
		for (int i = 0; i < list.size(); i++) {
			total = list.get(i).getTotal();
			rate = Double.parseDouble(list.get(i).getRate());
			sum1 += total;
			sum2 += total*(rate/100);
			
		}
		//request.setAttribute("sum1", sum1);
		//request.setAttribute("sum2", sum2);
		List<Double> resultList = new ArrayList();
		resultList.add(sum1);
		resultList.add(sum2);
		response.getWriter().print(resultList);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
