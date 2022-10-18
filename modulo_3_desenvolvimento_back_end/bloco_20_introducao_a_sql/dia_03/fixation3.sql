-- PRÁTICA

-- exemplo de IN
SELECT * FROM payment WHERE customer_id IN (269, 239, 126, 399, 142);

-- exemplo de BETWEEN com strings
SELECT * FROM language WHERE name BETWEEN 'Italian' AND 'Mandarin';

-- exemplo de BETWEEN com datas
SELECT * FROM rental WHERE rental_date BETWEEN '2005-05-27' AND '2005-07-17';

-- EXERCÍCIOS

-- 1
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd,' 'mason', 'morales', 'kennedy')
ORDER BY first_name, last_name;

-- 2
SELECT email FROM customer
WHERE address_id IN (172, 173, 174, 175, 176);

-- 3
SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

-- 4
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

-- 5
SELECT title, rating FROM film
WHERE rating IN ('G', 'PG' ,'PG-13')
ORDER BY title
LIMIT 500;