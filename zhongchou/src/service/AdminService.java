package service;

import java.util.List;

import dao.AdminDao;
import dao.UserDao;
import model.Admin;
import model.User;

public class AdminService {

	private AdminDao ad=new AdminDao();        
	
	public Admin login(Admin admin){                                                                    //管理员登陆方法
						
		if(admin==null||admin.getAdminName().isEmpty()||admin.getAdminPassword().isEmpty()){
			
			return null;			
		}		
		return ad.get(admin);		
	}
	
	public List<User> showAllUser(){                                                                          //查询所有用户
		
		return ad.queryAllUser();
		
	}
	
	public User toModifyPage(Integer id){                                                                 //修改前先查询
	
		User u=ad.toModifyPage(id);
		
		return u;
		
	}
	
	public boolean deleteUser(Integer id){                                                                   //删除用户
		
		if(ad.deleteUser(id))
			
			return true	;
		
		return false;
	}
	
	
	
}
