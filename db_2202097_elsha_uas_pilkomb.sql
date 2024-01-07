-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8111
-- Generation Time: Jan 02, 2024 at 09:08 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2202097_elsha_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `peminjamanbuku_elsha`
--

CREATE TABLE `peminjamanbuku_elsha` (
  `id` int(11) NOT NULL,
  `judul_buku` varchar(100) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `nama_peminjam` varchar(100) NOT NULL,
  `alamat_peminjam` varchar(100) NOT NULL,
  `noHp_peminjam` varchar(100) NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `lama_pinjam` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `peminjamanbuku_elsha`
--

INSERT INTO `peminjamanbuku_elsha` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`) VALUES
(1, 'Malin Kundang', 12, 'Elsha', 'Bandung,Jawabarat', '082120857497', '2024-01-01', '2024-01-17', '16 hari'),
(2, 'Si Kancil', 30, 'Jimin', 'Busan, Korea', '0119289273', '2023-12-01', '2023-12-03', '2 hari'),
(3, 'Dilan 1990', 20, 'Jungkook', 'Garut, Jawabarat', '082218372982', '2023-11-08', '2023-11-11', '3 hari'),
(4, 'Merry You', 2, 'Taehyung', 'Sumedang, Jawabarat', '02387828178', '2023-10-01', '2023-10-07', '6 hari'),
(5, 'Our Beloved Summer', 10, 'Suga', 'Jakarta', '082172918911', '2024-01-03', '2024-01-07', '4 hari');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peminjamanbuku_elsha`
--
ALTER TABLE `peminjamanbuku_elsha`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjamanbuku_elsha`
--
ALTER TABLE `peminjamanbuku_elsha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
