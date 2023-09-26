-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2023 at 05:31 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `publish` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `description`, `publish`, `createdAt`, `updatedAt`) VALUES
(2, 'code title 11', 1100, 'create some Api Via Node Js Sequalize 4', 0, '2023-08-30 15:17:35', '2023-08-30 15:17:35'),
(3, 'code title 2', 1200, 'create some Api Via Node Js Sequalize 2', 0, '2023-08-30 15:17:48', '2023-08-30 15:17:48'),
(4, 'code title 3', 1300, 'create some Api Via Node Js Sequalize 3', 0, '2023-08-30 15:17:55', '2023-08-30 15:17:55'),
(5, 'code title 5', 1500, 'create some Api Via Node Js Sequalize 5', 0, '2023-08-30 15:18:03', '2023-08-30 15:18:03'),
(6, 'code title 6', 1600, 'create some Api Via Node Js Sequalize 6', 0, '2023-08-30 15:18:10', '2023-08-30 15:18:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
