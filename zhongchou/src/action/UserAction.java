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
	
	public String userLogin(){                                                   //�û���½
		
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
			
			ActionContext.getContext().getSession().put("userLoginMessage", "�û������������");
			return ERROR;
		}
		
		
		
	}
	
	public String addUser(){                                                                           //����Ա�������û�
		
		if(userService.addUser(user)){
			
			ActionContext.getContext().getSession().put("addMessage", "��ӳɹ���");
			return SUCCESS;
			
		}
		ActionContext.getContext().getSession().put("addMessage", "���ʧ�ܣ�");
		
		return ERROR;
	
	}
	
	public String modifyUser(){                                                   //�޸��û� - ����Ա

	//	ActionContext.getContext().getSession().get("");            //�õ��޸���ID��һ�ְ취    �����԰��Ǹ������ŵ����action�
	//	user.setUserId(0);                                                               //������AdminAction������User
		
		if(userService.modifyUser(user)){
			
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	public String  userLogout(){                                                    //�˳���½      ���ؿ�ֵҲ���ԣ�
		
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
