-- 1
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2
SELECT CONCAT(first_name, ' ', last_name) AS name FROM customer
WHERE (active IS FALSE AND store_id = 2) AND first_name <> 'KENNETH'
ORDER BY first_name, last_name;

-- 3
SELECT title, description, release_year, replacement_cost FROM film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- 4
SELECT COUNT(*) FROM customer
WHERE store_id = 1 AND active IS TRUE;

-- 5
SELECT * FROM customer WHERE store_id = 1 AND active IS FALSE;

-- 6
SELECT * FROM film WHERE rating = 'NC-17' ORDER BY rental_rate, title LIMIT 50;