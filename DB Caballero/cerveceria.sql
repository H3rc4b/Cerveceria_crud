-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 11-08-2021 a las 03:47:06
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `cerveceria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'La vacuna Sinopharm está entre las candidatas para inocular niños y adolescentes de 3 a 17 en la Argentina', 'La ministra de Salud, Carla Vizzotti, se reunió hoy con investigadores de los Emiratos Árabes Unidos por el uso de emergencia de la vacuna china en niños y adolescentes. Aún el productor chino no publicó la información científica respaldatoria en menores\r\n10 de Agosto de 2021', 'El plan de vacunación a nivel nacional avanza en lograr inmunizaciones en las franjas etarias más bajas. Sin embargo, la mayoría de los productores de vacunas contra el COVID-19 no incluyeron en un principio como grupos priorizados a las niñas, niños y adolescentes -comprendidos entre 17 a 3 años, ya que ellos hasta la evidencia actual desarrollan el COVID-19 con cuadros leves; y sobre todo porque se necesitan ensayos clínicos específicos para esos grupos etarios.\r\n\r\nSin embargo, cada vez hay más consenso entre los especialistas de caminar hacia sociedades plenamente vacunadas, y acerca de que los menores de 18 representan un segmento etario fundamental para colaborar en la tan mentada inmunidad de rebaño. Queda claro entonces que los niños y jóvenes inmunizados colaborarán a “perforar” los contagios y la aparición de nuevas variantes. Es cierto también que los adolescentes y los niños hoy representan el segmento etario con menos incidencia en la enfermedad COVID-19, pero los mismos especialistas advirtieron sobre la necesidad de incluir a los niños, a pesar de que sus posibilidades de enfermar gravemente y morir fue estimada en 1 en 500.000.'),
(2, 'Messi ya brilla en PSG: el repaso de una jornada histórica', 'Leo revolucionó en su llegada a París. En Olé te mostramos, con el mejor material multimedia, todo lo sucedido lo largo del día.', 'El mundo está revolucionado, con el epicentro de la cuestión en París. Porque Lionel Messi llegó este martes a la capital francesa para convertirse en nuevo jugador de PSG. Un día histórico para todos. Después de casi 17 años como profesional, Leo dejó, con dolor, Barcelona para unirse al equipo que comanda actualmente Mauricio Pochettino, plagado de otras estrellas y con altísimas ambiciones para esta temporada. A continuación, en Olé, vamos a repasar -con amplio contenido audiovisual- todo lo que fue el día de nuestro 10, en una jornada maratónica. Y seguirá este miércoles, con su presentación formal ante la prensa.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Hernan', 'd54d1702ad0f8326224b817c796763c9'),
(6, 'caballero', 'c33367701511b4f6020ec61ded352059');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
