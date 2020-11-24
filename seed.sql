USE employee_db;

INSERT INTO department (dep_name) VALUES  ('Software Engineer'), ('HR'), ('finance'), ('sales'),  ('mail');

INSERT INTO role (title,salary, department_id) VALUES 
('Front end developer',78600.00,1), 
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