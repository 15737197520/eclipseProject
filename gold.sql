-- MySQL dump 10.13  Distrib 5.7.16, for Win64 (x86_64)
--
-- Host: localhost    Database: goldelectric
-- ------------------------------------------------------
-- Server version	5.7.16-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assets` (
  `assets_id` int(10) NOT NULL AUTO_INCREMENT,
  `product_id` int(10) DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  `amount` int(10) DEFAULT NULL,
  `total` int(10) DEFAULT NULL,
  `rate` varchar(4) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `endtime` datetime DEFAULT NULL,
  PRIMARY KEY (`assets_id`),
  KEY `product_id` (`product_id`),
  KEY `price` (`price`),
  KEY `rate` (`rate`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `assets_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assets_ibfk_2` FOREIGN KEY (`price`) REFERENCES `product` (`price`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assets_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
INSERT INTO `assets` VALUES (57,1,1000,1,1000,'6.11',1,'2018-09-25 00:00:00','2018-10-02 00:00:00'),(58,4,1000,1,1000,'6.78',1,'2018-09-25 00:00:00','2018-10-25 00:00:00'),(59,7,1000,1,1000,'7.47',1,'2018-09-25 00:00:00','2019-09-25 00:00:00');
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `product_id` int(10) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) DEFAULT NULL,
  `state` int(10) DEFAULT NULL COMMENT '商品状态  1，已上架  2  已下架  ',
  `price` int(10) DEFAULT NULL COMMENT '产品价格',
  `amount` int(10) DEFAULT NULL COMMENT '产品数量',
  `total` int(10) DEFAULT NULL,
  `month` int(2) DEFAULT NULL,
  `rate` decimal(4,2) DEFAULT NULL,
  `type` int(2) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `user_id` (`total`),
  KEY `price` (`price`),
  KEY `rate` (`rate`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'日息宝A计划',1,1000,93,100000,7,6.11,1),(2,'日息宝B计划',1,2000,91,200000,14,7.22,1),(3,'日息宝C计划',1,3000,98,300000,21,8.33,1),(4,'月息宝A计划',1,1000,97,100000,1,6.78,2),(5,'月息宝B计划',1,2000,98,200000,3,7.92,2),(6,'月息宝C计划',1,3000,100,300000,6,8.94,2),(7,'年息宝A计划',1,1000,98,100000,1,7.47,3),(8,'年息宝B计划',1,2000,98,200000,2,8.39,3),(9,'年息宝C计划',1,3000,99,300000,3,9.50,3),(10,'日息宝D计划',0,4000,100,400000,6,10.12,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `account` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `sex` varchar(3) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `role_id` int(10) DEFAULT NULL COMMENT '角色ID  1管理员  2普通用户 3会员用户',
  `money` int(10) DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'张三','admin','123456','男',20,1,34000);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-28 13:35:18
