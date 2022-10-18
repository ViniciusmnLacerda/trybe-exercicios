-- exemplo de DELETE
DELETE FROM film_text
WHERE title = 'ACADEMY DINOSAUR';

-- as restrições que podem ocorrer quando se tenta usar o DELETE são:

-- Rejeita o comando DELETE.
-- ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
-- ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
-- ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
-- ON DELETE CASCADE;

-- pra deletar uma coluna que possui chave estrangeira, primeiro se apaga todas as referências
DELETE FROM film_actor
WHERE actor_id = 7;

-- então, é possível apagar a coluna
DELETE FROM actor
WHERE first_name = 'GRACE';

-- o comando TRUNCATE é um DELETE sem WHERE, use com cuidado
-- TRUNCATE <nome da tabela>

-- 1
DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

-- 2
DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor WHERE first_name = 'MATTHEW';

-- 3
DELETE FROM film_text WHERE description LIKE '%saga%';

-- 4
TRUNCATE film_actor;
TRUNCATE film_category;