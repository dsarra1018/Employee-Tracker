-- Drops the employee_tracker_db if it exists currently --
DROP DATABASE IF EXISTS employee_tracker_db;
-- Create the "employee_tracker_db" --
CREATE DATABASE employee_tracker_db;
-- Makes it so all of the following code will affect employee_tracker_db --
USE employee_tracker_db;

-- Creates the table "department" within employee_tracker_db --
CREATE TABLE department (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

-- Creates the table "role" within employee_tracker_db --
CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT NOT NULL,
    INDEX dept_ind (department_id),
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE CASCADE,
    PRIMARY KEY(id)
);

-- Creates the table "employee" within employee_tracker_db --
CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    INDEX role_ind (role_id),
    INDEX manager_ind (manager_id),
    FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE CASCADE,
    FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        ON DELETE CASCADE,
    PRIMARY KEY(id)
);