-- MariaDB dump 10.19  Distrib 10.11.0-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	10.11.0-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dblegends`
--

DROP TABLE IF EXISTS `dblegends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dblegends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Clave` varchar(255) DEFAULT NULL,
  `Luchador` varchar(255) DEFAULT NULL,
  `Afinidad` varchar(255) DEFAULT NULL,
  `Rareza` varchar(255) DEFAULT NULL,
  `Nivel` varchar(255) DEFAULT NULL,
  `Etiqueta` varchar(255) DEFAULT NULL,
  `Episodios` varchar(255) DEFAULT NULL,
  `Estilo_de_lucha` varchar(255) DEFAULT NULL,
  `Zenkai` varchar(255) DEFAULT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Activo` char(1) NOT NULL,
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `linaje` varchar(255) DEFAULT NULL,
  `Desbloqueado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dblegends`
--

LOCK TABLES `dblegends` WRITE;
/*!40000 ALTER TABLE `dblegends` DISABLE KEYS */;
INSERT INTO `dblegends` VALUES
(1,'DBL49-01U','super veggeto','amarillo','ultra','5000','guerrero fusionado pothala','arco de majin buu','defensa','no','2022-11-10 16:27:29','s','2022-11-10 16:27:29','ninguna','si'),
(2,'DBL47-01S','goku ultra instinto','roja','sparking LL','5000','energia divina','arco supervivencia universal','fisico','no','2022-11-10 16:27:30','s','2022-11-10 16:27:30','ninguna','si'),
(3,'DBL50-01S','trunks ','verde','sparking LL','5000','futuro  saiyajin mixto','arco saga de los androides','fisico','no','2022-11-10 16:27:30','N','2022-11-15 16:25:12','vegeta','si'),
(4,'DBL35-01S','gogeta sj4','verde','sparking LL','5000','guerrero fusionado GT','arco de los dragones malignos','defensa','no','2022-11-10 16:27:30','N','2022-11-15 16:24:41','ninguna','si'),
(5,'DBL52-01S','gohan bestia','azul','sparking LL','5000','saiyajin mixto','arco de peliculas','fisico','no','2022-11-10 16:27:30','s','2022-11-10 16:27:30','goku','si'),
(6,'DBL30-03S','broly maximo poder','azul','sparking LL','5000','saiyajin enemigo gigantesco','arco de peliculas','fisico','no','2022-11-10 16:32:49','s','2022-11-10 16:32:49','ninguna','si'),
(7,'DBL22-05S','Frezeer','verde','sparking LL','4500','estirpe maligna enemigo gigantesco','arco de frezeer','Fisico','si','2022-11-14 16:07:23','N','2022-11-16 16:22:02','ninguno','no'),
(8,'DBL22-05S','bills','morado','extreme','500','dios de la destruccion','arco super','Fisico','no','2022-11-15 16:27:34','N','2022-11-16 16:21:39','ninguno','si');
/*!40000 ALTER TABLE `dblegends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Fecha_nacimiento` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES
(1,'cesardessaz@activision.com','Cesar','Desgarennes Sanchez',20,'M','1234','2001-12-31','S','2022-10-11 15:39:34','2022-10-11 15:39:34'),
(2,'cedeca87@bjorn.hidromiel.com','Cesar augusto','Desgarennes Camacho',40,'M','1234','1986-01-30','N','2022-10-11 15:41:37','2022-10-24 15:59:44'),
(3,'alejandro@taskforce.com','alejandro','vargas',41,'M','141','1995-07-31','S','2022-10-27 15:32:56','2022-10-27 15:32:56'),
(4,'cesar@taskforce.com','alejandro','vargas',41,'M','141','1995-07-31','S','2022-10-27 15:36:03','2022-10-27 15:36:03'),
(5,'john117@unsc.com','alejandro','vargas',41,'M','141','1995-07-31','S','2022-10-27 15:41:09','2022-10-27 15:41:09'),
(6,'12345@unsc.com','alejandro','vargas',41,'M','141','1995-07-31','S','2022-10-27 15:43:33','2022-10-27 15:43:33'),
(7,'6687643685@<com','cesara','desgarennes',41,'M','141','1995-07-31','S','2022-10-31 16:25:50','2022-10-31 16:25:50'),
(8,'12341@<com','simon','desgarennes',41,'M','141','1995-07-31','S','2022-10-31 16:27:38','2022-10-31 16:27:38'),
(9,'alemolga@yimeilcom','alejandra','molina garcia',64,'','abc','1999-03-28','S','2022-11-04 16:09:28','2022-11-04 16:09:28'),
(10,'alemolga@yimeilcom','alejandra molina sanchez','molina garcia',64,'','$2a$10$oO2ln2kUvcYwepbMWHMblOyzFyNaLYbp3z/6yOdbEWlsf/eXoo.Xi','1999-03-28','S','2022-11-04 16:12:47','2022-11-04 16:12:47'),
(11,'cedeca87@yimeilcom','cesar','camacho ',34,'','$2a$10$xDmIRfkIQ4jma2LNprGGI.kgO3gMBLVBekEUzxiLlCjo2kD4Aacmi','1999-03-28','S','2022-11-04 16:25:15','2022-11-04 16:25:15');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-18 10:23:45
