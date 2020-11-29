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

INSERT INTO department (dep_name) VALUES ('Software Engineer'), ('HR'), ('finance'), ('sales'),  ('mail');

INSERT INTO role (title,salary, department_id) VALUES 
('Front end developer', 78600.00, 1), 
('HR Representative',50000.00,2),
('Accountant',38000.00,3), 
('product director',60000.00,4),  
('mailman',15000.00,5);

INSERT INTO employee (first_name, last_name,role_id) VALUES  
("Gavin","O'Brien",1), 
('Amanda',"D'Argenio",2),
('Sean', 'Beirne',3), 
('Daniel', 'Cintron',4),  
('Buddy','Willson',5);


DELETE FROM employee WHERE id = 11;