package action;

import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import dao.UserDao;
import model.Admin;
import model.User;
import service.AdminService;

public class AdminAction extends ActionSupport implements ModelDriven<Admin>{

	private static final long serialVersionUID = -7986916658997612L;	
	private AdminService ads=new AdminService();
	private Admin admin=new Admin();
	private Integer userId;
	private List<User> users;                                       //һ��Ҫ��get����������ȡ��
	
	
	
    
	public String login(){                                                         //����Ա��½
		
		if(admin.getAdminName().equals("")||admin.getAdminPassword().equals("")){
			
			return NONE;
		}		
		
		Admin returnAdmin=new Admin();
		
		returnAdmin=ads.login(admin);                                //�ɷ� admin=ads.login(admin)
		
		if(returnAdmin!=null){                                              //��������ϱ���������ȡֵ������
			
			ActionContext.getContext().getSession().put("admin", returnAdmin);
			ActionContext.getContext().getSession().remove("message");
			
			return SUCCESS;
		}		
		ActionContext.getContext().getSession().put("message", "�������");		
		return ERROR;
	}
	
	public String logout(){                                                         //����Ա�˳���½
		
		ActionContext.getContext().getSession().remove("admin");
		ActionContext.getContext().getSession().remove("message");
		
		return SUCCESS;
		
	}
	
	public String showUser(){                                                  //��ѯ����ǰ�Ȳ������û�
		
		users=ads.showAllUser();
		
		return SUCCESS;
	}
	
	public String showAllUser(){                                                  //��ѯ�����û�
		
		users=ads.showAllUser();
		
		return SUCCESS;
	}
	
	public String toModifyPage(){                                             //�޸�ǰ�Ȳ�ѯ
		
		User modifyUser=ads.toModifyPage(userId);  
		
		ActionContext.getContext().getSession().put("modifyUser", modifyUser);
		
		return SUCCESS;		
	}
	
	
	
	public String deleteUser(){                                                     //ɾ���û�
		
		ads.deleteUser(userId);
		
		return SUCCESS;
	}
	
	
	
	
	public Admin getModel() {
		
		return admin;
	}
	
	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

}
