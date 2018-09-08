package service;

import dao.UserDao;
import model.User;

public class UserService {
	
	private UserDao userDao=new UserDao();
	
	public User userLogin(User u){                                                                         //用户登陆
		
		return userDao.userLogin(u);
	}

	public boolean addUser(User user){                                                                     //管理员的添加用户
		
	    if(userDao.addUser(user))
	    	
	    	return true;
	    
	    return false;
		
	}
	
	public boolean modifyUser(User user){                                                                             //修改用户信息-管理员
		
		if(userDao.modifyUser(user))
			
			return true;
		
		return false;
	}
	
}
