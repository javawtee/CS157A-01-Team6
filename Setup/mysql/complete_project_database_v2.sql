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
-- Table structure for table `airport`
--

DROP TABLE IF EXISTS `airport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airport` (
  `code` varchar(3) NOT NULL,
  `name` varchar(256) NOT NULL,
  `location_id` int(11) NOT NULL,
  PRIMARY KEY (`code`,`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airport`
--

LOCK TABLES `airport` WRITE;
/*!40000 ALTER TABLE `airport` DISABLE KEYS */;
INSERT INTO `airport` VALUES ('ATL','Hartsfield–Jackson Atlanta International Airport',1),('BOS','Logan International Airport',2),('CLT','Charlotte Douglas International Airport',3),('DEN','Denver International Airport',4),('DFW','Dallas/Fort Worth International Airport',5),('DTW','Detroit Metropolitan Airport',6),('EWR','Newark Liberty International Airport',7),('FLL','Fort Lauderdale–Hollywood International Airport',8),('IAH','George Bush Intercontinental Airport',9),('JFK','John F. Kennedy International Airport',10),('LAS','McCarran International Airport',11),('LAX','Los Angeles International Airport',12),('LGA','LaGuardia Airport',10),('MCO','Orlando International Airport',13),('MIA','Miami International Airport',14),('MSP','Minneapolis–Saint Paul International Airport',15),('ORD','O\'Hare International Airport',16),('PHL','Philadelphia International Airport',17),('PHX','Phoenix Sky Harbor International Airport',18),('SEA','Seattle–Tacoma International Airport',19),('SFO','San Francisco International Airport',20),('SJC','Norman Y. Mineta San Jose International Airport',21);
/*!40000 ALTER TABLE `airport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `booking_number` varchar(255) NOT NULL,
  `booking_datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `booking_class` varchar(45) NOT NULL,
  `booking_price` double NOT NULL,
  PRIMARY KEY (`booking_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES ('0FF4400','2019-11-30 11:18:40','business',287),('D78805A','2019-11-30 11:18:40','business',207);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_passenger`
--

DROP TABLE IF EXISTS `booking_passenger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_passenger` (
  `booking_number` varchar(255) NOT NULL,
  `passenger_ID` varchar(45) NOT NULL,
  `booking_status` varchar(45) DEFAULT 'Normal',
  `confirmation_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`booking_number`,`passenger_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_passenger`
--

LOCK TABLES `booking_passenger` WRITE;
/*!40000 ALTER TABLE `booking_passenger` DISABLE KEYS */;
INSERT INTO `booking_passenger` VALUES ('0FF4400','123123138888','Cancelled','JohnPatMcGinley@gmail.com'),('0FF4400','12312313qweqe','Normal','javawtee@gmail.com'),('0FF4400','54646546546','Normal','kunda.wu@sjsu.edu'),('D78805A','123123138888','Cancelled','JohnPatMcGinley@gmail.com'),('D78805A','12312313qweqe','Cancelled','javawtee@gmail.com'),('D78805A','54646546546','Normal','kunda.wu@sjsu.edu');
/*!40000 ALTER TABLE `booking_passenger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight` (
  `flight_id` int(11) NOT NULL AUTO_INCREMENT,
  `departure_datetime` timestamp NOT NULL,
  `depart_from` varchar(45) NOT NULL,
  `arrival_datetime` timestamp NOT NULL,
  `arrive_to` varchar(45) NOT NULL,
  `flight_status` varchar(45) NOT NULL,
  `economy_price` double NOT NULL DEFAULT '0',
  `economy_seats` int(10) NOT NULL DEFAULT '0',
  `business_price` double NOT NULL DEFAULT '0',
  `business_seats` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`flight_id`,`departure_datetime`,`depart_from`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight`
--

LOCK TABLES `flight` WRITE;
/*!40000 ALTER TABLE `flight` DISABLE KEYS */;
INSERT INTO `flight` VALUES (1,'2019-12-26 15:00:00','ATL','2019-12-26 17:00:00','BOS','On Time',100,15,300,10),(2,'2019-12-26 22:00:00','CLT','2019-12-27 00:00:00','SJC','On Time',100,15,300,10),(3,'2019-12-26 22:00:00','SJC','2019-12-27 00:00:00','CLT','On Time',100,15,300,10),(4,'2019-12-26 00:00:00','DEN','2019-12-26 04:00:00','DFW','On Time',100,15,300,10),(5,'2019-12-26 15:00:00','DFW','2019-12-26 17:00:00','DEN','On Time',100,15,300,10),(6,'2019-12-26 15:00:00','DTW','2019-12-26 16:30:00','EWR','On Time',100,15,300,10),(7,'2019-12-26 16:00:00','FLL','2019-12-26 17:00:00','IAH','On Time',100,15,300,10),(8,'2019-12-26 01:00:00','IAH','2019-12-26 03:00:00','FLL','On Time',100,15,300,10),(9,'2019-12-26 23:00:00','JFK','2019-12-27 01:00:00','LGA','On Time',100,15,300,10),(10,'2019-12-26 22:00:00','LGA','2019-12-26 03:00:00','JFK','On Time',100,15,300,10),(11,'2019-12-26 15:00:00','MCO','2019-12-26 17:00:00','MIA','On Time',100,15,300,10),(12,'2019-12-26 17:00:00','MSP','2019-12-26 19:00:00','ORD','On Time',100,15,300,10),(13,'2019-12-26 19:00:00','PHL','2019-12-26 20:00:00','PHX','On Time',100,15,300,10),(14,'2019-12-26 22:00:00','SEA','2019-12-26 21:00:00','SFO','On Time',100,15,300,10),(15,'2019-12-10 21:00:00','SJC','2019-12-11 01:00:00','LAS','On Time',93,3,193,1),(16,'2019-12-11 01:00:00','SJC','2019-12-11 05:00:00','LAS','On Time',193,87,293,7),(17,'2019-12-11 05:00:00','SJC','2019-12-11 09:00:00','LAS','On Time',96,4,196,2),(18,'2019-12-11 09:00:00','SJC','2019-12-11 13:00:00','LAS','On Time',107,23,207,4),(19,'2019-12-11 17:00:00','SJC','2019-12-11 21:00:00','LAS','On Time',196,56,296,6),(20,'2019-12-11 21:00:00','SJC','2019-12-12 01:00:00','LAS','On Time',112,23,212,3),(21,'2019-12-12 01:00:00','SJC','2019-12-12 05:00:00','LAS','On Time',110,71,210,1),(22,'2019-12-12 05:00:00','SJC','2019-12-12 09:00:00','LAS','On Time',82,90,182,0),(23,'2019-12-12 09:00:00','SJC','2019-12-12 13:00:00','LAS','On Time',115,38,215,8),(24,'2019-12-12 17:00:00','SJC','2019-12-12 21:00:00','LAS','On Time',82,72,182,2),(25,'2019-12-12 21:00:00','SJC','2019-12-13 01:00:00','LAS','On Time',44,27,144,7),(26,'2019-12-13 01:00:00','SJC','2019-12-13 05:00:00','LAS','On Time',197,65,297,5),(27,'2019-12-13 05:00:00','SJC','2019-12-13 09:00:00','LAS','On Time',98,54,198,4),(28,'2019-12-13 09:00:00','SJC','2019-12-13 13:00:00','LAS','On Time',191,19,291,9),(29,'2019-12-13 17:00:00','SJC','2019-12-13 21:00:00','LAS','On Time',163,30,263,0),(30,'2019-12-13 21:00:00','SJC','2019-12-14 01:00:00','LAS','On Time',88,41,188,1),(31,'2019-12-14 01:00:00','SJC','2019-12-14 05:00:00','LAS','On Time',185,45,285,5),(32,'2019-12-14 05:00:00','SJC','2019-12-14 09:00:00','LAS','On Time',76,20,176,0),(33,'2019-12-14 09:00:00','SJC','2019-12-14 13:00:00','LAS','On Time',92,29,192,9),(34,'2019-12-14 17:00:00','SJC','2019-12-14 21:00:00','LAS','On Time',161,56,261,6),(35,'2019-12-14 21:00:00','SJC','2019-12-15 01:00:00','LAS','On Time',42,39,142,9),(36,'2019-12-15 01:00:00','SJC','2019-12-15 05:00:00','LAS','On Time',108,68,208,8),(37,'2019-12-15 05:00:00','SJC','2019-12-15 09:00:00','LAS','On Time',133,46,233,6),(38,'2019-12-15 09:00:00','SJC','2019-12-15 13:00:00','LAS','On Time',119,51,219,1),(39,'2019-12-15 17:00:00','SJC','2019-12-15 21:00:00','LAS','On Time',108,83,208,3),(40,'2019-12-15 21:00:00','SJC','2019-12-16 01:00:00','LAS','On Time',144,25,244,5),(41,'2019-12-15 00:00:00','LAS','2019-12-15 04:00:00','SJC','On Time',176,57,276,0),(42,'2019-12-15 04:00:00','LAS','2019-12-15 08:00:00','SJC','On Time',135,47,235,0),(43,'2019-12-15 08:00:00','LAS','2019-12-15 12:00:00','SJC','On Time',187,81,287,0),(44,'2019-12-15 16:00:00','LAS','2019-12-15 20:00:00','SJC','On Time',78,3,178,2),(45,'2019-12-15 20:00:00','LAS','2019-12-16 00:00:00','SJC','On Time',66,100,166,0),(46,'2019-12-16 00:00:00','LAS','2019-12-16 04:00:00','SJC','On Time',95,68,195,8),(47,'2019-12-16 04:00:00','LAS','2019-12-16 08:00:00','SJC','On Time',172,83,272,3),(48,'2019-12-16 08:00:00','LAS','2019-12-16 12:00:00','SJC','On Time',140,39,240,9),(49,'2019-12-16 16:00:00','LAS','2019-12-16 20:00:00','SJC','On Time',55,24,155,4),(50,'2019-12-16 20:00:00','LAS','2019-12-17 00:00:00','SJC','On Time',52,85,152,5),(51,'2019-12-17 00:00:00','LAS','2019-12-17 04:00:00','SJC','On Time',74,22,174,2),(52,'2019-12-17 04:00:00','LAS','2019-12-17 08:00:00','SJC','On Time',110,58,210,8),(53,'2019-12-17 08:00:00','LAS','2019-12-17 12:00:00','SJC','On Time',125,80,225,0),(54,'2019-12-17 16:00:00','LAS','2019-12-17 20:00:00','SJC','On Time',160,30,260,0),(55,'2019-12-17 20:00:00','LAS','2019-12-18 00:00:00','SJC','On Time',100,75,200,5),(56,'2019-12-18 00:00:00','LAS','2019-12-18 04:00:00','SJC','On Time',162,47,262,7),(57,'2019-12-18 04:00:00','LAS','2019-12-18 08:00:00','SJC','On Time',40,54,140,4),(58,'2019-12-18 08:00:00','LAS','2019-12-18 12:00:00','SJC','On Time',54,54,154,4),(59,'2019-12-18 16:00:00','LAS','2019-12-18 20:00:00','SJC','On Time',158,47,258,7),(60,'2019-12-18 20:00:00','LAS','2019-12-19 00:00:00','SJC','On Time',190,51,290,1),(61,'2019-12-19 00:00:00','LAS','2019-12-19 04:00:00','SJC','On Time',69,94,169,4),(62,'2019-12-19 04:00:00','LAS','2019-12-19 08:00:00','SJC','On Time',132,67,232,7),(63,'2019-12-19 08:00:00','LAS','2019-12-19 12:00:00','SJC','On Time',179,29,279,9),(64,'2019-12-19 16:00:00','LAS','2019-12-19 20:00:00','SJC','On Time',149,79,249,9),(65,'2019-12-19 20:00:00','LAS','2019-12-20 00:00:00','SJC','On Time',190,96,290,6),(66,'2019-12-20 00:00:00','LAS','2019-12-20 04:00:00','SJC','On Time',53,58,153,8),(67,'2019-12-12 21:00:00','SJC','2019-12-12 23:00:00','LAX','On Time',141,85,241,5),(68,'2019-12-12 23:00:00','SJC','2019-12-13 01:00:00','LAX','On Time',67,23,167,3),(69,'2019-12-13 01:00:00','SJC','2019-12-13 03:00:00','LAX','On Time',165,21,265,1),(70,'2019-12-13 03:00:00','SJC','2019-12-13 05:00:00','LAX','On Time',63,89,163,9),(71,'2019-12-13 05:00:00','SJC','2019-12-13 07:00:00','LAX','On Time',110,60,210,0),(72,'2019-12-13 07:00:00','SJC','2019-12-13 09:00:00','LAX','On Time',130,77,230,7),(73,'2019-12-13 09:00:00','SJC','2019-12-13 11:00:00','LAX','On Time',83,54,183,4),(74,'2019-12-13 11:00:00','SJC','2019-12-13 13:00:00','LAX','On Time',197,30,297,0),(75,'2019-12-13 13:00:00','SJC','2019-12-13 15:00:00','LAX','On Time',184,87,284,7),(76,'2019-12-13 17:00:00','SJC','2019-12-13 19:00:00','LAX','On Time',125,86,225,6),(77,'2019-12-13 19:00:00','SJC','2019-12-13 21:00:00','LAX','On Time',86,94,186,4),(78,'2019-12-13 21:00:00','SJC','2019-12-13 23:00:00','LAX','On Time',54,98,154,8),(79,'2019-12-13 23:00:00','SJC','2019-12-14 01:00:00','LAX','On Time',128,30,228,0),(80,'2019-12-14 01:00:00','SJC','2019-12-14 03:00:00','LAX','On Time',46,59,146,9),(81,'2019-12-14 03:00:00','SJC','2019-12-14 05:00:00','LAX','On Time',93,20,193,0),(82,'2019-12-14 05:00:00','SJC','2019-12-14 07:00:00','LAX','On Time',188,87,288,7),(83,'2019-12-14 07:00:00','SJC','2019-12-14 09:00:00','LAX','On Time',117,38,217,8),(84,'2019-12-14 09:00:00','SJC','2019-12-14 11:00:00','LAX','On Time',174,43,274,3),(85,'2019-12-14 11:00:00','SJC','2019-12-14 13:00:00','LAX','On Time',43,77,143,7),(86,'2019-12-14 13:00:00','SJC','2019-12-14 15:00:00','LAX','On Time',173,31,273,1),(87,'2019-12-14 17:00:00','SJC','2019-12-14 19:00:00','LAX','On Time',111,36,211,6),(88,'2019-12-14 19:00:00','SJC','2019-12-14 21:00:00','LAX','On Time',197,67,297,7),(89,'2019-12-14 21:00:00','SJC','2019-12-14 23:00:00','LAX','On Time',68,89,168,9),(90,'2019-12-14 23:00:00','SJC','2019-12-15 01:00:00','LAX','On Time',53,67,153,7),(91,'2019-12-15 01:00:00','SJC','2019-12-15 03:00:00','LAX','On Time',62,91,162,1),(92,'2019-12-15 03:00:00','SJC','2019-12-15 05:00:00','LAX','On Time',132,90,232,0),(93,'2019-12-16 00:00:00','LAX','2019-12-16 02:00:00','SJC','On Time',53,35,153,5),(94,'2019-12-16 02:00:00','LAX','2019-12-16 04:00:00','SJC','On Time',135,96,235,6),(95,'2019-12-16 04:00:00','LAX','2019-12-16 06:00:00','SJC','On Time',148,33,248,3),(96,'2019-12-16 06:00:00','LAX','2019-12-16 08:00:00','SJC','On Time',134,68,234,8),(97,'2019-12-16 08:00:00','LAX','2019-12-16 10:00:00','SJC','On Time',76,66,176,6),(98,'2019-12-16 10:00:00','LAX','2019-12-16 12:00:00','SJC','On Time',76,96,176,6),(99,'2019-12-16 12:00:00','LAX','2019-12-16 14:00:00','SJC','On Time',58,27,158,7),(100,'2019-12-16 16:00:00','LAX','2019-12-16 18:00:00','SJC','On Time',153,63,253,3),(101,'2019-12-16 18:00:00','LAX','2019-12-16 20:00:00','SJC','On Time',178,71,278,1),(102,'2019-12-16 20:00:00','LAX','2019-12-16 22:00:00','SJC','On Time',199,54,299,4),(103,'2019-12-16 22:00:00','LAX','2019-12-17 00:00:00','SJC','On Time',176,23,276,3),(104,'2019-12-17 00:00:00','LAX','2019-12-17 02:00:00','SJC','On Time',108,100,208,0),(105,'2019-12-17 02:00:00','LAX','2019-12-17 04:00:00','SJC','On Time',164,19,264,9),(106,'2019-12-17 04:00:00','LAX','2019-12-17 06:00:00','SJC','On Time',126,55,226,5),(107,'2019-12-17 06:00:00','LAX','2019-12-17 08:00:00','SJC','On Time',125,88,225,8),(108,'2019-12-17 08:00:00','LAX','2019-12-17 10:00:00','SJC','On Time',151,29,251,9),(109,'2019-12-17 10:00:00','LAX','2019-12-17 12:00:00','SJC','On Time',197,72,297,2),(110,'2019-12-17 12:00:00','LAX','2019-12-17 14:00:00','SJC','On Time',103,72,203,2),(111,'2019-12-17 16:00:00','LAX','2019-12-17 18:00:00','SJC','On Time',73,54,173,4),(112,'2019-12-17 18:00:00','LAX','2019-12-17 20:00:00','SJC','On Time',77,90,177,0),(113,'2019-12-17 20:00:00','LAX','2019-12-17 22:00:00','SJC','On Time',74,68,174,8),(114,'2019-12-17 22:00:00','LAX','2019-12-18 00:00:00','SJC','On Time',142,20,242,0),(115,'2019-12-18 00:00:00','LAX','2019-12-18 02:00:00','SJC','On Time',132,52,232,2),(116,'2019-12-18 02:00:00','LAX','2019-12-18 04:00:00','SJC','On Time',79,72,179,2),(117,'2019-12-18 04:00:00','LAX','2019-12-18 06:00:00','SJC','On Time',65,84,165,4),(118,'2019-12-18 06:00:00','LAX','2019-12-18 08:00:00','SJC','On Time',155,59,255,9);
/*!40000 ALTER TABLE `flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  PRIMARY KEY (`location_id`),
  UNIQUE KEY `city_UNIQUE` (`city`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Atlanta','GA'),(2,'Boston','MA'),(3,'Charlotte','NC'),(4,'Denver','CO'),(5,'Dallas/Fort Worth','TX'),(6,'Detroit','MI'),(7,'New York/Newark','NJ'),(8,'Fort Lauderdale','FL'),(9,'Houston','TX'),(10,'New York','NY'),(11,'Las Vegas','NV'),(12,'Los Angeles','CA'),(13,'Orlando','FL'),(14,'Miami','FL'),(15,'Minneapolis/St. Paul','MN'),(16,'Chicago','IL'),(17,'Philadelphia','PA'),(18,'Phoenix','AZ'),(19,'Seattle/Tacoma','WA'),(20,'San Francisco','CA'),(21,'San Jose','CA');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passenger`
--

DROP TABLE IF EXISTS `passenger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passenger` (
  `passenger_ID` varchar(45) NOT NULL,
  `ID_Type` varchar(45) NOT NULL,
  `passenger_firstname` varchar(255) NOT NULL,
  `passenger_lastname` varchar(255) NOT NULL,
  `passenger_middleinitial` char(1) DEFAULT NULL,
  PRIMARY KEY (`passenger_ID`,`ID_Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passenger`
--

LOCK TABLES `passenger` WRITE;
/*!40000 ALTER TABLE `passenger` DISABLE KEYS */;
INSERT INTO `passenger` VALUES ('123123138888','Driver License','John','McGinley','P'),('12312313qweqe','Passport','Thong','Le','H'),('54646546546','Passport','Kunda','wu',NULL);
/*!40000 ALTER TABLE `passenger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preference`
--

DROP TABLE IF EXISTS `preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference` (
  `preference_id` int(11) NOT NULL AUTO_INCREMENT,
  `depart_time` varchar(45) DEFAULT 'any',
  `arrive_time` varchar(45) DEFAULT 'any',
  `flight_class` varchar(45) DEFAULT 'any',
  `max_price` double DEFAULT '500',
  `sort_by` varchar(45) DEFAULT 'depTime',
  PRIMARY KEY (`preference_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preference`
--

LOCK TABLES `preference` WRITE;
/*!40000 ALTER TABLE `preference` DISABLE KEYS */;
INSERT INTO `preference` VALUES (1,'any','any','any',200,'price'),(2,'12to6','any','any',500,'depTime'),(3,'any','any','any',500,'depTime'),(4,'any','any','any',500,'depTime');
/*!40000 ALTER TABLE `preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_login`
--

DROP TABLE IF EXISTS `test_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_login` (
  `id` int(11) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `password` varchar(256) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_login`
--

LOCK TABLES `test_login` WRITE;
/*!40000 ALTER TABLE `test_login` DISABLE KEYS */;
INSERT INTO `test_login` VALUES (1,'javawtee@gmail.com','8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92','Thong Le'),(2,'johnpatmcginley@gmail.com','472bbe83616e93d3c09a79103ae47d8f71e3d35a966d6e8b22f743218d04171d','John McGinley'),(3,'kunda.wu@sjsu.edu','b7158b64a98516b31d0c23609f69265a868c594dda5b3c8da9e13159e209c9b6','Kunda Wu');
/*!40000 ALTER TABLE `test_login` ENABLE KEYS */;
UNLOCK TABLES;

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
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `middle_initial` char(1) NOT NULL,
  `recovery_link` varchar(256) DEFAULT NULL,
  `recovery_exp` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('0936b7e96ea02519b7e839d705b5bdc39ecd4c62','kyle@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kyle','Hertsch','A',NULL,NULL),('0aeeb34bfc4f2a809fd844f7962c424ad0a6cab5','jake@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kunda','Wu','P',NULL,NULL),('30f7777583458791c0d38b03b5622f0a55fca827','andre@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Andre','Giant','R',NULL,NULL),('43be4d2cb4d9303953d9a67558bdb5f12f0b1080','blake1@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','John','Wu','R',NULL,NULL),('451e9d4b4ef729fae59cfe8314d9c0223e65bfad','kunda@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2014-06-11 07:00:00','Tyler','Daas','D',NULL,NULL),('47e736ccf90bdcce94ab88ec1e61f5ee27380f41','maria@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Maria','Ramirez','D',NULL,NULL),('4be134e8b9f88c927db75528b026b9e2a1bbe40b','ab1123123@gmail.com','f22a8d9baa5f3674e2181656192c34d7d5a3e68ecd61ce7b55a68ab9f789c896','2019-11-11 01:55:07','Thong','Le','H',NULL,NULL),('511e98109fe4b2173ceed9fd9ff3be641348d19f','tee@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Thong','Le','Q',NULL,NULL),('51f73752260bede665168c3dcf14d02766ec0ef6','javawtee1@gmail.com','7723e8827a96a58c14315d3a461f065b29a7a59258d425d0b59807e01da95b5b','2019-11-18 01:18:05','Thong','Le','H',NULL,NULL),('675efce9c3cea8c1594391abbaabe0f51884f826','javawtee@gmail.com','7723e8827a96a58c14315d3a461f065b29a7a59258d425d0b59807e01da95b5b','2019-11-30 10:58:00','Thong','Le','H',NULL,NULL),('777ef73fa28dde6a24176b02626342c5f1973f77','doug@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Doug','Adams','L',NULL,NULL),('8c90ed032303797d804d51bb3ed0fde644364d6d','blake2@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Blake','Bortles','C',NULL,NULL),('9025f6f4ea9e9609ab7cb6fb79e6ae83112be4f8','john@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-10 07:00:00','John','McGinley','P',NULL,NULL),('957e6c3661b0c40ca6813accac8b2e1ce570f514','javawtee2@gmail.com','f22a8d9baa5f3674e2181656192c34d7d5a3e68ecd61ce7b55a68ab9f789c896','2019-11-12 17:11:59','Thong','Le','H',NULL,NULL),('9b8e38aab8629ac2fb75e6daf3a866bc9bfb251b','tyler@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Tyler','Adams','C',NULL,NULL),('a3d0f60c991e1f2d82b4a02c4eb8ebb18d718a24','tim@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Tim','Allen','Q',NULL,NULL),('ad058eb4684fb423be28a81c0dd2b0fe5453f5a5','rock@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Rock','Lee','N',NULL,NULL),('b11075737fdb90440d8156028010c740443c133b','isuoifuosiaufiosa@gmail.com','f22a8d9baa5f3674e2181656192c34d7d5a3e68ecd61ce7b55a68ab9f789c896','2019-11-11 01:56:19','Thong','Le','H',NULL,NULL),('c5633ce41bc8f6fe05d76bf2b5b4fea118e8f458','ramirez@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kim','Ramirez','S',NULL,NULL),('ca3de1a6f9290c2bb0ba58061df6ab6a19d9e34f','juan@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Juan','Lopez','D',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_book_flight`
--

DROP TABLE IF EXISTS `user_book_flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_book_flight` (
  `user_id` varchar(40) NOT NULL,
  `booking_number` varchar(255) NOT NULL,
  `flight_id` int(10) NOT NULL,
  PRIMARY KEY (`user_id`,`booking_number`,`flight_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_book_flight`
--

LOCK TABLES `user_book_flight` WRITE;
/*!40000 ALTER TABLE `user_book_flight` DISABLE KEYS */;
INSERT INTO `user_book_flight` VALUES ('675efce9c3cea8c1594391abbaabe0f51884f826','0FF4400',43),('675efce9c3cea8c1594391abbaabe0f51884f826','D78805A',18);
/*!40000 ALTER TABLE `user_book_flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_has_preference`
--

DROP TABLE IF EXISTS `user_has_preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_has_preference` (
  `user_id` varchar(40) NOT NULL,
  `preference_id` int(10) NOT NULL,
  PRIMARY KEY (`user_id`,`preference_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_has_preference`
--

LOCK TABLES `user_has_preference` WRITE;
/*!40000 ALTER TABLE `user_has_preference` DISABLE KEYS */;
INSERT INTO `user_has_preference` VALUES ('51f73752260bede665168c3dcf14d02766ec0ef6',2),('675efce9c3cea8c1594391abbaabe0f51884f826',1),('675efce9c3cea8c1594391abbaabe0f51884f826',3),('675efce9c3cea8c1594391abbaabe0f51884f826',4);
/*!40000 ALTER TABLE `user_has_preference` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-03 15:02:33
