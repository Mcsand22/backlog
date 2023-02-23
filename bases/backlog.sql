-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema backlog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema backlog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `backlog` DEFAULT CHARACTER SET utf8 ;
USE `backlog` ;

-- -----------------------------------------------------
-- Table `backlog`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `backlog`.`usuarios` (
  `idusuarios` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombreUsuario` VARCHAR(45) NOT NULL,
  `apellidoUsuario` VARCHAR(45) NOT NULL,
  `mailUsuario` VARCHAR(45) NOT NULL,
  `contraseñaUsuario` VARCHAR(45) NOT NULL,
  `imgUsuario` BLOB NULL,
  UNIQUE INDEX `mailUsuario_UNIQUE` (`mailUsuario` ASC),
  PRIMARY KEY (`idusuarios`),
  UNIQUE INDEX `idusuarios_UNIQUE` (`idusuarios` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `backlog`.`boards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `backlog`.`boards` (
  `idboards` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tituloBoard` VARCHAR(45) NOT NULL,
  `participantes` VARCHAR(45) NOT NULL,
  `imgFondo` BLOB NULL,
  PRIMARY KEY (`idboards`),
  UNIQUE INDEX `idboards_UNIQUE` (`idboards` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `backlog`.`estados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `backlog`.`estados` (
  `idestados` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `estados` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idestados`),
  UNIQUE INDEX `idestados_UNIQUE` (`idestados` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `backlog`.`cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `backlog`.`cards` (
  `idcards` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tituloCard` VARCHAR(45) NOT NULL,
  `descriptionCard` VARCHAR(255) NOT NULL,
  `estados_idestados` INT UNSIGNED NOT NULL,
  `boards_idboards` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idcards`, `estados_idestados`, `boards_idboards`),
  UNIQUE INDEX `idcards_UNIQUE` (`idcards` ASC),
  INDEX `fk_cards_estados1_idx` (`estados_idestados` ASC),
  INDEX `fk_cards_boards1_idx` (`boards_idboards` ASC),
  CONSTRAINT `fk_cards_estados1`
    FOREIGN KEY (`estados_idestados`)
    REFERENCES `backlog`.`estados` (`idestados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cards_boards1`
    FOREIGN KEY (`boards_idboards`)
    REFERENCES `backlog`.`boards` (`idboards`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `backlog`.`usuarios_boards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `backlog`.`usuarios_boards` (
  `idusuarios_boards` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idusuarios` INT UNSIGNED NOT NULL,
  `idboards` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idusuarios_boards`),
  UNIQUE INDEX `idusuarios_UNIQUE` (`idusuarios` ASC),
  UNIQUE INDEX `idboards_UNIQUE` (`idboards` ASC),
  INDEX `idboards_idx` (`idboards` ASC, `idusuarios` ASC),
  CONSTRAINT `idusuarios`
    FOREIGN KEY (`idusuarios`)
    REFERENCES `backlog`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idboards`
    FOREIGN KEY (`idboards`)
    REFERENCES `backlog`.`boards` (`idboards`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
