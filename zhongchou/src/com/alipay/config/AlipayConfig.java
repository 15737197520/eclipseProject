package com.alipay.config;

import java.io.FileWriter;
import java.io.IOException;

/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *修改日期：2017-04-05
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。
 */

public class AlipayConfig {
	
//↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	// 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
	public static String app_id = "2016091300503045";
	
	// 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDMvx8EBb6tLLMa/t2prCcowS38ep2qdCk30QH6b4rmo47xhiv+AauO3HjS5qU6MrgQX4UriqNnM95UAJUKX5VmLMh4xoLKfykQRxYM8ATRwOY1o36k97b719SmW50mxeczmdJXD4qjLYRPUg5gnh06++xFi0kFYWVdswWhPuo3+gVQOImvIb9zdWgz1k6U2fuYUEPnH0VZmNA4Czkmn32v5ZnwHdgt4wUnF8Zc4eUA68yp3SbpSF8faDRr/Lvaf+Q0Mp/Y2UFa78EwXhmPX2trlhzP7iiYlbVc6kUc8EABq2j1wuTa+ZEbOYA+KVMENGkpuou7oOLKOC5zQIP3strNAgMBAAECggEAB/UJjIt4nJxXHZ54GOcC4peXZO+S/xPiojOyQvxgxpPms0ZGoWmJNFUnMPMbysY71w8PSuDpdtJSOquHH08VrFHjPKZiYOJOQz6wAbK2TTyU9dKz0k96QhFiR1DaK66XTK8WuKF2/t5+/OIwgtrCQg+WYCGIpffiC6Ewf9LFIYW5LZsRHv6XW7RU+X0a7ohsZKQJmrbGT/OJ0noR2Ewi964TjjWgjtWoiyEhOFVcjcjGANWUz01oIhAC3luOmv1OBE+ky+P+0ikZQElWpsBdFT4BLk27ImWuU4d24pNnbqr3QGnzc9rdR+NkGBk+ImauBiK0HkbAHbK1WpKADBon4QKBgQDuoudP2w+rNJYghQ443W2ly3Ab6+OJxw75QAFs0TmTxGfmk/JfKAO8iGGuPWlHUc1/J4bVkiMhI7cnOYJ3G+8yghBhBIkRGywApIulBUKGv8ewZlSQfm7IuK8cQh3fsv7K8KDuX0mI4J1uaFeNVFiYcY/SSlC/K6JAzOq9pfIQKQKBgQDbpPNGsAQsVp+wbr+ZhaKEh/uSJTVl3VVLqPKMRYTx4O7aBx6he3KYC2VZaHvX9ybEWhMC9Diyhy+AJN2tUh+eiXYPb2v1VZVgHjTcdU5CsB6WmIwU7FZ+XElj82rzPw4e1hLMlv6eHWTkJ4AiZLIPjpU9ajCj018LX2Ou8L16BQKBgE/BFAulS+xNK+t8bI9mubGSd0ptoOM4KvH0iUVj+5k+J/dw9K0Gw5DsB7FjBt92IHbhr/eK2sDFnf23A7ppFJ1NyMmT6XdVHHSuiZlCU8STLdrvqE2OY9ojlyqbkj5kJTGQEEj6gaoEX7k5mCE80ktIkOeYPLpXi+eaVM3DO05ZAoGAPmyY/6QS648K/5faOIW0dLo5E4YjsPnAviocFSXE7QGioLCZUgfFv9StT0XUvMJvcCqxcIt8ebDWHTNdFV9bwTEMLsLaCfXy6EhteaKVRXrMlrxwQ5oP0wXjjdamtM9c8gKhgSgA4Ws1O2rGjf/UY3uAit3dSRJP1umbaSLelwkCgYBpUDjRzNXC/StIPfEWsg3RxRHzmPRmP+trOG+LDWFkVl4Ktpwgg1etgG8aQ9X4Je4enb3x9rtLqUj5WCOqV8I8TszzV/ml+oZ493Kb4yW+nezIYO15JNMCwFCM+XlEyAFManoRIr4orBjdPYxnjLAY808hrTmtPDubMQ3QW13r2Q==";
	
	// 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA++TQVZbq4Uv7Nrsrj+tGerGcqNdHBvivmqMKJ1s//mQ1KbUUyvWfy8xIm/AgvRembpnlus/tRZrOXNWEbP9hNpYdZwSFbUvSmj8xPMpkwlnoAxkuLv17ObQe1CYUxzJp8RCNLRmsX9WweS7Fz4k9li0pZeXFrL5iO4y721aur0/9EbfXC4xHtb920ijnVHzEO/LmtKXQ+DBTzb4AgCbb3IhrxwiJss5UAADe3CH4mXCKkJfgfkJhetOsu/ohkTKlse7N+cu6oqAP2YiCSj6VVIIafNi9kMfSEp1U6pjB1yDKraoHgLgUVUYaQ0rBiBOJaxwh5SoJleECu19lQxo6DwIDAQAB";

	// 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String notify_url = "http://sdfg.free.ngrok.cc/zhongchou/user/notify_url.jsp";

	// 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String return_url = "http://sdfg.free.ngrok.cc/zhongchou/supported";

	// 签名方式
	public static String sign_type = "RSA2";
	//public static String sign_type = "RSA";
	// 字符编码格式
	public static String charset = "utf-8";
	
	// 支付宝网关
	public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";
	
	// 支付宝网关
	public static String log_path = "C:\\";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /** 
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

