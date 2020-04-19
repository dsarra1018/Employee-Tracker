-- Drops the employee_tracker_db if it exists currently --
DROP DATABASE IF EXISTS employee_tracker_db;
-- Create the "employee_tracker_db" --
CREATE DATABASE employee_tracker_db;
-- Makes it so all of the following code will affect employee_tracker_db --
USE employee_tracker_db;

-- Creates the table "department" within employee_tracker_db --
CREATE TABLE department (
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

-- Creates the table "role" within employee_tracker_db --
CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10, 2),
    department_id INT,
    INDEX dept_ind (department_id),
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE CASCADE,
    PRIMARY KEY(id)
);
