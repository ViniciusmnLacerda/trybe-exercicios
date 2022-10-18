-- 1
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
	VALUES
		('cadu', 'maverick', 2, 1, 1, 'ocadu');

-- 2
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
	VALUES
		('Maria', 'Capitolina', 3, 1, 1, 'Capitu'),
        ('Bento', 'Santiago', 3, 1, 0, 'Bentinho');

-- 3
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer LIMIT 5;

-- 4
INSERT INTO category (name)
	VALUES
		('Western Spaghetti'),
        ('Anime'),
        ('Historical');

-- 5
INSERT INTO store (manager_staff_id, address_id)
	VALUES
		(3, 3),
        (4, 4);