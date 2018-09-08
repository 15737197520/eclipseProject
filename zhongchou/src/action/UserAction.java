package action;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import model.User;
import service.UserService;

public class UserAction extends ActionSupport implements ModelDriven<User>{

	private static final long serialVersionUID = -8534550171421612227L;
	private UserService userService =new UserService();
	private User user=new User();
	
	public String register(){
		
	if(	userService.addUser(user)){
		System.out.println("registersuccess");
		return SUCCESS;
	}
	System.out.println("registererror");
		return ERROR;
		
	}
	
	public String userLogin(){                                                   //用户登陆
		
		if(user.getUserName().equals("")||user.getPassword().equals("")){
			
			ActionContext.getContext().getSession().remove("userLoginMessage");
			
			return NONE;
		}
	
		user=userService.userLogin(user);
		
		if(user!=null){
			
			ActionContext.getContext().getSession().put("userL", user);
			System.out.println("loginsuccess");
			return SUCCESS;
			
		}else{
			
			ActionContext.getContext().getSession().put("userLoginMessage", "用户名或密码错误！");
			return ERROR;
		}
		
		
		
	}
	
	public String addUser(){                                                                           //管理员的增加用户
		
		if(userService.addUser(user)){
			
			ActionContext.getContext().getSession().put("addMessage", "添加成功！");
			return SUCCESS;
			
		}
		ActionContext.getContext().getSession().put("addMessage", "添加失败！");
		
		return ERROR;
	
	}
	
	public String modifyUser(){                                                   //修改用户 - 管理员

	//	ActionContext.getContext().getSession().get("");            //得到修改者ID的一种办法    还可以把那个方法放到这个action里，
	//	user.setUserId(0);                                                               //或者在AdminAction里声明User
		
		if(userService.modifyUser(user)){
			
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	public String  userLogout(){                                                    //退出登陆      返回空值也可以？
		
		ActionContext.getContext().getSession().remove("userL");
		
		return SUCCESS;
	}

	
	public User getModel() {
		
		return user;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


}
