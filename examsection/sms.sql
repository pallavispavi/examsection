-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3325
-- Generation Time: Aug 10, 2021 at 05:59 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sms`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance1`
--

CREATE TABLE `attendance1` (
  `USN` varchar(12) NOT NULL,
  `Name` text NOT NULL,
  `Branch` text NOT NULL DEFAULT 'ISE',
  `Year` int(11) NOT NULL DEFAULT 1,
  `Status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance1`
--

INSERT INTO `attendance1` (`USN`, `Name`, `Branch`, `Year`, `Status`) VALUES
('4VM20IS001', 'Asha', 'ISE', 1, 'Good'),
('4VM20IS002', 'Arohi', 'ISE', 1, 'Weak');

-- --------------------------------------------------------

--
-- Table structure for table `attendance2`
--

CREATE TABLE `attendance2` (
  `USN` varchar(12) NOT NULL,
  `Name` text NOT NULL,
  `Branch` text NOT NULL DEFAULT 'ISE',
  `Year` int(11) NOT NULL DEFAULT 2,
  `Status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance2`
--

INSERT INTO `attendance2` (`USN`, `Name`, `Branch`, `Year`, `Status`) VALUES
('4VM19IS001', 'Aarvi', 'ISE', 2, 'Good'),
('4VM19IS002', 'Axar', 'ISE', 2, 'Weak');

-- --------------------------------------------------------

--
-- Table structure for table `attendance3`
--

CREATE TABLE `attendance3` (
  `USN` varchar(12) NOT NULL,
  `Name` text NOT NULL,
  `Branch` text NOT NULL DEFAULT 'ISE',
  `Year` int(11) NOT NULL DEFAULT 3,
  `Status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance3`
--

INSERT INTO `attendance3` (`USN`, `Name`, `Branch`, `Year`, `Status`) VALUES
('4VM18IS036', 'Spandana A P', 'ISE', 3, 'Good');

-- --------------------------------------------------------

--
-- Table structure for table `attendance4`
--

CREATE TABLE `attendance4` (
  `USN` varchar(12) NOT NULL,
  `Name` text NOT NULL,
  `Branch` text NOT NULL DEFAULT 'ISE',
  `Year` int(11) NOT NULL DEFAULT 4,
  `Status` text NOT NULL,
  `Min Required` varchar(4) NOT NULL DEFAULT '80%',
  `Obtained` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance4`
--

INSERT INTO `attendance4` (`USN`, `Name`, `Branch`, `Year`, `Status`, `Min Required`, `Obtained`) VALUES
('4VM17IS020', 'Nishi', 'ISE', 4, 'Average', '80%', '70%'),
('4VM17IS033', 'Sheethu', 'ISE', 4, 'Good', '80%', '85%'),
('4VM17IS035', 'Krupa', 'ISE', 4, 'Good', '80%', ''),
('4VM17IS036', 'Shree', 'ISE', 4, 'Good', '80%', '');

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `USN` varchar(12) NOT NULL,
  `Name` text NOT NULL,
  `Branch` text NOT NULL DEFAULT 'ISE',
  `Sem` int(11) NOT NULL,
  `Email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ia`
--

CREATE TABLE `ia` (
  `sub_code` varchar(6) NOT NULL,
  `sub_name` text NOT NULL,
  `max_marks` int(11) NOT NULL,
  `ia1` int(11) NOT NULL,
  `ia2` int(11) NOT NULL,
  `ia3` int(11) NOT NULL,
  `Avg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ia`
--

INSERT INTO `ia` (`sub_code`, `sub_name`, `max_marks`, `ia1`, `ia2`, `ia3`, `Avg`) VALUES
('18CS51', 'ME', 30, 25, 28, 22, 25);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `s_no` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`s_no`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `personal`
--

CREATE TABLE `personal` (
  `usn` varchar(12) NOT NULL,
  `name` text NOT NULL,
  `father_name` text NOT NULL,
  `mother_name` text NOT NULL,
  `present_address` longtext NOT NULL,
  `permanent_address` longtext NOT NULL,
  `phone` bigint(12) NOT NULL,
  `Religion` text NOT NULL,
  `siblings` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personal`
--

INSERT INTO `personal` (`usn`, `name`, `father_name`, `mother_name`, `present_address`, `permanent_address`, `phone`, `Religion`, `siblings`) VALUES
('4VM18IS020', 'Nischitha M', 'Mahadevaswamy', 'Shashikala', 'Hostel', 'T-narasipura', 9886929505, 'Hindu', 'Brother-Akarsh M'),
('4VM18IS33', 'Sheethal C J', 'Joseph', 'Shini', 'Hostel', 'Chikmagalur', 6360874426, 'Christian', 'Sister-Neethal C J');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `s_no` int(11) NOT NULL,
  `usn` varchar(12) NOT NULL,
  `name` text NOT NULL,
  `sem` int(11) NOT NULL,
  `branch` text NOT NULL,
  `mobile` bigint(11) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`s_no`, `usn`, `name`, `sem`, `branch`, `mobile`, `email`, `password`) VALUES
(1, '4VM18IS036', 'Spandana A P', 6, 'ISE', 8277023874, 'praspala.spandana@gmail.com', 'spandana@36');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `sub_code` varchar(12) NOT NULL,
  `sub_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`sub_code`, `sub_name`) VALUES
('18CHE11', 'Chemistry'),
('18CIV11', 'Civil');

-- --------------------------------------------------------

--
-- Table structure for table `subject2`
--

CREATE TABLE `subject2` (
  `sub_code` varchar(10) NOT NULL,
  `sub_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject2`
--

INSERT INTO `subject2` (`sub_code`, `sub_name`) VALUES
('18PHY11', 'Physics'),
('18EE11', 'Electrical');

-- --------------------------------------------------------

--
-- Table structure for table `subject3`
--

CREATE TABLE `subject3` (
  `sub_code` varchar(10) NOT NULL,
  `sub_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject3`
--

INSERT INTO `subject3` (`sub_code`, `sub_name`) VALUES
('18CS31', 'DataStructures'),
('18CS32', 'Analog and digital computation');

-- --------------------------------------------------------

--
-- Table structure for table `subject4`
--

CREATE TABLE `subject4` (
  `sub_code` varchar(10) NOT NULL,
  `sub_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject4`
--

INSERT INTO `subject4` (`sub_code`, `sub_name`) VALUES
('18CS41', 'OOC'),
('18CS42', 'Datacommunication');

-- --------------------------------------------------------

--
-- Table structure for table `subject5`
--

CREATE TABLE `subject5` (
  `sub_code` varchar(10) NOT NULL,
  `sub_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject5`
--

INSERT INTO `subject5` (`sub_code`, `sub_name`) VALUES
('18CS51', 'python'),
('18CS52', 'DBMS');

-- --------------------------------------------------------

--
-- Table structure for table `subject6`
--

CREATE TABLE `subject6` (
  `sub_code` varchar(10) NOT NULL,
  `sub_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject6`
--

INSERT INTO `subject6` (`sub_code`, `sub_name`) VALUES
('18IS61', 'FS'),
('18IS62', 'ST');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance1`
--
ALTER TABLE `attendance1`
  ADD UNIQUE KEY `USN` (`USN`);

--
-- Indexes for table `attendance2`
--
ALTER TABLE `attendance2`
  ADD UNIQUE KEY `USN` (`USN`);

--
-- Indexes for table `attendance3`
--
ALTER TABLE `attendance3`
  ADD UNIQUE KEY `USN` (`USN`);

--
-- Indexes for table `attendance4`
--
ALTER TABLE `attendance4`
  ADD UNIQUE KEY `USN` (`USN`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD UNIQUE KEY `USN` (`USN`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
