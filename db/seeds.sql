USE employee_tracker_db;

-- Populating the "department" table --
INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

-- Populating the "role" table --
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100.00, 1), ('Salesperson', 80.00, 1),('Lead Engineer', 150.00, 2), ('Software Engineer', 120.00, 2), ('Accountant',  125.00, 3), ('Legal Team Lead', 250.00, 4), ('Lawyer', 190.00, 4);

-- Populating the "employee" table --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 3), ('Mike', 'Chan', 2, 1), ('Ashley', 'Rodriquez', 3, NULL), ('Kevin', 'Tupik', 4, 3),
('Malia', 'Brown', 5, NULL), ('Sarah', 'Lourd', 6, NULL), ('Tom', 'Allen', 7, 6), ('Tammer', 'Galal', 4, 4);