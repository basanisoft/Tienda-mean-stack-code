/*
SQLyog Enterprise - MySQL GUI v6.56
MySQL - 5.0.45-community-nt : Database - mitienda
*********************************************************************
*/
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mitienda` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mitienda`;
/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `material` */

DROP TABLE IF EXISTS `material`;

CREATE TABLE `material` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(100) default NULL,
  `price` decimal(10,2) default NULL,
  `description` text,
  `image` varchar(255) default NULL,
  `created_at` timestamp NULL default CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) NOT NULL auto_increment,
  `store_id` int(11) default NULL,
  `material_id` int(11) default NULL,
  `quantity` int(11) default NULL,
  `order_state` varchar(110) default NULL,
  `created_at` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `store` */

DROP TABLE IF EXISTS `store`;

CREATE TABLE `store` (
  `id` int(11) NOT NULL auto_increment,
  `store_name` varchar(100) default NULL,
  `description` text,
  `created_at` timestamp NULL default CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `storematerial` */

DROP TABLE IF EXISTS `storematerial`;

CREATE TABLE `storematerial` (
  `id` int(11) NOT NULL auto_increment,
  `store_id` int(11) default NULL,
  `material_id` int(11) default NULL,
  `quantity` float default NULL,
  `created_at` timestamp NULL default CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_tstore` (`store_id`),
  KEY `FK_tmaterial` (`material_id`),
  CONSTRAINT `FK_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`),
  CONSTRAINT `FK_storematerial` FOREIGN KEY (`material_id`) REFERENCES `material` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
