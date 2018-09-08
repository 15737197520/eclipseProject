package service;

import dao.UserDao;
import model.User;

public class UserService {
	
	private UserDao userDao=new UserDao();
	
	public User userLogin(User u){                                                                         //�û���½
		
		return userDao.userLogin(u);
	}

	public boolean addUser(User user){                                                                     //����Ա������û�
		
	    if(userDao.addUser(user))
	    	
	    	return true;
	    
	    return false;
		
	}
	
	public boolean modifyUser(User user){                                                                             //�޸��û���Ϣ-����Ա
		
		if(userDao.modifyUser(user))
			
			return true;
		
		return false;
	}
	
}
