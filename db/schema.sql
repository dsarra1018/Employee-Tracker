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

