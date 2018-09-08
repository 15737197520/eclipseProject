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
 * �ļ��ϴ�������
 */
public class UploadProcess {
	
	private static final int SMALL_IMG_WIDTH = 100;// ѹ��ͼƬ�Ŀ��
	private static final int SMALL_IMG_HEIGHT = 80;// ѹ��ͼƬ�ĸ߶�
	
	/**
	 * ���û��ϴ����ļ����浽ָ��·��
	 * 
	 * @param formFile �ļ�����
	 * @param path �ļ�д��·��
	 * @throws IOException 
	 */
	public static  void uploadSrcImage(File file, String path) throws IOException {
		FileInputStream in = new FileInputStream(file);
		FileOutputStream fos = null;

		fos = new FileOutputStream(path);
		byte buffer[] = new byte[8192];
		int count = 0;
		// ��ʼ���ϴ�·���иս������ļ�д�����ݣ�ÿ��д8k�ֽ�
		while ((count = in.read(buffer)) != -1) {
			fos.write(buffer, 0, count);
		}
		// ��ջ�����
		fos.flush();
		// �ر������
		fos.close();
	}
	
	/**
	 * �ϴ�ѹ��ͼƬ
	 * 
	 * @param buffImg Ҫ�ϴ���ͼƬ
	 * @param path �ϴ��ľ���·��
	 * @throws IOException
	 */
	public static void uploadSmallImage(String srcPath, String path)
			throws IOException {
		/** ����ѹ��ͼ���ϴ� */
		File srcFile = new File(srcPath);
		Image srcImage = ImageIO.read(srcFile);
		// ����ѹ��ͼ
		BufferedImage buffImg = getSmallImage(srcImage, SMALL_IMG_WIDTH,
				SMALL_IMG_HEIGHT);

		FileOutputStream fos = null;
		fos = new FileOutputStream(path);
		// ����JPEGͼ������������ڱ����ڴ��е�ͼ�����ݵ�JPEG�����������
		JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(fos);
		JPEGEncodeParam jep = JPEGCodec.getDefaultJPEGEncodeParam(buffImg);
		// ����BufferedImage����JPEG�����������
		encoder.encode(buffImg, jep);
		fos.close();
	}

	/**
	 * ͼƬѹ���� ָ��ͼƬ�Ŀ�͸ߣ����������š�
	 * 
	 * @param srcImage ��ѹ����ԴͼƬ
	 * @param width ѹ��ͼƬ�Ŀ��
	 * @param height ѹ��ͼƬ��ĸ߶�
	 * @return buffImge ѹ������ͼ��
	 */
	public static BufferedImage getSmallImage(Image srcImage, int width, int height) {
		// Ϊ�ȱ����ż��������ͼƬ��ȼ��߶�
		double rate1 = ((double) srcImage.getWidth(null)) / (double) width
				+ 0.1;
		double rate2 = ((double) srcImage.getHeight(null)) / (double) height
				+ 0.1;
		double rate = rate1 > rate2 ? rate1 : rate2;
		int new_width = (int) (((double) srcImage.getWidth(null)) / rate);
		int new_height = (int) (((double) srcImage.getHeight(null)) / rate);

		// ����һ��Ԥ�����ͼ�����͵�BufferedImage����
		BufferedImage buffImg = new BufferedImage(width, height,
				BufferedImage.TYPE_INT_RGB);

		// ����Graphics2D����������BufferedImage�����ϻ�ͼ��
		Graphics2D g = buffImg.createGraphics();

		// ����ͼ�������ĵĵ�ǰ��ɫΪ��ɫ��
		g.setColor(Color.WHITE);
		// ��ͼ�������ĵĵ�ǰ��ɫ���ָ���ľ�������
		g.fillRect(0, 0, width, height);

		// ��ͼ(ͼƬ����)
		g.drawImage(srcImage, (width - new_width) / 2,
				(height - new_height) / 2, new_width, new_height, null);
		return buffImg;
	}


}
