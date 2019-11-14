CREATE DATABASE  IF NOT EXISTS `cs157a_project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cs157a_project`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cs157a_project
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(40) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(256) NOT NULL,
  `joined_datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `middle_initial` char(1) NOT NULL,
  `recovery_link` varchar(128) DEFAULT NULL,
  `recovery_exp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('0936b7e96ea02519b7e839d705b5bdc39ecd4c62','kyle@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kyle','Hertsch','A',NULL,NULL),('0aeeb34bfc4f2a809fd844f7962c424ad0a6cab5','jake@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kunda','Wu','P',NULL,NULL),('30f7777583458791c0d38b03b5622f0a55fca827','andre@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Andre','Giant','R',NULL,NULL),('43be4d2cb4d9303953d9a67558bdb5f12f0b1080','blake1@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','John','Wu','R',NULL,NULL),('451e9d4b4ef729fae59cfe8314d9c0223e65bfad','kunda@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2014-06-11 07:00:00','Tyler','Daas','D',NULL,NULL),('47e736ccf90bdcce94ab88ec1e61f5ee27380f41','maria@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Maria','Ramirez','D',NULL,NULL),('4be134e8b9f88c927db75528b026b9e2a1bbe40b','ab1123123@gmail.com','7723e8827a96a58c14315d3a461f065b29a7a59258d425d0b59807e01da95b5b','2019-11-11 01:55:07','Thong','Le','H',NULL,NULL),('511e98109fe4b2173ceed9fd9ff3be641348d19f','tee@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Thong','Le','Q',NULL,NULL),('51f73752260bede665168c3dcf14d02766ec0ef6','javawtee1@gmail.com','7723e8827a96a58c14315d3a461f065b29a7a59258d425d0b59807e01da95b5b','2019-11-11 01:57:25','Thong','Le','H',NULL,NULL),('675efce9c3cea8c1594391abbaabe0f51884f826','javawtee@gmail.com','7723e8827a96a58c14315d3a461f065b29a7a59258d425d0b59807e01da95b5b','2019-11-11 00:52:45','Thong','Le','H',NULL,NULL),('777ef73fa28dde6a24176b02626342c5f1973f77','doug@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Doug','Adams','L',NULL,NULL),('8c90ed032303797d804d51bb3ed0fde644364d6d','blake2@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Blake','Bortles','C',NULL,NULL),('9025f6f4ea9e9609ab7cb6fb79e6ae83112be4f8','john@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-10 07:00:00','John','McGinley','P',NULL,NULL),('9b8e38aab8629ac2fb75e6daf3a866bc9bfb251b','tyler@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Tyler','Adams','C',NULL,NULL),('a3d0f60c991e1f2d82b4a02c4eb8ebb18d718a24','tim@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Tim','Allen','Q',NULL,NULL),('ad058eb4684fb423be28a81c0dd2b0fe5453f5a5','rock@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Rock','Lee','N',NULL,NULL),('b11075737fdb90440d8156028010c740443c133b','isuoifuosiaufiosa@gmail.com','7723e8827a96a58c14315d3a461f065b29a7a59258d425d0b59807e01da95b5b','2019-11-11 01:56:19','Thong','Le','H',NULL,NULL),('c5633ce41bc8f6fe05d76bf2b5b4fea118e8f458','ramirez@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kim','Ramirez','S',NULL,NULL),('ca3de1a6f9290c2bb0ba58061df6ab6a19d9e34f','juan@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Juan','Lopez','D',NULL,NULL);
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

-- Dump completed on 2019-11-10 18:18:25
