package service;

import java.util.List;

import dao.AdminDao;
import dao.UserDao;
import model.Admin;
import model.User;

public class AdminService {

	private AdminDao ad=new AdminDao();        
	
	public Admin login(Admin admin){                                                                    //����Ա��½����
						
		if(admin==null||admin.getAdminName().isEmpty()||admin.getAdminPassword().isEmpty()){
			
			return null;			
		}		
		return ad.get(admin);		
	}
	
	public List<User> showAllUser(){                                                                          //��ѯ�����û�
		
		return ad.queryAllUser();
		
	}
	
	public User toModifyPage(Integer id){                                                                 //�޸�ǰ�Ȳ�ѯ
	
		User u=ad.toModifyPage(id);
		
		return u;
		
	}
	
	public boolean deleteUser(Integer id){                                                                   //ɾ���û�
		
		if(ad.deleteUser(id))
			
			return true	;
		
		return false;
	}
	
	
	
}
