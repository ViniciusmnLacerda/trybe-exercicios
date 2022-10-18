-- código para os exercícios
CREATE DATABASE PiecesProviders;
USE PiecesProviders;
CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);
CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);
CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);
INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');
INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');
INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);

-- 1
SELECT piece, price FROM Provides
WHERE provider = 'RBT';

-- 2
SELECT piec.name, prov.provider, prov.price
FROM Provides AS prov
-- com ajuda da Larissa
INNER JOIN Pieces AS piec ON piec.code = prov.piece
ORDER BY price DESC
LIMIT 5;

-- 3
SELECT provider, price FROM Provides ORDER BY price DESC LIMIT 4 OFFSET 3;

-- 4
SELECT * FROM Provides WHERE provider = 'HAL' ORDER BY price DESC;

-- 5
SELECT COUNT(*) FROM Provides WHERE piece = 1;