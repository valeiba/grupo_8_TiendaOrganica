create database if not exists tiendaOrganica_db;
use tiendaOrganica_db;
CREATE TABLE `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR (45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB ;
CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL NOT NULL,
  `presentation` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `available` TINYINT NOT NULL,
  `image` BLOB,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk product_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;
CREATE TABLE `roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk roles_users` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;
CREATE TABLE `shopping cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `total` DECIMAL NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;
