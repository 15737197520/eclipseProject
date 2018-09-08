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
	private List<User> users;                                       //一定要有get方法，才能取到
	
	
	
    
	public String login(){                                                         //管理员登陆
		
		if(admin.getAdminName().equals("")||admin.getAdminPassword().equals("")){
			
			return NONE;
		}		
		
		Admin returnAdmin=new Admin();
		
		returnAdmin=ads.login(admin);                                //可否 admin=ads.login(admin)
		
		if(returnAdmin!=null){                                              //如果不是上边这样最后获取值怎样获
			
			ActionContext.getContext().getSession().put("admin", returnAdmin);
			ActionContext.getContext().getSession().remove("message");
			
			return SUCCESS;
		}		
		ActionContext.getContext().getSession().put("message", "密码错误！");		
		return ERROR;
	}
	
	public String logout(){                                                         //管理员退出登陆
		
		ActionContext.getContext().getSession().remove("admin");
		ActionContext.getContext().getSession().remove("message");
		
		return SUCCESS;
		
	}
	
	public String showUser(){                                                  //查询订单前先查所有用户
		
		users=ads.showAllUser();
		
		return SUCCESS;
	}
	
	public String showAllUser(){                                                  //查询所有用户
		
		users=ads.showAllUser();
		
		return SUCCESS;
	}
	
	public String toModifyPage(){                                             //修改前先查询
		
		User modifyUser=ads.toModifyPage(userId);  
		
		ActionContext.getContext().getSession().put("modifyUser", modifyUser);
		
		return SUCCESS;		
	}
	
	
	
	public String deleteUser(){                                                     //删除用户
		
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
