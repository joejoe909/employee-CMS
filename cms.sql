DROP DATABASE IF EXISTS employees_DB;
CREATE database employees_DB;
​
USE employees_DB;
​
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  Department_Name VARCHAR(100) DEFAULT '' NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40),
    salary DECIMAL default 0,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id VARCHAR(30),
    manager_id VARCHAR(30) DEFAULT '' NOT NULL,
    PRIMARY KEY(id)
);
​

INSERT INTO department(id, name)
VALUES(0, "Human Resources");

INSERT INTO role(id, title, salary, department_id)
VALUES(0, "HR Manager", 120000, 0);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(0, "Katie", "Beckenshaw", 0, 0);






