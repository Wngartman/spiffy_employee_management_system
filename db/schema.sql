DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  role_name VARCHAR(30) UNIQUE NOT NULL,
  salary 
  department_id
);

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name
  last_name
  role_id
  mananger_id
);

