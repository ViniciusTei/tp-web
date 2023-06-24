-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Dez-2022 às 17:02
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ecommerce`
--
CREATE DATABASE IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ecommerce`;

-- --------------------------------------------------------
CREATE TABLE `cidade` (
  `cidadeId` int(12) NOT NULL AUTO_INCREMENT,
  `codigoCidade` varchar(15) NOT NULL,
  `nomeCidade` varchar(15) NOT NULL,
  `estadoCidade` varchar(2) NOT NULL,
  PRIMARY KEY(cidadeId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- idCliente, nomeCliente, enderecoCliente, telefoneCliente e idCidade
CREATE TABLE `cliente` (
  `idCliente` int(12) NOT NULL AUTO_INCREMENT,
  `nomeCliente` varchar(120) NOT NULL,
  `enderecoCliente` varchar(120) NOT NULL,
  `telefoneCliente` varchar(20) DEFAULT NULL,
  `idCidade` int(11) DEFAULT NULL,
  PRIMARY KEY(idCliente),
  FOREIGN KEY (idCidade) REFERENCES cidade(cidadeId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `login` (
  `loginId` int(12) NOT NULL AUTO_INCREMENT,
  `emailCliente` varchar(120) NOT NULL,
  `senhaCliente` varchar(15) NOT NULL,
  `nivelAcesso` int(11) DEFAULT NULL,
  PRIMARY KEY(loginId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `fabricante` (
  `fabricanteId` int(12) NOT NULL AUTO_INCREMENT,
  `nomeFabricante` varchar(120) NOT NULL,
  `siteFabricante` varchar(40) NOT NULL,
  PRIMARY KEY(fabricanteId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- (idProduto, descricaoProduto, estoqueProduto, precoCusto, precoVenda, idFabricante)
CREATE TABLE `produto` (
  `idProduto` int(12) NOT NULL AUTO_INCREMENT,
  `descricaoProduto` varchar(120) NOT NULL,
  `estoqueProduto` int(12) NOT NULL,
  `precoCusto` float(12) NOT NULL,
  `precoVenda` float(12) NOT NULL,
  `idFabricante` int(12),
  PRIMARY KEY(idProduto),
  FOREIGN KEY (idFabricante) REFERENCES fabricante(fabricanteId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Item (idItem, idVenda, idProduto, quantidadeItem)
-- Venda (idVendas, idCliente, dataVenda, valorTotal, valorPago e desconto)
CREATE TABLE `venda` (
  `idVendas` int(12) NOT NULL AUTO_INCREMENT,
  `idCliente` int(12) NOT NULL,
  `dataVenda` DATE NOT NULL,
  `valorTotal` float(12) NOT NULL,
  `valorPago` float(12) NOT NULL,
  `desconto` float(12) DEFAULT NULL,
  PRIMARY KEY(idVendas),
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `item` (
  `idItem` int(12) NOT NULL AUTO_INCREMENT,
  `idVenda` int(12) NOT NULL,
  `idProduto` int(12) NOT NULL,
  `quantidadeItem` int(12) NOT NULL,
  PRIMARY KEY(idItem),
  FOREIGN KEY (idVenda) REFERENCES venda(idVendas),
  FOREIGN KEY (idProduto) REFERENCES produto(idProduto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- insert admin user
INSERT INTO login VALUES (1, 'admin@admin.com', '123', '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
