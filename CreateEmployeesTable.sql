CREATE DATABASE SampleDB;
USE SampleDB;

CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    HireDate DATE
);

INSERT INTO Employees (FirstName, LastName, HireDate)
VALUES ('John', 'Doe', '2025-04-10');

