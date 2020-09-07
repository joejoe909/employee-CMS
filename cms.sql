DROP DATABASE IF EXISTS employees_DB;
CREATE database employees_DB;
​
USE employees_DB;
​
CREATE TABLE department(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role_id INT,
    manager_id INT,
);
​

INSERT INTO department(id, name)
VALUES(0, "Human Resources");

INSERT INTO role(id, title, salary, department_id)
VALUES(0, "HR Manager", 120000, 0);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(0, "Katie", "Beckenshaw", 0, 0);


