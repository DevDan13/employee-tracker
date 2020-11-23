DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
dep_name VARCHAR(30),
primary key(id)
);

CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL (10,2),
department_id INTEGER(11) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(department_id) REFERENCES department (id)
);

CREATE TABLE employee(
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER(11) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(role_id) REFERENCES role (id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;