--
-- Table structure for table `test_login`
--

DROP TABLE IF EXISTS `test_login`;

CREATE TABLE `test_login` (
  `id` int(11) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `password` varchar(256) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `test_login` WRITE;

--
-- Dumping data for table `test_login`
--

INSERT INTO `test_login` VALUES (1,'javawtee@gmail.com','8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92','Thong Le'),(2,'johnpatmcginley@gmail.com','472bbe83616e93d3c09a79103ae47d8f71e3d35a966d6e8b22f743218d04171d','John McGinley'),(3,'kunda.wu@sjsu.edu','b7158b64a98516b31d0c23609f69265a868c594dda5b3c8da9e13159e209c9b6','Kunda Wu');

UNLOCK TABLES;
