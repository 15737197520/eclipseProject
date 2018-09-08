package util;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGEncodeParam;
import com.sun.image.codec.jpeg.JPEGImageEncoder;

/**
 * 文件上传处理类
 */
public class UploadProcess {
	
	private static final int SMALL_IMG_WIDTH = 100;// 压缩图片的宽度
	private static final int SMALL_IMG_HEIGHT = 80;// 压缩图片的高度
	
	/**
	 * 将用户上传的文件保存到指定路径
	 * 
	 * @param formFile 文件对象
	 * @param path 文件写出路径
	 * @throws IOException 
	 */
	public static  void uploadSrcImage(File file, String path) throws IOException {
		FileInputStream in = new FileInputStream(file);
		FileOutputStream fos = null;

		fos = new FileOutputStream(path);
		byte buffer[] = new byte[8192];
		int count = 0;
		// 开始向上传路径中刚建立的文件写入数据，每次写8k字节
		while ((count = in.read(buffer)) != -1) {
			fos.write(buffer, 0, count);
		}
		// 清空缓冲区
		fos.flush();
		// 关闭输出流
		fos.close();
	}
	
	/**
	 * 上传压缩图片
	 * 
	 * @param buffImg 要上传的图片
	 * @param path 上传的绝对路径
	 * @throws IOException
	 */
	public static void uploadSmallImage(String srcPath, String path)
			throws IOException {
		/** 生成压缩图并上传 */
		File srcFile = new File(srcPath);
		Image srcImage = ImageIO.read(srcFile);
		// 生成压缩图
		BufferedImage buffImg = getSmallImage(srcImage, SMALL_IMG_WIDTH,
				SMALL_IMG_HEIGHT);

		FileOutputStream fos = null;
		fos = new FileOutputStream(path);
		// 创建JPEG图像编码器，用于编码内存中的图像数据到JPEG数据输出流。
		JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(fos);
		JPEGEncodeParam jep = JPEGCodec.getDefaultJPEGEncodeParam(buffImg);
		// 编码BufferedImage对象到JPEG数据输出流。
		encoder.encode(buffImg, jep);
		fos.close();
	}

	/**
	 * 图片压缩。 指定图片的宽和高，按比例缩放。
	 * 
	 * @param srcImage 被压缩的源图片
	 * @param width 压缩图片的宽度
	 * @param height 压缩图片里的高度
	 * @return buffImge 压缩过的图像
	 */
	public static BufferedImage getSmallImage(Image srcImage, int width, int height) {
		// 为等比缩放计算输出的图片宽度及高度
		double rate1 = ((double) srcImage.getWidth(null)) / (double) width
				+ 0.1;
		double rate2 = ((double) srcImage.getHeight(null)) / (double) height
				+ 0.1;
		double rate = rate1 > rate2 ? rate1 : rate2;
		int new_width = (int) (((double) srcImage.getWidth(null)) / rate);
		int new_height = (int) (((double) srcImage.getHeight(null)) / rate);

		// 构造一个预定义的图像类型的BufferedImage对象。
		BufferedImage buffImg = new BufferedImage(width, height,
				BufferedImage.TYPE_INT_RGB);

		// 创建Graphics2D对象，用于在BufferedImage对象上绘图。
		Graphics2D g = buffImg.createGraphics();

		// 设置图形上下文的当前颜色为白色。
		g.setColor(Color.WHITE);
		// 用图形上下文的当前颜色填充指定的矩形区域。
		g.fillRect(0, 0, width, height);

		// 绘图(图片居中)
		g.drawImage(srcImage, (width - new_width) / 2,
				(height - new_height) / 2, new_width, new_height, null);
		return buffImg;
	}


}
