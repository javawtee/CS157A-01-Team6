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
  `city` varchar(45) NOT NULL,
  `airport_name` varchar(45) NOT NULL,
  `address` varchar(128) NOT NULL,
  PRIMARY KEY (`airport_name`,`city`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airport`
--

LOCK TABLES `airport` WRITE;
/*!40000 ALTER TABLE `airport` DISABLE KEYS */;
INSERT INTO `airport` VALUES ('Beijing','BEJ','1231 Beijing'),('Boston','Boston Airport','0101 Boston'),('Boston','New York Airport','0101 Boston'),('GuangZhou','Baiyun Airport','0101 GuangZhou'),
('Haikou','MeiLan Airport','0101 Hainan'),('Honolulu','Honolulu Airport','0101 Atlanta'),('Los angeles','LAX','12334 Los angeles'),
('Las Vegas','LAS','0101 Los Vegas'),('Miami','Miami Airport','0101 miami'),('New York','JFK Airport','0101 New York'),
('New York','NYC','1231 New York'),('Portland','Portland Airport','0101 portland'),('San Francisco','SFO','0101 San francisco'),
('San Francisco','SFO Airport','0101 San francisco'),
('San Jose','SJC','1111 SJC');
/*!40000 ALTER TABLE `airport` ENABLE KEYS */;
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
  `arrivel_to` varchar(45) NOT NULL,
  `flight_status` varchar(45) NOT NULL,
  PRIMARY KEY (`flight_id`,`departure_datetime`,`depart_from`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight`
--

LOCK TABLES `flight` WRITE;
/*!40000 ALTER TABLE `flight` DISABLE KEYS */;
INSERT INTO `flight` VALUES (1,'2019-05-29 15:00:00','SJC','2019-05-29 17:00:00','Las Vegas','arrived'),(2,'2019-05-29 22:00:00','Las Vegas','2019-05-30 00:00:00','SJC','arrived'),
(3,'2019-05-29 22:00:00','San Francisco','2019-05-30 00:00:00','Las Vegas','arrived'),(4,'2019-05-30 00:00:00','New York City','2019-05-30 04:00:00','Las Vegas','arrived'),
(5,'2019-05-29 15:00:00','SJC','2019-05-29 17:00:00','New York City','arrived'),(6,'2019-05-29 15:00:00','SJC','2019-05-29 16:30:00','Las Vegas','arrived
7,'2019-05-29 16:00:00','BeiJing','2019-05-29 17:00:00','Las Vegas','arrived'),(8,'2019-05-30 01:00:00','SJC','2019-05-30 03:00:00','Las Vegas','arrived'),
(9,'2019-05-29 23:00:00','Los Angles','2019-05-30 01:00:00','Las Vegas','arrived'),(10,'2019-05-29 22:00:00','SJC','2019-05-30 03:00:00','Las Vegas','arrived'),
(11,'2019-05-29 15:00:00','SJC','2019-05-29 17:00:00','Las Vegas','arrived'),(12,'2019-05-29 17:00:00','Beijing','2019-05-29 19:00:00','Las Vegas','arrived'),
(13,'2019-05-29 19:00:00','Los Angles','2019-05-29 20:00:00','Las Vegas','arrived'),(14,'2019-05-29 22:00:00','New York City','2019-05-29 21:00:00','Las Vegas','arrived'),

#### From 1 hr from SJC Airport to Las Vegas 2019/12/9 - 2019/12/12
(15,'2019-12-08 23:00:00','SJC','2019-12-09 00:00:00','LAS','On Time'),
(16,'2019-12-09 02:00:00','SJC','2019-12-09 03:00:00','LAS','On Time'),
(17,'2019-12-09 05:00:00','SJC','2019-12-09 06:00:00','LAS','On Time'),
(18,'2019-12-09 08:00:00','SJC','2019-12-09 09:00:00','LAS','On Time'),
(19,'2019-12-09 11:00:00','SJC','2019-12-09 12:00:00','LAS','On Time'),
(20,'2019-12-09 14:00:00','SJC','2019-12-09 15:00:00','LAS','On Time'),
(21,'2019-12-09 17:00:00','SJC','2019-12-09 18:00:00','LAS','On Time'),
(22,'2019-12-09 20:00:00','SJC','2019-12-09 21:00:00','LAS','On Time'),
(23,'2019-12-09 23:00:00','SJC','2019-12-10 00:00:00','LAS','On Time'),
(24,'2019-12-10 02:00:00','SJC','2019-12-10 03:00:00','LAS','On Time'),
(25,'2019-12-10 05:00:00','SJC','2019-05-30 06:00:00','LAS','On Time'),
(26,'2019-12-10 08:00:00','SJC','2019-12-10 09:00:00','LAS','On Time'),
(27,'2019-12-10 11:00:00','SJC','2019-12-10 12:00:00','LAS','On Time'),
(28,'2019-12-10 14:00:00','SJC','2019-12-10 15:00:00','LAS','On Time'),
(29,'2019-12-10 17:00:00','SJC','2019-12-10 18:00:00','LAS','On Time'),
(30,'2019-12-10 20:00:00','SJC','2019-12-10 21:00:00','LAS','On Time'),
(31,'2019-12-10 23:00:00','SJC','2019-12-11 00:00:00','LAS','On Time'),
(32,'2019-12-11 02:00:00','SJC','2019-12-11 03:00:00','LAS','On Time'),
(33,'2019-12-11 05:00:00','SJC','2019-12-11 06:00:00','LAS','On Time'),
(34,'2019-12-11 08:00:00','SJC','2019-12-11 09:00:00','LAS','On Time'),
(35,'2019-12-11 11:00:00','SJC','2019-12-11 12:00:00','LAS','On Time'),
(36,'2019-12-11 14:00:00','SJC','2019-12-11 15:00:00','LAS','On Time'),
(37,'2019-12-11 17:00:00','SJC','2019-12-11 18:00:00','LAS','On Time'),
(38,'2019-12-11 20:00:00','SJC','2019-12-11 21:00:00','LAS','On Time'),
(39,'2019-12-11 23:00:00','SJC','2019-12-12 00:00:00','LAS','On Time'),
(40,'2019-12-12 02:00:00','SJC','2019-12-12 03:00:00','LAS','On Time'),

## LAS to SJC
(40,'2019-12-13 00:00:00','LAS','2019-12-13 01:00:00','SJC','On Time'),
(41,'2019-12-13 03:00:00','LAS','2019-12-13 04:00:00','SJC','On Time'),
(42,'2019-12-13 06:00:00','LAS','2019-12-13 07:00:00','SJC','On Time'),
(43,'2019-12-13 09:00:00','LAS','2019-12-13 10:00:00','SJC','On Time'),
(44,'2019-12-13 12:00:00','LAS','2019-12-13 13:00:00','SJC','On Time'),
(45,'2019-12-13 15:00:00','LAS','2019-12-13 16:00:00','SJC','On Time'),
(46,'2019-12-13 18:00:00','LAS','2019-12-13 19:00:00','SJC','On Time'),
(47,'2019-12-13 21:00:00','LAS','2019-12-13 22:00:00','SJC','On Time'),
(48,'2019-12-14 00:00:00','LAS','2019-12-14 01:00:00','SJC','On Time'),
(49,'2019-12-14 03:00:00','LAS','2019-12-14 04:00:00','SJC','On Time'),
(50,'2019-12-14 06:00:00','LAS','2019-12-14 07:00:00','SJC','On Time'),
(51,'2019-12-14 09:00:00','LAS','2019-12-14 10:00:00','SJC','On Time'),
(52,'2019-12-14 12:00:00','LAS','2019-12-14 13:00:00','SJC','On Time'),
(53,'2019-12-14 15:00:00','LAS','2019-12-14 16:00:00','SJC','On Time'),
(54,'2019-12-14 18:00:00','LAS','2019-12-14 19:00:00','SJC','On Time'),
(55,'2019-12-14 21:00:00','LAS','2019-12-14 22:00:00','SJC','On Time'),
(56,'2019-12-15 00:00:00','LAS','2019-12-15 01:00:00','SJC','On Time'),
(57,'2019-12-15 03:00:00','LAS','2019-12-15 04:00:00','SJC','On Time'),
(58,'2019-12-15 06:00:00','LAS','2019-12-15 07:00:00','SJC','On Time'),
(59,'2019-12-15 09:00:00','LAS','2019-12-15 10:00:00','SJC','On Time'),
(60,'2019-12-15 12:00:00','LAS','2019-12-15 13:00:00','SJC','On Time'),
(61,'2019-12-15 15:00:00','LAS','2019-12-15 16:00:00','SJC','On Time'),
(62,'2019-12-15 18:00:00','LAS','2019-12-15 19:00:00','SJC','On Time'),
(63,'2019-12-15 21:00:00','LAS','2019-12-15 22:00:00','SJC','On Time'),
(64,'2019-12-16 00:00:00','LAS','2019-12-16 01:00:00','SJC','On Time'),
(65,'2019-12-16 03:00:00','LAS','2019-12-16 04:00:00','SJC','On Time'),
 ## # #
 
 ## San Jose to LAX ##
(66, '2019-12-16 00:00:00', 'SJC','2019-12-16 01:00:00', 'LAX','On Time'),
(67, '2019-12-16 01:00:00', 'SJC', '2019-12-16 02:00:00', 'LAX' 'On Time'),
(68, '2019-12-16 02:00:00', 'SJC', '2019-12-16 03:00:00', 'LAX' 'On Time'),
(69, '2019-12-16 03:00:00', 'SJC', '2019-12-16 04:00:00', 'LAX' 'On Time'),
(70, '2019-12-16 04:00:00', 'SJC', '2019-12-16 05:00:00', 'LAX' 'On Time'),
(71, '2019-12-16 05:00:00', 'SJC', '2019-12-16 06:00:00', 'LAX' 'On Time'),
(72, '2019-12-16 06:00:00', 'SJC', '2019-12-16 07:00:00', 'LAX' 'On Time'),
(73, '2019-12-16 07:00:00', 'SJC', '2019-12-16 08:00:00', 'LAX' 'On Time'),
(74, '2019-12-16 08:00:00', 'SJC', '2019-12-16 09:00:00', 'LAX' 'On Time'),
(75, '2019-12-16 09:00:00', 'SJC', '2019-12-16 10:00:00', 'LAX' 'On Time'),
(76, '2019-12-16 10:00:00', 'SJC', '2019-12-16 11:00:00', 'LAX' 'On Time'),
(77, '2019-12-16 11:00:00', 'SJC', '2019-12-16 12:00:00', 'LAX' 'On Time'),
(78, '2019-12-16 12:00:00', 'SJC', '2019-12-16 13:00:00', 'LAX' 'On Time'),
(79, '2019-12-16 13:00:00', 'SJC', '2019-12-16 14:00:00', 'LAX' 'On Time'),
(80, '2019-12-16 14:00:00', 'SJC', '2019-12-16 15:00:00', 'LAX' 'On Time'),
(81, '2019-12-16 15:00:00', 'SJC', '2019-12-16 16:00:00', 'LAX' 'On Time'),
(82, '2019-12-16 16:00:00', 'SJC', '2019-12-16 17:00:00', 'LAX' 'On Time'),
(83, '2019-12-16 17:00:00', 'SJC', '2019-12-16 18:00:00', 'LAX' 'On Time'),
(84, '2019-12-16 18:00:00', 'SJC', '2019-12-16 19:00:00', 'LAX' 'On Time'),
(85, '2019-12-16 19:00:00', 'SJC', '2019-12-16 20:00:00', 'LAX' 'On Time'),
(86, '2019-12-16 20:00:00', 'SJC', '2019-12-16 21:00:00', 'LAX' 'On Time'),
(87, '2019-12-16 21:00:00', 'SJC', '2019-12-16 22:00:00', 'LAX' 'On Time'),
(88, '2019-12-16 22:00:00', 'SJC', '2019-12-16 23:00:00', 'LAX' 'On Time'),
(90, '2019-12-17 00:00:00', 'SJC', '2019-12-17 01:00:00', 'LAX' 'On Time'),
(91, '2019-12-17 01:00:00', 'SJC', '2019-12-17 02:00:00', 'LAX' 'On Time'),

## LAX to SJC
(92, '2019-12-18 05:00:00', 'LAX', '2019-12-18 06:00:00', 'SJC' 'On Time'),
(93, '2019-12-18 06:00:00', 'LAX', '2019-12-18 07:00:00', 'SJC' 'On Time'),
(94, '2019-12-18 07:00:00', 'LAX', '2019-12-18 08:00:00', 'SJC' 'On Time'),
(95, '2019-12-18 08:00:00', 'LAX', '2019-12-18 09:00:00', 'SJC' 'On Time'),
(96, '2019-12-18 09:00:00', 'LAX', '2019-12-18 10:00:00', 'SJC' 'On Time'),
(97, '2019-12-18 10:00:00', 'LAX', '2019-12-18 11:00:00', 'SJC' 'On Time'),
(98, '2019-12-18 11:00:00', 'LAX', '2019-12-18 12:00:00', 'SJC' 'On Time'),
(99, '2019-12-18 12:00:00', 'LAX', '2019-12-18 13:00:00', 'SJC' 'On Time'),
(100, '2019-12-18 13:00:00', 'LAX', '2019-12-18 14:00:00', 'SJC' 'On Time'),
(101, '2019-12-18 14:00:00', 'LAX', '2019-12-18 15:00:00', 'SJC' 'On Time'),
(102, '2019-12-18 15:00:00', 'LAX', '2019-12-18 16:00:00', 'SJC' 'On Time'),
(103, '2019-12-18 16:00:00', 'LAX', '2019-12-18 17:00:00', 'SJC' 'On Time'),
(104, '2019-12-18 17:00:00', 'LAX', '2019-12-18 18:00:00', 'SJC' 'On Time'),
(105, '2019-12-18 18:00:00', 'LAX', '2019-12-18 19:00:00', 'SJC' 'On Time'),
(106, '2019-12-18 19:00:00', 'LAX', '2019-12-18 20:00:00', 'SJC' 'On Time'),
(107, '2019-12-18 20:00:00', 'LAX', '2019-12-18 21:00:00', 'SJC' 'On Time'),
(108, '2019-12-18 21:00:00', 'LAX', '2019-12-18 22:00:00', 'SJC' 'On Time'),
(109, '2019-12-18 22:00:00', 'LAX', '2019-12-18 23:00:00', 'SJC' 'On Time'),
(111, '2019-12-19 00:00:00', 'LAX', '2019-12-19 01:00:00', 'SJC' 'On Time'),
(112, '2019-12-19 01:00:00', 'LAX', '2019-12-19 02:00:00', 'SJC' 'On Time'),
(113, '2019-12-19 02:00:00', 'LAX', '2019-12-19 03:00:00', 'SJC' 'On Time'),
(114, '2019-12-19 03:00:00', 'LAX', '2019-12-19 04:00:00', 'SJC' 'On Time'),
(115, '2019-12-19 04:00:00', 'LAX', '2019-12-19 05:00:00', 'SJC' 'On Time'),
(116, '2019-12-19 05:00:00', 'LAX', '2019-12-19 06:00:00', 'SJC' 'On Time'),
(117, '2019-12-19 06:00:00', 'LAX', '2019-12-19 07:00:00', 'SJC' 'On Time');
/*!40000 ALTER TABLE `flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight_fromto_airport`
--

DROP TABLE IF EXISTS `flight_fromto_airport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight_fromto_airport` (
  `flight_id` int(11) NOT NULL,
  `airport_name` varchar(45) NOT NULL,
  `gate_number` varchar(45) NOT NULL,
  `depart_or_arrive` varchar(6) NOT NULL,
  PRIMARY KEY (`flight_id`,`airport_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight_fromto_airport`
--

LOCK TABLES `flight_fromto_airport` WRITE;
/*!40000 ALTER TABLE `flight_fromto_airport` DISABLE KEYS */;
INSERT INTO `flight_fromto_airport` VALUES (1,'SJC','G01','depart'),(2,'SF','B02','depart'),(3,'WA','S03','depart'),(4,'NYC','A04','depart'),(5,'LAX','C05','depart'),(6,'BEJ','D05','depart'),(7,'SJC','S02','depart'),(8,'SF','A07','depart'),(9,'NYC','E04','depart'),(10,'NYC','E05','depart'),(11,'LA','B06','depart'),(12,'BJ','A08','depart'),(13,'SJC','C10','depart'),(14,'SF','D02','depart'),(15,'WA','C09','depart');
/*!40000 ALTER TABLE `flight_fromto_airport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plane`
--

DROP TABLE IF EXISTS `plane`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plane` (
  `plane_id` int(11) NOT NULL AUTO_INCREMENT,
  `seating_capacity` int(11) NOT NULL,
  `maintenance_status` varchar(45) NOT NULL,
  PRIMARY KEY (`plane_id`)
) ENGINE=InnoDB AUTO_INCREMENT=919324 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plane`
--

LOCK TABLES `plane` WRITE;
/*!40000 ALTER TABLE `plane` DISABLE KEYS */;
INSERT INTO `plane` VALUES (10,300,'Repairing'),(11,150,'OK'),(12,300,'OK'),(13,300,'Repairing'),(14,200,'Repairing'),(15,300,'OK'),(113304,80,'Repairing'),(222332,300,'OK'),(329304,200,'OK'),(482901,150,'Repairing'),(492012,300,'OK'),(519404,150,'OK'),(590192,300,'Repairing'),(592013,80,'Repairing'),(919304,300,'OK'),(919323,200,'Repairing');
/*!40000 ALTER TABLE `plane` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plane_usedfor_flight`
--

DROP TABLE IF EXISTS `plane_usedfor_flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plane_usedfor_flight` (
  `flight_id` int(11) NOT NULL,
  `plane_id` int(11) NOT NULL,
  PRIMARY KEY (`flight_id`,`plane_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plane_usedfor_flight`
--

LOCK TABLES `plane_usedfor_flight` WRITE;
/*!40000 ALTER TABLE `plane_usedfor_flight` DISABLE KEYS */;
INSERT INTO `plane_usedfor_flight` VALUES (1,1),(1,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15);
/*!40000 ALTER TABLE `plane_usedfor_flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preference`
--

DROP TABLE IF EXISTS `preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference` (
  `preference_id` int(11) NOT NULL AUTO_INCREMENT,
  `flight_time` varchar(45) DEFAULT 'day/night',
  `ticket_class` varchar(45) DEFAULT 'all',
  `alert` tinyint(4) DEFAULT '1',
  `two_factor` tinyint(4) DEFAULT '0',
  `max_price` double DEFAULT NULL,
  PRIMARY KEY (`preference_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preference`
--

LOCK TABLES `preference` WRITE;
/*!40000 ALTER TABLE `preference` DISABLE KEYS */;
INSERT INTO `preference` VALUES (1,'all','all',1,0,500),(2,'all','all',1,0,500),(3,'all','all',1,0,500),(4,'all','all',1,0,500),(5,'all','all',1,0,500),(6,'all','all',1,0,500),(7,'all','all',1,0,500),(8,'all','all',1,0,500),(9,'all','all',1,0,500),(10,'all','all',1,0,500),(11,'all','all',1,0,500),(12,'all','all',1,0,500),(13,'all','all',1,0,500),(14,'all','all',1,0,500),(15,'all','all',1,0,500);
/*!40000 ALTER TABLE `preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserve`
--

DROP TABLE IF EXISTS `reserve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserve` (
  `reservation_number` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `reserved_datetime` timestamp NOT NULL,
  `reservation_status` varchar(45) NOT NULL,
  PRIMARY KEY (`reservation_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserve`
--

LOCK TABLES `reserve` WRITE;
/*!40000 ALTER TABLE `reserve` DISABLE KEYS */;
INSERT INTO `reserve` VALUES ('M2206','ABC01','2019-02-01 08:00:00','success'),('M2207','ABC02','2019-02-06 08:00:00','success'),('M2208','VBA03','2019-09-10 07:00:00','success'),('M2209','HGF04','2015-10-10 07:00:00','success'),('M2210','JKN05','2014-01-10 08:00:00','success'),('M2211','KIK06','2011-10-10 07:00:00','success'),('M2212','HIG07','2013-10-10 07:00:00','success'),('M2213','UIU08','2019-10-10 07:00:00','success'),('M2214','KIL09','2019-10-01 07:00:00','success'),('M2215','KIJ10','2019-10-02 07:00:00','success'),('M2216','WAS11','2019-10-03 07:00:00','success'),('M2217','KLO12','2019-10-04 07:00:00','success'),('M2218','LOP13','2019-10-06 07:00:00','success'),('M2219','POP14','2019-11-03 07:00:00','success'),('M2220','PUSH1','2019-10-25 07:00:00','success');
/*!40000 ALTER TABLE `reserve` ENABLE KEYS */;
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
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_class` varchar(45) NOT NULL,
  `ticket_price` double NOT NULL,
  `ticket_quantity` int(11) NOT NULL,
  `ticket_status` varchar(45) NOT NULL DEFAULT 'available',
  PRIMARY KEY (`ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,'economic',1000,60,'unavailable'),(2,'business',1400,20,'available'),(3,'economic',1000,60,'unavailable'),(4,'business',1400,20,'available'),(5,'economic',1000,60,'available'),(6,'business',1400,20,'unavailable'),(7,'economic',1000,60,'available'),(8,'business',1400,20,'unavailable'),(9,'economic',1000,60,'unavailable'),(10,'business',1400,20,'unavailable'),(11,'economic',1000,60,'available'),(12,'business',1400,200,'available'),(13,'economic',1000,60,'available'),(14,'business',1400,20,'unavailable'),(15,'economic',1000,60,'available');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_of_flight`
--

DROP TABLE IF EXISTS `ticket_of_flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_of_flight` (
  `ticket_id` int(11) NOT NULL,
  `flight_id` int(11) NOT NULL,
  PRIMARY KEY (`ticket_id`,`flight_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_of_flight`
--

LOCK TABLES `ticket_of_flight` WRITE;
/*!40000 ALTER TABLE `ticket_of_flight` DISABLE KEYS */;
INSERT INTO `ticket_of_flight` VALUES (1,1),(1,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15);
/*!40000 ALTER TABLE `ticket_of_flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(32) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(256) NOT NULL,
  `joined_datetime` timestamp NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `middle_initial` char(1) NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(128) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('M2206','john@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-10 07:00:00','John','McGinley','P','1997-04-01','123 Fake Street'),('M2207','kunda@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2014-06-11 07:00:00','Tyler','Daas','D','1997-04-01','1203 20th Street'),('M2208','tee@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Thong','Le','Q','1992-05-07','1203 Austin Street'),('M2209','jake@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kunda','Wu','P','1997-04-01','1203 Kim Street'),('M2210','blake1@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','John','Wu','R','1997-04-01','1203 Rut Street'),('M2211','rock@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Rock','Lee','N','1997-04-01','13 7th Street'),('M2212','kyle@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kyle','Hertsch','A','1997-04-01','123 8th Street'),('M2213','andre@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Andre','Giant','R','1997-04-01','143 first Street'),('M2214','blake2@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Blake','Bortles','C','1997-04-01','101 West Adams St'),('M2215','doug@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Doug','Adams','L','1997-04-01','927 Hamilton St'),('M2216','juan@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Juan','Lopez','D','1997-04-01','940 Black St'),('M2217','tim@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Tim','Allen','Q','1997-04-01','409 Market St'),('M2218','tyler@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Tyler','Adams','C','1997-04-01','440 Telegraph Ave'),('M2219','maria@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Maria','Ramirez','D','1997-04-01','904 Test Dr'),('M2220','ramirez@gmail.com','db1a4c0c96fd1f7daf946ae3f066c3a55b339fab3043becfa479e0cd5e023cfc','2019-04-01 07:00:00','Kim','Ramirez','S','1997-04-01','753 Edde St');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_has_preference`
--

DROP TABLE IF EXISTS `user_has_preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_has_preference` (
  `user_id` varchar(32) NOT NULL,
  `preference_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`preference_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_has_preference`
--

LOCK TABLES `user_has_preference` WRITE;
/*!40000 ALTER TABLE `user_has_preference` DISABLE KEYS */;
INSERT INTO `user_has_preference` VALUES ('M2206',1),('M2207',2),('M2208',3),('M2209',4),('M2210',5),('M2211',6),('M2212',7),('M2213',8),('M2214',9),('M2215',10),('M2216',11),('M2217',12),('M2218',13),('M2219',14),('M2220',15);
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

-- Dump completed on 2019-11-05 20:40:31
