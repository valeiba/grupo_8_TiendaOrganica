DROP DATABASE IF EXISTS tienda_organica_db;
CREATE DATABASE tienda_organica_db;
USE tienda_organica_db;

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `categories` VALUES (1,"frutas","",""),(2,"verduras","",""),(3,"canastas","","");

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `presentation` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `available` tinyint(1) DEFAULT 1 NOT NULL,
  `on_sale` tinyint(1) DEFAULT 0 NOT NULL,
  `image` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` VALUES (1,"Manzana roja","La manzana es el fruto ideal para tomar a cualquier hora y participa positivamente en la consecución del equilibrio alimentario. A la manzana se le atribuyen muchas propiedades curativas, aparte de su reconocido poder diurético. Como su nombre indica, tiene una piel roja oscura con un dulzor medio, entre la manzana golden y la manzana verde. Es aromática y tiene una carne jugosa. Este tipo de manzanas es el más utilizado para acompañar las ensaladas.","1kg",240,80,1,1,"manzana-roja.png",1,"",""),
(2,"Manzana verde","La manzana es el fruto ideal para tomar a cualquier hora y participa positivamente en la consecución del equilibrio alimentario. A la manzana se le atribuyen muchas propiedades curativas, aparte de su reconocido poder diurético. Como su nombre indica, tiene una piel roja oscura con un dulzor medio, entre la manzana golden y la manzana verde. Es aromática y tiene una carne jugosa. Este tipo de manzanas es el más utilizado para acompañar las ensaladas.","1kg",250,60,1,0,"manzana-verde.png",1,"",""),
(3,"Mandarina","Esta fruta cítrica y típica de otoño es deliciosa y refrescante.","1kg",100,70,1,0,"mandarina.png",1,"",""),
(4,"Pomelo rosado","El pomelo se consume principalmente como fruta fresca, y posee numerosas cualidades digestivas, estomacales y antisépticas. Previene las enfermedades cardiovasculares, fortalece el sistema inmunológico, previene los resfriados, estabiliza la flora intestinal, activa el metabolismo y el crecimiento celular, y contribuye a la pérdida de peso. La vitamina C y los beta-carotenos presentes en cantidades elevadas en el zumo de esta fruta actúan como antioxidantes.","1kg",180,40,1,0,"pomelo.png",1,"",""),
(5,"Banana","El plátano es una fruta amarilla con un sabor dulce según la variedad. Se pueden distinguir algunas variedades por su diferencia de tamaño, color, sabor más o menos dulce y su forma de consumo. Es rico en fibra, potasio y algunas vitaminas beneficiosas para la salud. Es una fruta buena para todos excepto diabéticos y obesos, debido a su alto contenido en almidón y azúcares. Además esta fruta es una buena fuente de energía, de vitamina A y potasio.","1kg",180,90,1,0,"banana.png",1,"",""),
(6,"Frutilla","La frutilla es un fruto de color rojo brillante, suculento y fragante. Las fresas y los fresones son poco calóricos y aportan un sabor dulce y agradable. Después del agua, su principal constituyente son los hidratos de carbono. La fructosa significa prácticamente la mitad de sus glúcidos y el resto es glucosa en su mayor parte. Es adecuada en régimenes dietéticos, dado que tiene escasa concentración de glúcidos. Constituye una excelente fuente de vitamina C.","250gr",500,48,1,0,"frutilla.png",1,"",""),
(7,"Limón","El limón refuerza el sistema inmunológico, es revitalizante, activa el metabolismo del calcio para los huesos y dientes, cura las hemorragias, tiene acción rejuvenecedora y ayuda en las dietas de adelgazamiento. Se consume en fresco en el terreno gastronómico, su uso está más aplicado como zumo en condimentos para sopas, bebidas, ensaladas, platos de pescado y postres de pastelería. Tiene un elevado contenido en vitaminas A, B, P, K y sobre todo C.","1kg",60,15,1,0,"limon.png",1,"",""),
(8,"Naranja","La naranja, junto con el plátano y la manzana, es uno de los frutos más consumidos en el mundo. La parte comestible de la naranja es la pulpa y se consume fresca o en zumo. La naranja también se utiliza para realizar compotas, mermeladas, para consumo como fruta deshidratada, etc. Las naranjas frescas son bajas en calorías y fuente de fibra, potasio, vitamina C y folato. Ayudan a prevenir el cáncer y las enfermedades cardiovasculares.","1kg",120,124,1,0,"naranja.png",1,"",""),
(9,"Palta","Excelente fuente de grasas saludables, especialmente ácidos grasos omega 9. Alta en fibra: brindando alto nivel de saciedad, equilibrando niveles de azúcares en sangre y regulando el tránsito intestinal.","1 unidad",85,40,1,0,"palta.png",1,"",""),
(10,"Uva verde","La uva verde es un fruta que crece en racimos apretados. Su pulpa es blanca de sabor dulce. Se consume como fruta fresca o zumo. Las uvas son un alimento que aporta minerales y vitaminas al organismo. Es una de las frutas con más hidratos de carbono, aunque su contenido calórico no es demasiado elevado. Contienen resveratrol, un compuesto antioxidante y anticancerígeno, y desde la antigüedad se le atribuyen diversas propiedades curativas.","500gr",380,82,1,0,"uva-verde.png",1,"",""),
(11,"Acelga","La acelga es una planta con grandes hojas verdes y carnosas pencas blancas. La acelga goza de numerosas aplicaciones medicinales y alimenticias. En ensalada con zumo de limón fortalece el estómago y vigoriza el cerebro, así como desinflama los nervios. Las hojas de las acelgas aportan una gran cantidad de calcio además de la vitamina K. Se consume normalmente cocida y aderezada como hervido, o bien como acompañante.","1 atado",90,22,1,0,"acelga.png",2,"",""),
(12,"Brócoli","El brócoli es una hortaliza de la familia de las coles. Tiene un agradable sabor. Es un alimento rico en vitaminas, sobre todo en vitamina C y vitamina A. Contiene fibra, calcio, hierro y potasio. Además es bajo en calorías y grasas, por lo que es recomendable en dietas de adelgazamiento. El consumo de brócoli puede ayudar a aquellas personas que padecen estrés o nervios. Se consume crudo, especialmente el tronco pelado, tanto como al vapor o hervido.","1 unidad",340,12,1,0,"brocoli.png",2,"",""),
(13,"Batata","Se trata de una raíz que se obtiene de la planta que recibe el nombre de batata. Su sabor es dulce debido a su contenido en azúcares. La batata recuerda a la patata aunque botánicamente no está emparentado con ella. Por su combinación de nutrientes y su riqueza en hidratos de carbono se puede decir que es un alimento regenerador y de alto valor energético. Posee una gran concentración de vitamina A. También tiene gran proporción en vitamina E, C y ácido fólico.","1kg",55,43,1,0,"batata.png",2,"",""),
(14,"Berenjena","La berenjena es un fruto de color morado. Su carne firme y suave es siempre blanca y contiene numerosas semillas comestibles del mismo color. La berenjena es muy saludable. Es un alimento bajo en calorías y en hidratos de carbono. Es de muy fácil digestión y contiene una buena cantidad de zinc y potasio. Presenta en su mayor parte vitaminas A, C y ácido fólico. Se consume a modo de verdura, frita o rebozada en rodajas.","1kg",145,13,1,0,"berenjena.png",2,"",""),
(15,"Cebolla","La cebolla es el bulbo subterráneo y comestible que crece en la planta del mismo nombre. La cebolla ha sido usada desde hace mucho tiempo como planta medicinal, por lo que existen muchas recetas y remedios para combatir diversas dolencias y patologías. Su riqueza en minerales y vitaminas es relativamente baja, pero es rica en aceites esenciales que contienen azufre. La cebolla se consume cruda, frita, hervida y asada, casi siempre como condimento.","1kg",80,43,1,0,"cebolla.png",2,"",""),
(16,"Papa","La papa es un tubérculo, redondeado u ovalado con unos pequeñas raicillas blancas llamadas ojos que no son más que yemas de crecimiento. Es uno de los cultivos más extendidos en todo el mundo. Es una buena fuente de energía, con alto contenido en folato, vitamina C, vitaminas del grupo B, hierro y potasio. Es peligroso consumir papas color verdoso porque contienen un compuesto que en grandes cantidades puede ser tóxico.","1kg",115,88,1,0,"papa.png",2,"",""),
(17,"Morrón rojo","El morrón rojo es más dulce que el morrón verde y amarillo. Tiene un alto contenido en vitaminas y antioxidantes y representa un poderoso alimento que combate el envejecimiento y varias enfermedades graves. La principal vitamina aportada por los pimientos es la vitamina C que protege contra el cáncer. También es fuente de vitamina A, por lo que son buenos para la vista. El morrón se consume crudo, cocido y asado o como guarnición en gran variedad de platos.","1 unidad",330,37,1,0,"morron-rojo.png",2,"",""),
(18,"Tomate perita","El tomate perita es una variedad de tomate grande con pulpa carnosa, poco ácida, de forma oblonga, aplanada, con protuberancias en la superficie. Es el preferido para la elaboración de los tomates en conserva. También es uno de los tomates de verano más apreciados para la elaboración del refrescante y nutritivo gazpacho y salmorejo. Sus cualidades también lo convierten en el tomate ideal para hacer tomate frito, para comer en ensalada y para untar en el pan.","1kg",170,8,1,0,"tomate-perita.png",2,"",""),
(19,"Lechuga","La lechuga es una hortaliza muy popular que se cultiva por sus grandes hojas. La lechuga criolla es una variedad de lechuga que crece con una larga cabeza y que posee una hojas robustas, alargadas y con un robusto nervio central. Es un alimento pobre en nutrientes, con muy poco contenido graso, lo que la hace indicada para dietas de adelgazamiento. Se le atribuyen propiedades calmantes y sedantes. Además combate el estreñimiento y el agotamiento, es diurética.","500gr",150,17,1,0,"lechuga.png",2,"",""),
(20,"Zanahoria","La zanahoria es una hortalizas muy extendida. La parte de la planta que se consume es la raíz, de la que existen diferentes variedades, de modo que el sabor y la forma pueden variar, aunque siempre con coloración anaranjada. Es rica en caroteno, sustancia precursora de la vitamina A, necesaria en el crecimiento, desarrollo de huesos, vista, mantenimiento de los tejidos, reproducción y en el sistema hormonal. Además, se cree que previene contra el cáncer.","1kg",60,22,1,0,"zanahoria.png",2,"",""),
(21,"Calabaza anco","La calabaza es uno de esos alimentos excepcionales a los que todavía no se ha hecho debida justicia. Su pulpa es generalmente anaranjada o amarillenta, y está repleta de semillas en su parte central. Es digestiva, deliciosa, de aspecto atractivo y está repleta de sustancias con efectos muy beneficiosos sobre la salud. La carne de la calabaza se consume cocinada como verdura, cocida, frita, gratinada, acompañada de salsas y como guarnición de diversos platos.","1 unidad",125,16,1,0,"calabaza-anco.png",2,"",""),
(22,"Coliflor","La coliflor es una hortaliza perteneciente a la familia de las coles. La parte que se consume es la flor o inflorescencia, muy apreciada por su sabor. Se puede utilizar de distintas maneras, tanto cruda como cocinada. La coliflor es adecuada en dietas de adelgazamiento, ya que es un alimento bajo en calorías y rico en fibra. Aporta muchas vitaminas y minerales, por lo que resulta beneficiosa en enfermedades circulatorias y cardiacas y la prevención de algunos cánceres.","1 unidad",160,7,1,0,"coliflor.png",2,"",""),
(23,"Canasta de frutas","Ahorrá disfrutando de nuestra selección de fruta de proximidad. Nuestra caja de 6kg es ideal para 2 personas.","1 unidad",800,45,1,0,"canasta-de-frutas.jpg",3,"",""),
(24,"Canasta de verduras","Disfrutá de nuestras selección de verduras de proximidad. Nuestra cesta de verdura de 6kg es ideal para 2 personas.","1 unidad",600,38,1,0,"canasta-de-verduras.jpg",3,"",""),
(25,"Canasta familiar","Ahorrá disfrutando de nuestra selección de fruta y verdura de proximidad. Nuestra caja de 15kg es ideal para 4 o 5 personas","1 unidad",1500,62,1,0,"canasta-familiar.jpg",3,"","");

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `roles` VALUES (1,"Admin","",""),(2,"User","","");

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` VALUES (1,"Admin","User","a@a.com","$2a$10$VisC9Rx68RbPKM1vMAigNe0S6BsvZQoYMYuaJPAwrTkdpaLE/mQ9q",1,"","");

CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shopping_cart_product_fk` (`product_id`),
  KEY `shopping_cart_user_fk` (`user_id`),
  CONSTRAINT `shopping_cart_product_fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `shopping_cart_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;