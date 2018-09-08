package action;

import java.io.IOException;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import model.Goods;
import model.User;
import service.GoodsService;
import util.UploadProcess;

public class GoodsAction extends ActionSupport implements ModelDriven<Goods>{

	private static final long serialVersionUID = 5612643478267747553L;
	private GoodsService goodsService=new GoodsService();
	private Goods goods=new Goods();
	private List<Goods> checkGoods;
	private List<Goods> showPassed;
	private List<Goods> showRejected;
	private Integer checkId;                                                                    //�����������ID
    private Integer id;                                                                              //�û���������id
//	private Goods goodsDetail;
	public String index(){
		
		showPassed=goodsService.showPassed();
		
		return SUCCESS;
		
	}
	
	public String showDetail(){
		
		ActionContext.getContext().getSession().put("goodsDetail", goodsService.showDetail(id));
		
		return SUCCESS;
	}
	
	
	public String  toCreate(){
		
		User user=(User) ActionContext.getContext().getSession().get("userL");
		if(user==null){
			
			return ERROR;
			
		}
		
		return SUCCESS;
		
	}
	
	public String addGoods() throws Exception {                              //����ڳ���Ʒ
		
		User user=(User) ActionContext.getContext().getSession().get("userL");
		goods.setUserId(user.getUserId());                                                                      //�����ߵ�ID
		
		goods.setUserName(user.getUserName());
		goods.setCheckState(0);                                                              //0δ��ˣ�1ͨ����2�ܾ�
		
		this.uploadPicture();
		
		if(goodsService.addGoods(goods)){
						
			return SUCCESS;		
	    	}	
		return ERROR;		
	}
	public String checkGoods(){                                                             //����ڳ���Ʒ
		
		checkGoods=goodsService.checkGoods();
	//	ActionContext.getContext().getSession().put("checkGoods",goodsService.checkGoods());
			
		return SUCCESS;
		
	}
	
	public String RcheckPass(){                                                                //�ܾ���ͨ��
		
		if(goodsService.checkPass(checkId)){
			
			
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	public String checkPass(){                                                                //���ͨ��
		
		if(goodsService.checkPass(checkId)){
			
			
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	public String PcheckReject(){                                                             //ͨ����ܾ�
		
		if(goodsService.checkReject(checkId)){
	
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	
	public String checkReject(){                                                             //��˾ܾ�
		
		if(goodsService.checkReject(checkId)){
			
			
			
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	public String showPassed(){                                                             //�鿴�������Ʒ
		
		showPassed=goodsService.showPassed();
		//ActionContext.getContext().getSession().put("showPassed",goodsService.showPassed());
		
		
		return SUCCESS;
	}
	
	public String showRejected(){                                                           //�鿴�Ѿܾ���Ʒ
		
		showRejected=goodsService.showRejected();
	//	ActionContext.getContext().getSession().put("showRejected",goodsService.showRejected());
		return SUCCESS;
	}
	
	public String deleteGoods(){
		
		goodsService.deleteGoods(checkId);
			
			return SUCCESS;	
	}
	
	
	/**
	 * �����ϴ�ͼƬ������ԭͼ����ѹ������ԭͼ������ͼ���浽 ��������ָ���ļ����У� ������ԭͼ������ͼ�����ݿ��еı���·��
	 */
	public void uploadPicture() throws Exception {
		String UPLOAD_FOLDER = "upload";// ͼƬ�ϴ����ļ���
		// ԭͼ��ѹ��ͼƬ�ı���·��
		String[] srcImagePath = new String[] { "", "", "" };
		String[] smallImagePath = new String[] { "", "", "" };

		// ��ȡ������ʵ��·��
		String serverRealPath = ServletActionContext.getServletContext()
				.getRealPath("");

		// ѭ�������ϴ���ͼƬ
		for (int i = 0; i < goods.getPic().length; i++) {
			String filename = goods.getPicFileName()[i];
			if (filename.equals("")) {// ����ļ���Ϊ�գ�����������ͼƬ
				continue;
			}

			/** ����ͼƬ�ļ��ϴ������·�� */
			int index = filename.lastIndexOf(".");
			String extention = filename.substring(index + 1);// ����ļ���׺��
			String uploadFileName = System.currentTimeMillis()
					+ String.valueOf(i);// ��������ļ���������ϵͳ����ʱ��+ͼƬ���
			// �ϴ�ͼƬ���ļ����·��
			srcImagePath[i] =  UPLOAD_FOLDER + "\\" + uploadFileName
					+ "." + extention;
			// ѹ��ͼ���ļ����·��
			smallImagePath[i] = UPLOAD_FOLDER + "\\" + uploadFileName
					+ "small." + extention;

			/** �ļ��ϴ� */
			// ���ɾ���·��
			String srcImgRealpath = serverRealPath + "\\" + srcImagePath[i];// ԭͼ�ľ���·��
			String smallImgRealPath = serverRealPath + "\\" + smallImagePath[i];// ѹ��ͼ�ľ���·��
			
			// �ϴ�ԭͼ��ѹ��ͼ
			try {
				UploadProcess.uploadSrcImage(goods.getPic()[i], srcImgRealpath);// �ϴ�ԭͼ
				UploadProcess
						.uploadSmallImage(srcImgRealpath, smallImgRealPath);// �ϴ�ѹ��ͼ
			} catch (IOException e) {
				e.printStackTrace();
				System.out.println("�ļ��ϴ�ʧ��:" + e.getMessage());
				throw new Exception("�ļ��ϴ�ʧ��:" + e.getMessage());
			}

			/** �������ݿ���Ҫ�����ͼƬ��ַ */
			// ����Ե�ַ�е�"\\"�滻��"/"���Է�������ҳ�ϵ���ʾ·��
			srcImagePath[i] = srcImagePath[i].replace("\\", "/");
			smallImagePath[i] = smallImagePath[i].replace("\\", "/");

			// ��ӡ�ϴ������Ϣ
			System.out.println("��" + (i + 1) + "��ͼƬ" + filename + "�ϴ��ɹ�!");
			System.out.println("ԭͼ����Ϊ:" + srcImagePath[i]);
			System.out.println("ѹ��ͼ����Ϊ:" + smallImagePath[i]);
		}
		// �ֱ��趨�������Ŵ�ͼ������ͼ�ı���·��
		goods.setPicture1(srcImagePath[0]);
		goods.setShotcut1(smallImagePath[0]);

		goods.setPicture2(srcImagePath[1]);
		goods.setShotcut2(smallImagePath[1]);

		goods.setPicture3(srcImagePath[2]);
		goods.setShotcut3(smallImagePath[2]);

	}








	@Override
	public Goods getModel() {
		// TODO �Զ����ɵķ������
		return goods;
	}
	
	public Goods getGoods() {
		return goods;
	}

	public void setGoods(Goods goods) {
		this.goods = goods;
	}

	public Integer getCheckId() {
		return checkId;
	}
	public void setCheckId(Integer checkId) {
		this.checkId = checkId;
	}
	public List<Goods> getCheckGoods() {
		return checkGoods;
	}
	public void setCheckGoods(List<Goods> checkGoods) {
		this.checkGoods = checkGoods;
	}
	public List<Goods> getShowPassed() {
		return showPassed;
	}
	public void setShowPassed(List<Goods> showPassed) {
		this.showPassed = showPassed;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Goods> getShowRejected() {
		return showRejected;
	}

	public void setShowRejected(List<Goods> showRejected) {
		this.showRejected = showRejected;
	}

//	public Goods getGoodsDetail() {
//		return goodsDetail;
//	}
//
//	public void setGoodsDetail(Goods goodsDetail) {
//		this.goodsDetail = goodsDetail;
//	}
}
