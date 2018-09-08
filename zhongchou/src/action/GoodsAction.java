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
	private Integer checkId;                                                                    //传过来的审核ID
    private Integer id;                                                                              //用户传过来的id
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
	
	public String addGoods() throws Exception {                              //添加众筹商品
		
		User user=(User) ActionContext.getContext().getSession().get("userL");
		goods.setUserId(user.getUserId());                                                                      //创建者的ID
		
		goods.setUserName(user.getUserName());
		goods.setCheckState(0);                                                              //0未审核，1通过，2拒绝
		
		this.uploadPicture();
		
		if(goodsService.addGoods(goods)){
						
			return SUCCESS;		
	    	}	
		return ERROR;		
	}
	public String checkGoods(){                                                             //审核众筹商品
		
		checkGoods=goodsService.checkGoods();
	//	ActionContext.getContext().getSession().put("checkGoods",goodsService.checkGoods());
			
		return SUCCESS;
		
	}
	
	public String RcheckPass(){                                                                //拒绝后通过
		
		if(goodsService.checkPass(checkId)){
			
			
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	public String checkPass(){                                                                //审核通过
		
		if(goodsService.checkPass(checkId)){
			
			
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	public String PcheckReject(){                                                             //通过后拒绝
		
		if(goodsService.checkReject(checkId)){
	
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	
	public String checkReject(){                                                             //审核拒绝
		
		if(goodsService.checkReject(checkId)){
			
			
			
			return SUCCESS;
		}
		
		return ERROR;
	}
	
	public String showPassed(){                                                             //查看已审核商品
		
		showPassed=goodsService.showPassed();
		//ActionContext.getContext().getSession().put("showPassed",goodsService.showPassed());
		
		
		return SUCCESS;
	}
	
	public String showRejected(){                                                           //查看已拒绝商品
		
		showRejected=goodsService.showRejected();
	//	ActionContext.getContext().getSession().put("showRejected",goodsService.showRejected());
		return SUCCESS;
	}
	
	public String deleteGoods(){
		
		goodsService.deleteGoods(checkId);
			
			return SUCCESS;	
	}
	
	
	/**
	 * 进行上传图片处理，对原图进行压缩，将原图和缩略图保存到 服务器的指定文件夹中， 并生成原图和缩略图在数据库中的保存路径
	 */
	public void uploadPicture() throws Exception {
		String UPLOAD_FOLDER = "upload";// 图片上传的文件夹
		// 原图和压缩图片的保存路径
		String[] srcImagePath = new String[] { "", "", "" };
		String[] smallImagePath = new String[] { "", "", "" };

		// 获取服务器实际路径
		String serverRealPath = ServletActionContext.getServletContext()
				.getRealPath("");

		// 循环处理上传的图片
		for (int i = 0; i < goods.getPic().length; i++) {
			String filename = goods.getPicFileName()[i];
			if (filename.equals("")) {// 如果文件名为空，则跳过这张图片
				continue;
			}

			/** 生成图片文件上传的相对路径 */
			int index = filename.lastIndexOf(".");
			String extention = filename.substring(index + 1);// 获得文件后缀名
			String uploadFileName = System.currentTimeMillis()
					+ String.valueOf(i);// 生成随机文件名，规则：系统当先时间+图片编号
			// 上传图片的文件相对路径
			srcImagePath[i] =  UPLOAD_FOLDER + "\\" + uploadFileName
					+ "." + extention;
			// 压缩图的文件相对路径
			smallImagePath[i] = UPLOAD_FOLDER + "\\" + uploadFileName
					+ "small." + extention;

			/** 文件上传 */
			// 生成绝对路径
			String srcImgRealpath = serverRealPath + "\\" + srcImagePath[i];// 原图的绝对路径
			String smallImgRealPath = serverRealPath + "\\" + smallImagePath[i];// 压缩图的绝对路径
			
			// 上传原图和压缩图
			try {
				UploadProcess.uploadSrcImage(goods.getPic()[i], srcImgRealpath);// 上传原图
				UploadProcess
						.uploadSmallImage(srcImgRealpath, smallImgRealPath);// 上传压缩图
			} catch (IOException e) {
				e.printStackTrace();
				System.out.println("文件上传失败:" + e.getMessage());
				throw new Exception("文件上传失败:" + e.getMessage());
			}

			/** 生成数据库中要保存的图片地址 */
			// 将相对地址中的"\\"替换成"/"，以符合在网页上的显示路径
			srcImagePath[i] = srcImagePath[i].replace("\\", "/");
			smallImagePath[i] = smallImagePath[i].replace("\\", "/");

			// 打印上传结果信息
			System.out.println("第" + (i + 1) + "张图片" + filename + "上传成功!");
			System.out.println("原图保存为:" + srcImagePath[i]);
			System.out.println("压缩图保存为:" + smallImagePath[i]);
		}
		// 分别设定房屋三张大图和缩略图的保存路径
		goods.setPicture1(srcImagePath[0]);
		goods.setShotcut1(smallImagePath[0]);

		goods.setPicture2(srcImagePath[1]);
		goods.setShotcut2(smallImagePath[1]);

		goods.setPicture3(srcImagePath[2]);
		goods.setShotcut3(smallImagePath[2]);

	}








	@Override
	public Goods getModel() {
		// TODO 自动生成的方法存根
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
