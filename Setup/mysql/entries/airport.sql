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
  `IATA` varchar(3) NOT NULL,
  `city` varchar(45) NOT NULL,
  `name` varchar(256) NOT NULL,
  `state` varchar(128) NOT NULL,
  PRIMARY KEY (`IATA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airport`
--

LOCK TABLES `airport` WRITE;
/*!40000 ALTER TABLE `airport` DISABLE KEYS */;
INSERT INTO `airport` VALUES ('ATL','Atlanta','Hartsfield–Jackson Atlanta International Airport','GA'),('BOS','Boston','Logan International Airport','MA'),('CLT','Charlotte','Charlotte Douglas International Airport','NC'),('DEN','Denver','Denver International Airport','CO'),('DFW','Dallas/Fort Worth','Dallas/Fort Worth International Airport','TX'),('DTW','Detroit','Detroit Metropolitan Airport','MI'),('EWR','New York/Newark','Newark Liberty International Airport','NJ'),('FLL','Fort Lauderdale','Fort Lauderdale–Hollywood International Airport','FL'),('IAH','Houston','George Bush Intercontinental Airport','TX'),('JFK','New York','John F. Kennedy International Airport','NY'),('LAS','Las Vegas','McCarran International Airport','NV'),('LAX','Los Angeles','Los Angeles International Airport','CA'),('LGA','New York','LaGuardia Airport','NY'),('MCO','Orlando','Orlando International Airport','FL'),('MIA','Miami','Miami International Airport','FL'),('MSP','Minneapolis/St. Paul','Minneapolis–Saint Paul International Airport','MN'),('ORD','Chicago','O\'Hare International Airport','IL'),('PHL','Philadelphia','Philadelphia International Airport','PA'),('PHX','Phoenix','Phoenix Sky Harbor International Airport','AZ'),('SEA','Seattle/Tacoma','Seattle–Tacoma International Airport','WA'),('SFO','San Francisco','San Francisco International Airport','CA'),('SJC','San Jose','Norman Y. Mineta San Jose International Airport','CA');
/*!40000 ALTER TABLE `airport` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-11 16:04:49
