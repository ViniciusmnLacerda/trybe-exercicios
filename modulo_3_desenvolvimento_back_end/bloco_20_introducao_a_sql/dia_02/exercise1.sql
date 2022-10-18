-- código para os exercícios
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;
CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);
CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);
CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);
INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');
 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);
 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');

-- 1
SELECT 'This is SQL Exercise, Practice and Solution';

-- 2
SELECT 1, 2, 3;

-- 3
SELECT 10 + 15;

-- 4
SELECT (980 * 3) / 7;

-- 5
SELECT * FROM Scientists;

-- 6
SELECT name AS 'Nome do Projeto', hours AS 'Tempo de Trabalho' FROM Projects;

-- 7
SELECT * FROM Scientists ORDER BY name;

-- 8
SELECT * FROM Projects ORDER BY name DESC;

-- 9
SELECT * FROM Projects ORDER BY name DESC;

-- 10
SELECT CONCAT(
	'O projeto ',
    name,
    ' precisou de ',
    hours,
    ' horas para ser concluído.'
) AS 'Relatório dos Projetos' FROM Projects;

-- 11
SELECT CONCAT(
	'O projeto ',
    name,
    ' precisou de ',
    hours,
    ' horas para ser concluído.'
) AS 'Projetos mais longos' FROM Projects ORDER BY hours DESC LIMIT 3;

-- 12
SELECT DISTINCT project FROM AssignedTo;

-- 13
SELECT name FROM Projects ORDER BY hours LIMIT 2 OFFSET 1;

-- 14
SELECT * FROM Projects ORDER BY hours LIMIT 5;

-- 15
SELECT CONCAT(
	'Existem ',
    COUNT(*),
    ' cientistas na tabela Scientists.'
 ) AS resultado FROM Scientists;