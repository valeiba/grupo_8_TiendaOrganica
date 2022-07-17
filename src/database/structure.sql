create database if not exists tiendaOrganica_db;
use tiendaOrganica_db;
CREATE TABLE `categories` (
  `category.id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`category.id`)
) ENGINE=InnoDB ;
CREATE TABLE `products` (
  `id.product` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(4,2) unsigned NOT NULL,
  `presentation` varchar(45) NOT NULL,
  `description` varchar(400) NOT NULL,
  `available` tinyint(4) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id.product`),
  KEY `fk product_category` (`category_id`),
  CONSTRAINT `fk product_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category.id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;
CREATE TABLE `roles` (
  `role.id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`role.id`)
) ENGINE=InnoDB;
-- CREATE TABLE `shopping cart` (
--   `shoppingcart.id` int(11) NOT NULL AUTO_INCREMENT,
--   `product_id` int(11) NOT NULL,
--   `user_id` int(11) NOT NULL,
--   `quantity` int(11) NOT NULL,
--   `total` int(11) NOT NULL,
--   PRIMARY KEY (`shoppingcart.id`),
--   KEY `product_id` (`product_id`),
--   KEY `user_id` (`user_id`),
--   CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id.product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
--   CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user.id`) ON DELETE NO ACTION ON UPDATE NO ACTION
-- ) ENGINE=InnoDB;
CREATE TABLE `users` (
  `user.id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user.id`),
  KEY `fk roles_users` (`role_id`),
  CONSTRAINT `fk roles_users` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role.id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;
