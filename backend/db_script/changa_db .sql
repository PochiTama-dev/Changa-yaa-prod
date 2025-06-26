-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2025 a las 00:00:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `changa_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `advertising`
--

CREATE TABLE `advertising` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_role` int(11) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_profession` int(11) DEFAULT NULL,
  `id_payment` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `banned` tinyint(4) DEFAULT 0,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `location` text DEFAULT NULL,
  `clicks` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `budgets`
--

CREATE TABLE `budgets` (
  `id` int(11) NOT NULL,
  `id_buyer` int(11) NOT NULL,
  `id_seller` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `units` int(11) NOT NULL,
  `enabled` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `number` varchar(19) NOT NULL,
  `dd_mm` varchar(5) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'Actividades'),
(2, 'Administración'),
(3, 'Agroindustria'),
(4, 'Alquiler'),
(5, 'Artesanía'),
(6, 'Bienestar'),
(7, 'Bienestar animal'),
(8, 'Bienestar social'),
(9, 'Comedia'),
(10, 'Comercio'),
(11, 'Comercio exterior'),
(12, 'Comunicación'),
(13, 'Construcción'),
(14, 'Control de plagas'),
(15, 'Deportes'),
(16, 'Diseño'),
(17, 'Educación'),
(18, 'Electrodomésticos'),
(19, 'Emergencias'),
(20, 'Entretenimiento'),
(21, 'Estética'),
(22, 'Eventos'),
(23, 'Gastronomía'),
(24, 'General'),
(25, 'Hogar'),
(26, 'Indumentaria'),
(27, 'Instalaciones'),
(28, 'Jardinería'),
(29, 'Limpieza'),
(30, 'Logística'),
(31, 'Mantenimiento de espacios verdes'),
(32, 'Mantenimiento de piscinas'),
(33, 'Marketing'),
(34, 'Medios de comunicación'),
(35, 'Metalurgia'),
(36, 'Mudanzas'),
(37, 'Música'),
(38, 'Otros'),
(39, 'Reparaciones'),
(40, 'Salud'),
(41, 'Salud animal'),
(42, 'Seguridad'),
(43, 'Seguridad pública'),
(44, 'Servicios'),
(45, 'Servicios fúnebres'),
(46, 'Servicios profesionales'),
(47, 'Tecnología'),
(48, 'Transporte'),
(49, 'Turismo ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `certificates`
--

CREATE TABLE `certificates` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `title` varchar(80) NOT NULL,
  `job` varchar(40) NOT NULL,
  `certificate` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `id_sender_user` int(11) NOT NULL,
  `id_receiver_user` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `banned` tinyint(4) DEFAULT 0,
  `message` text DEFAULT NULL,
  `image_reference` text DEFAULT NULL,
  `video_reference` text DEFAULT NULL,
  `audio_reference` text DEFAULT NULL,
  `reviewed` tinyint(4) DEFAULT 0,
  `id_sender_user_delete` tinyint(4) NOT NULL DEFAULT 0,
  `id_receiver_user_delete` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `criminal_records`
--

CREATE TABLE `criminal_records` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `certificate` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `networks`
--

CREATE TABLE `networks` (
  `id` int(11) NOT NULL,
  `network` varchar(15) NOT NULL,
  `icon` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `networks`
--

INSERT INTO `networks` (`id`, `network`, `icon`) VALUES
(1, 'Facebook', NULL),
(2, 'Instagram', NULL),
(3, 'Whatsapp', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `notification` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `notifications`
--

INSERT INTO `notifications` (`id`, `notification`) VALUES
(1, 'Mensaje nuevo'),
(2, 'Nueva postulación'),
(3, 'Nueva imagen en contratación finalizada'),
(4, 'Servicio finalizado'),
(5, 'Subiste tu rango a Bronce!'),
(6, 'Subiste tu rango a Plata!'),
(7, 'Subiste tu rango a Oro!'),
(8, 'Subiste tu rango a Platino!'),
(9, 'Te calificaron!'),
(10, 'Te contrataron!'),
(11, 'Te enviaron un presupuesto'),
(12, 'Te solicitaron un presupuesto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_plans`
--

CREATE TABLE `payment_plans` (
  `id` int(11) NOT NULL,
  `payment_plan` text NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `icon` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_profession` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `description` text NOT NULL,
  `banned` tinyint(4) DEFAULT 0,
  `close` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts_images`
--

CREATE TABLE `posts_images` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts_postulates`
--

CREATE TABLE `posts_postulates` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_postulate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `title` varchar(60) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_images`
--

CREATE TABLE `products_images` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `professions`
--

CREATE TABLE `professions` (
  `id` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `profession` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `professions`
--

INSERT INTO `professions` (`id`, `id_category`, `profession`) VALUES
(1, 1, 'Domador caballo'),
(2, 1, 'Equitación caballo'),
(3, 2, 'Administrativo'),
(4, 3, 'Criadero de perros'),
(5, 3, 'Faena de animales'),
(6, 3, 'Pesquero'),
(7, 4, 'Alquiler auto'),
(8, 5, 'Artesano cuero'),
(9, 5, 'Artesano mimbres'),
(10, 5, 'Calígrafo'),
(11, 5, 'Carpintero cabaña'),
(12, 5, 'Carpintero muebles'),
(13, 5, 'Colocado tejido'),
(14, 5, 'Escultor'),
(15, 5, 'Herrero artístico'),
(16, 5, 'Luthier'),
(17, 5, 'Modista'),
(18, 5, 'Panadero'),
(19, 5, 'Pintor artístico'),
(20, 5, 'Tapicero'),
(21, 5, 'Tejedoras alcrochet'),
(22, 5, 'Tejedoras lana'),
(23, 6, 'Astrología'),
(24, 6, 'Coach'),
(25, 6, 'Coach de vida'),
(26, 6, 'Entrenador deportivo'),
(27, 6, 'Entrenador/a personal'),
(28, 6, 'Equinoterapia'),
(29, 6, 'Instructor de gimnasio'),
(30, 6, 'Instructor/a de yoga'),
(31, 6, 'Masajista'),
(32, 6, 'Maso terapia'),
(33, 6, 'Nutricionista'),
(34, 6, 'Reiki'),
(35, 6, 'Tarot'),
(36, 6, 'Terapeuta holístico'),
(37, 7, 'Adiestrador de perros'),
(38, 7, 'Cuidador de animales'),
(39, 7, 'Paseador de perros'),
(40, 7, 'Peluquería de gatos'),
(41, 7, 'Peluquería de perros'),
(42, 8, 'Cuidador de ancianos'),
(43, 9, 'Stand up'),
(44, 10, 'Carnicero'),
(45, 10, 'Compra venta'),
(46, 10, 'Trueque'),
(47, 10, 'Vendedores varios'),
(48, 10, 'Verdulero'),
(49, 11, 'Aduanero'),
(50, 12, 'Radio operadora'),
(51, 12, 'Albañil'),
(52, 13, 'Carpintero'),
(53, 13, 'Carpintero obra'),
(54, 13, 'Colocación de cerámica'),
(55, 13, 'Construcción en seco'),
(56, 13, 'Contratistas'),
(57, 13, 'Doble riesgo'),
(58, 13, 'Filetero pintura'),
(59, 13, 'Instalación durlock'),
(60, 13, 'Maestro mayor obra'),
(61, 13, 'Martilleo público'),
(62, 13, 'Oficial albañil'),
(63, 13, 'Oficial microcemento'),
(64, 13, 'Oficial piso flotante'),
(65, 13, 'Oficial porcelanato'),
(66, 13, 'Pintor'),
(67, 13, 'Pintor casa'),
(68, 13, 'Techista'),
(69, 13, 'Vidriería'),
(70, 13, 'Yesero'),
(71, 13, 'Zinguería'),
(72, 14, 'Control de plagas'),
(73, 14, 'Exterminador plagas'),
(74, 15, 'Director/a técnico/a de fútbol'),
(75, 15, 'Instructor/a de artes marciales'),
(76, 15, 'Instructor/a de boxeo'),
(77, 15, 'Instructor/a de taekwondo'),
(78, 15, 'Profesor/a de natación'),
(79, 16, 'Diseñador de interiores'),
(80, 16, 'Diseñador/a web'),
(81, 16, 'Diseño gráfico'),
(82, 17, 'Apoyo escolar'),
(83, 17, 'Cursos varios'),
(84, 17, 'Instructor de pilates'),
(85, 17, 'Maestro/a de primaria'),
(86, 17, 'Monitor de natación'),
(87, 17, 'Profesor baile varios'),
(88, 17, 'Profesor de danza'),
(89, 17, 'Profesor de idiomas'),
(90, 17, 'Profesor de informática'),
(91, 17, 'Profesor de meditación'),
(92, 17, 'Profesor de música'),
(93, 17, 'Profesor de parapente'),
(94, 17, 'Profesor de surf'),
(95, 17, 'Profesor de teatro'),
(96, 17, 'Profesor de yoga'),
(97, 17, 'Profesor/a de arte'),
(98, 17, 'Profesor/a de inglés'),
(99, 17, 'Profesor/a de matemáticas'),
(100, 17, 'Profesor/a de secundaria'),
(101, 17, 'Psicopedagoga'),
(102, 18, 'Técnico heladera'),
(103, 18, 'Técnico de lavarropa'),
(104, 19, 'Bomberos'),
(105, 20, 'Actor'),
(106, 20, 'Animador de fiesta'),
(107, 20, 'Bailarín/a'),
(108, 20, 'Dj música'),
(109, 20, 'Magos'),
(110, 20, 'Malabarista'),
(111, 20, 'Payaso/a'),
(112, 21, 'Colorista pelo'),
(113, 21, 'Cosmetóloga'),
(114, 21, 'Depilación'),
(115, 21, 'Maquilladora'),
(116, 21, 'Pedicura'),
(117, 21, 'Uñas'),
(118, 22, 'Alquiler de muebles y decoración'),
(119, 22, 'Alquiler de sonido e iluminación'),
(120, 22, 'Catering'),
(121, 22, 'Ceremonial'),
(122, 22, 'Decoración de globo'),
(123, 22, 'Decoración eventos'),
(124, 22, 'Decorador/a de eventos'),
(125, 22, 'Organizador de eventos'),
(126, 22, 'Servicios de catering'),
(127, 23, 'Cocinero'),
(128, 23, 'Mozo/a'),
(129, 23, 'Parrillero'),
(130, 24, 'Peón'),
(131, 25, 'Servicios de cuidado'),
(132, 25, 'Servicios domésticos'),
(133, 25, 'Servicios de niñera'),
(134, 26, 'Modista'),
(135, 26, 'Sastrería'),
(136, 27, 'Electricista'),
(137, 27, 'Gasista'),
(138, 27, 'Instalaciones cloaca'),
(139, 27, 'Instalador alarma'),
(140, 27, 'Instalador cámara'),
(141, 27, 'Instalador de aire acondicionado'),
(142, 27, 'Instalador de gas'),
(143, 27, 'Instalador pileta'),
(144, 27, 'Plomero'),
(145, 27, 'Posero agua'),
(146, 27, 'Posero ciego'),
(147, 28, 'Cortador de pasto'),
(148, 28, 'Jardinero'),
(149, 28, 'Poda árbol'),
(150, 29, 'Limpieza de casas y oficinas'),
(151, 29, 'Limpieza pileta'),
(152, 29, 'Limpieza vidrio alto'),
(153, 29, 'Personal de limpieza'),
(154, 30, 'Depostador'),
(155, 30, 'Peón carga descarga'),
(156, 31, 'Jardinería'),
(157, 32, 'Mantenimiento de piletas'),
(158, 33, 'Community manager'),
(159, 33, 'Marketing'),
(160, 33, 'Publicidad'),
(161, 33, 'SEO/SEM'),
(162, 34, 'Locución'),
(163, 35, 'Carpintero metálico'),
(164, 35, 'Cerrajería'),
(165, 35, 'Herrero'),
(166, 35, 'Soldador aluminio'),
(167, 35, 'Soldador plata'),
(168, 35, 'Tornero'),
(169, 36, 'Peón de mudanza'),
(170, 37, 'Profesor/a de batería'),
(171, 37, 'Profesor/a de guitarra'),
(172, 37, 'Profesor/a de música'),
(173, 38, 'Codificador vale'),
(174, 39, 'Reparación ascensor'),
(175, 39, 'Reparación caldera'),
(176, 39, 'Reparación pileta'),
(177, 39, 'Reparación radiador'),
(178, 39, 'Reparador de electrodomésticos'),
(179, 39, 'Reparador de electrónica'),
(180, 39, 'Zapateros'),
(181, 40, 'Acompañante terapéutico'),
(182, 40, 'Camillero'),
(183, 40, 'Canabi medicinal'),
(184, 40, 'Enfermera'),
(185, 40, 'Kinesióloga'),
(186, 40, 'Pediatra'),
(187, 40, 'Odontólogo/a'),
(188, 40, 'Psicología'),
(189, 40, 'Quiropráctico'),
(190, 41, 'Veterinario/a'),
(191, 42, 'Seguridad'),
(192, 42, 'Seguridad privada'),
(193, 42, 'Sereno'),
(194, 43, 'Policía'),
(195, 44, 'Asistente personal'),
(196, 44, 'Flete'),
(197, 44, 'Fotografías'),
(198, 44, 'Fotógrafo/a'),
(199, 44, 'Imprenta'),
(200, 44, 'Intérprete'),
(201, 44, 'Paseador/a de perros'),
(202, 44, 'Peluquero/a de hombres'),
(203, 44, 'Peluquero/a de mujeres'),
(204, 44, 'Peluquero/a de perros'),
(205, 44, 'Personal shop'),
(206, 44, 'Traductor/a'),
(207, 44, 'Videógrafo/a'),
(208, 45, 'Embalsamador'),
(209, 45, 'Funeraria'),
(210, 46, 'Abogado/a'),
(211, 46, 'Agrimensor'),
(212, 46, 'Arquitecto'),
(213, 46, 'Contador'),
(214, 46, 'Escribano'),
(215, 46, 'Gestoría del auto'),
(216, 46, 'Gestoría de seguro'),
(217, 46, 'Ingeniero'),
(218, 46, 'Mecánico dental'),
(219, 46, 'Peritos caligrafía'),
(220, 47, 'Desarrollador/a web'),
(221, 47, 'Reparación de computadoras'),
(222, 47, 'Reparación de PC'),
(223, 47, 'Soporte técnico'),
(224, 48, 'Ambulancias'),
(225, 48, 'Bicicletero'),
(226, 48, 'Chapista'),
(227, 48, 'Detailing estética auto'),
(228, 48, 'Electricista auto'),
(229, 48, 'Estibadores'),
(230, 48, 'Expedición'),
(231, 48, 'Fletes'),
(232, 48, 'Grúa auto'),
(233, 48, 'Lavado auto'),
(234, 48, 'Limpieza tapizado'),
(235, 48, 'Mecánico auto'),
(236, 48, 'Mecánico camión'),
(237, 48, 'Mecánico de motos'),
(238, 48, 'Mecánico tractor'),
(239, 48, 'Micro turismo'),
(240, 48, 'Mudanzas'),
(241, 48, 'Pintura auto'),
(242, 48, 'Polarizado auto'),
(243, 48, 'Remis auto'),
(244, 48, 'Remis moto'),
(245, 48, 'Saca bollos de auto'),
(246, 48, 'Sonido auto'),
(247, 48, 'Taxi'),
(248, 48, 'Trafic escolar'),
(249, 48, 'Trafic viaje'),
(250, 48, 'Transporte escolar'),
(251, 49, 'Guía turístico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ranks`
--

CREATE TABLE `ranks` (
  `id` int(11) NOT NULL,
  `rank` varchar(10) NOT NULL,
  `points` smallint(6) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `icon` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ranks`
--

INSERT INTO `ranks` (`id`, `rank`, `points`, `price`, `discount`, `icon`) VALUES
(1, 'Sin Rango', 9, 0.00, 0, 'NULL'),
(2, 'Bronce', 49, 0.00, 0, 'NULL'),
(3, 'Plata', 99, 0.00, 0, 'NULL'),
(4, 'Oro', 499, 0.00, 0, 'NULL'),
(5, 'Platino', 500, 0.00, 0, 'NULL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `id_contracting_user` int(11) NOT NULL,
  `id_contracted_user` int(11) NOT NULL,
  `id_reason` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `stars` tinyint(4) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ratings_tasks`
--

CREATE TABLE `ratings_tasks` (
  `id` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `liked` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reasons`
--

CREATE TABLE `reasons` (
  `id` int(11) NOT NULL,
  `reason` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reasons`
--

INSERT INTO `reasons` (`id`, `reason`) VALUES
(1, 'Amable'),
(2, 'Confiable'),
(3, 'Excelente trabajo'),
(4, 'Muy amable'),
(5, 'Otro motivo'),
(6, 'Siguió las tareas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `id_contracting_user` int(11) NOT NULL,
  `id_contracted_user` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_profession` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `note` text NOT NULL,
  `enabled` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `requests_images`
--

CREATE TABLE `requests_images` (
  `id` int(11) NOT NULL,
  `id_request` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'Administrador'),
(2, 'Contratante'),
(3, 'Profesional'),
(4, 'Proveedor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `scribblers`
--

CREATE TABLE `scribblers` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_profession` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `description` text DEFAULT NULL,
  `scribbler` tinyint(4) NOT NULL,
  `banner` tinyint(4) NOT NULL,
  `Close` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `scribblers_images`
--

CREATE TABLE `scribblers_images` (
  `id` int(11) NOT NULL,
  `id_scribbler` int(11) NOT NULL,
  `image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `subscription` varchar(10) NOT NULL,
  `price` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `subscription`, `price`) VALUES
(1, 'prueba 1', 12.20),
(2, 'prueba 2', 120.20),
(3, 'Chat', 250.00),
(4, 'Redes', 200.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `id_request` int(11) NOT NULL,
  `task` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `id_role` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `banned` tinyint(4) DEFAULT 0,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` text NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `legend` text DEFAULT NULL,
  `address` text NOT NULL,
  `location` text NOT NULL,
  `latitude` text NOT NULL,
  `longitude` text NOT NULL,
  `alternative_address` text NOT NULL,
  `alternative_location` text NOT NULL,
  `alternative_latitude` text NOT NULL,
  `alternative_longitude` text NOT NULL,
  `front_document` text NOT NULL,
  `avatar` text NOT NULL,
  `banner` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_categories`
--

CREATE TABLE `users_categories` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_networks`
--

CREATE TABLE `users_networks` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_network` int(11) NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_notifications`
--

CREATE TABLE `users_notifications` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_notification` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `reviewed` tinyint(4) DEFAULT 0,
  `id_post` int(11) DEFAULT NULL,
  `id_user_related` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_professions`
--

CREATE TABLE `users_professions` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_profession` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_ranks`
--

CREATE TABLE `users_ranks` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_rank` int(11) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_subscriptions`
--

CREATE TABLE `users_subscriptions` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_subscription` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `enabled` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `advertising`
--
ALTER TABLE `advertising`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_profession` (`id_profession`),
  ADD KEY `id_payment` (`id_payment`);

--
-- Indices de la tabla `budgets`
--
ALTER TABLE `budgets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_buyer` (`id_buyer`),
  ADD KEY `id_seller` (`id_seller`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `certificates`
--
ALTER TABLE `certificates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sender_user` (`id_sender_user`),
  ADD KEY `id_receiver_user` (`id_receiver_user`);

--
-- Indices de la tabla `criminal_records`
--
ALTER TABLE `criminal_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `networks`
--
ALTER TABLE `networks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `payment_plans`
--
ALTER TABLE `payment_plans`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_profession` (`id_profession`);

--
-- Indices de la tabla `posts_images`
--
ALTER TABLE `posts_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`);

--
-- Indices de la tabla `posts_postulates`
--
ALTER TABLE `posts_postulates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_postulate` (`id_postulate`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `products_images`
--
ALTER TABLE `products_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `professions`
--
ALTER TABLE `professions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `ranks`
--
ALTER TABLE `ranks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_contracting_user` (`id_contracting_user`),
  ADD KEY `id_contracted_user` (`id_contracted_user`),
  ADD KEY `id_reason` (`id_reason`);

--
-- Indices de la tabla `ratings_tasks`
--
ALTER TABLE `ratings_tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_task` (`id_task`);

--
-- Indices de la tabla `reasons`
--
ALTER TABLE `reasons`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_contracting_user` (`id_contracting_user`),
  ADD KEY `id_contracted_user` (`id_contracted_user`),
  ADD KEY `id_profession` (`id_profession`),
  ADD KEY `id_post` (`id_post`);

--
-- Indices de la tabla `requests_images`
--
ALTER TABLE `requests_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_request` (`id_request`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `scribblers`
--
ALTER TABLE `scribblers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_profession` (`id_profession`);

--
-- Indices de la tabla `scribblers_images`
--
ALTER TABLE `scribblers_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_scribbler` (`id_scribbler`);

--
-- Indices de la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_request` (`id_request`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_role` (`id_role`);

--
-- Indices de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `users_networks`
--
ALTER TABLE `users_networks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_network` (`id_network`);

--
-- Indices de la tabla `users_notifications`
--
ALTER TABLE `users_notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_notification` (`id_notification`);

--
-- Indices de la tabla `users_professions`
--
ALTER TABLE `users_professions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_profession` (`id_profession`);

--
-- Indices de la tabla `users_ranks`
--
ALTER TABLE `users_ranks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_rank` (`id_rank`);

--
-- Indices de la tabla `users_subscriptions`
--
ALTER TABLE `users_subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_subscription` (`id_subscription`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `advertising`
--
ALTER TABLE `advertising`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `budgets`
--
ALTER TABLE `budgets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `certificates`
--
ALTER TABLE `certificates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `criminal_records`
--
ALTER TABLE `criminal_records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `networks`
--
ALTER TABLE `networks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `payment_plans`
--
ALTER TABLE `payment_plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `posts_images`
--
ALTER TABLE `posts_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `posts_postulates`
--
ALTER TABLE `posts_postulates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products_images`
--
ALTER TABLE `products_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `professions`
--
ALTER TABLE `professions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=252;

--
-- AUTO_INCREMENT de la tabla `ranks`
--
ALTER TABLE `ranks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ratings_tasks`
--
ALTER TABLE `ratings_tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reasons`
--
ALTER TABLE `reasons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `requests_images`
--
ALTER TABLE `requests_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `scribblers`
--
ALTER TABLE `scribblers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `scribblers_images`
--
ALTER TABLE `scribblers_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_networks`
--
ALTER TABLE `users_networks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_notifications`
--
ALTER TABLE `users_notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_professions`
--
ALTER TABLE `users_professions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_ranks`
--
ALTER TABLE `users_ranks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_subscriptions`
--
ALTER TABLE `users_subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `advertising`
--
ALTER TABLE `advertising`
  ADD CONSTRAINT `advertising_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `advertising_ibfk_2` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `advertising_ibfk_3` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `advertising_ibfk_4` FOREIGN KEY (`id_profession`) REFERENCES `professions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `advertising_ibfk_5` FOREIGN KEY (`id_payment`) REFERENCES `payment_plans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `budgets`
--
ALTER TABLE `budgets`
  ADD CONSTRAINT `budgets_ibfk_1` FOREIGN KEY (`id_buyer`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `budgets_ibfk_2` FOREIGN KEY (`id_seller`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `budgets_ibfk_3` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `certificates`
--
ALTER TABLE `certificates`
  ADD CONSTRAINT `certificates_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_ibfk_1` FOREIGN KEY (`id_sender_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `chats_ibfk_2` FOREIGN KEY (`id_receiver_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `criminal_records`
--
ALTER TABLE `criminal_records`
  ADD CONSTRAINT `criminal_records_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`id_profession`) REFERENCES `professions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `posts_images`
--
ALTER TABLE `posts_images`
  ADD CONSTRAINT `posts_images_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `posts_postulates`
--
ALTER TABLE `posts_postulates`
  ADD CONSTRAINT `posts_postulates_ibfk_2` FOREIGN KEY (`id_postulate`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_postulates_scribblers_FK` FOREIGN KEY (`id_post`) REFERENCES `scribblers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products_images`
--
ALTER TABLE `products_images`
  ADD CONSTRAINT `products_images_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `professions`
--
ALTER TABLE `professions`
  ADD CONSTRAINT `professions_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`id_contracting_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`id_contracted_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_3` FOREIGN KEY (`id_reason`) REFERENCES `reasons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ratings_tasks`
--
ALTER TABLE `ratings_tasks`
  ADD CONSTRAINT `ratings_tasks_ibfk_1` FOREIGN KEY (`id_task`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`id_contracting_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requests_ibfk_2` FOREIGN KEY (`id_contracted_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requests_ibfk_3` FOREIGN KEY (`id_profession`) REFERENCES `professions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requests_scribblers_FK` FOREIGN KEY (`id_post`) REFERENCES `scribblers` (`id`);

--
-- Filtros para la tabla `requests_images`
--
ALTER TABLE `requests_images`
  ADD CONSTRAINT `requests_images_ibfk_1` FOREIGN KEY (`id_request`) REFERENCES `requests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requests_images_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `scribblers`
--
ALTER TABLE `scribblers`
  ADD CONSTRAINT `scribblers_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `scribblers_ibfk_2` FOREIGN KEY (`id_profession`) REFERENCES `professions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `scribblers_images`
--
ALTER TABLE `scribblers_images`
  ADD CONSTRAINT `scribblers_images_ibfk_1` FOREIGN KEY (`id_scribbler`) REFERENCES `scribblers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`id_request`) REFERENCES `requests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_categories`
--
ALTER TABLE `users_categories`
  ADD CONSTRAINT `users_categories_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_categories_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_networks`
--
ALTER TABLE `users_networks`
  ADD CONSTRAINT `users_networks_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_networks_ibfk_2` FOREIGN KEY (`id_network`) REFERENCES `networks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_notifications`
--
ALTER TABLE `users_notifications`
  ADD CONSTRAINT `users_notifications_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_notifications_ibfk_2` FOREIGN KEY (`id_notification`) REFERENCES `notifications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_professions`
--
ALTER TABLE `users_professions`
  ADD CONSTRAINT `users_professions_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_professions_ibfk_2` FOREIGN KEY (`id_profession`) REFERENCES `professions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_ranks`
--
ALTER TABLE `users_ranks`
  ADD CONSTRAINT `users_ranks_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ranks_ibfk_2` FOREIGN KEY (`id_rank`) REFERENCES `ranks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_subscriptions`
--
ALTER TABLE `users_subscriptions`
  ADD CONSTRAINT `users_subscriptions_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_subscriptions_ibfk_2` FOREIGN KEY (`id_subscription`) REFERENCES `subscriptions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
