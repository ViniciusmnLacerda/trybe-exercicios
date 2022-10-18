-- PRÁTICA

-- usando a função DATE
SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-31';

-- usando o LIKE
SELECT * FROM payment
WHERE payment_date LIKE '2005-07-31%';

-- especificando data e hora
SELECT * FROM payment
WHERE payment_date LIKE '2005-08-20 00:30:52';

-- usando BETWEEN
SELECT * FROM payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

-- funções para selecionar partes da data
SELECT DATE(payment_date) FROM payment;
SELECT YEAR(payment_date) FROM payment;
SELECT MONTH(payment_date) FROM payment;
SELECT DAY(payment_date) FROM payment;
SELECT HOUR(payment_date) FROM payment;
SELECT MINUTE(payment_date) FROM payment;
SELECT SECOND(payment_date) FROM payment;

-- EXERCÍCIOS

-- 1
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

-- 2
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

-- 3
SELECT DATE(rental_date), YEAR(rental_date), MONTH(rental_date),
HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date), DATE(rental_date)
FROM rental WHERE rental_id = 10330;

-- 4
SELECT * FROM payment WHERE HOUR(payment_date) >= 22;