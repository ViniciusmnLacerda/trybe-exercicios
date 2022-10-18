-- por padrão, o MySQL impõe uma restrição que não permite alterar dados
-- quando a chave passada pro WHERE não é um ID, para desabilitar essa restrição o comando é:
-- SET SQL_SAFE_UPDATES = 0; (recomenda-se rodar sempre antes de fazer UPDATEs ou DELETEs)

-- usando UPDATE
UPDATE staff
SET first_name = 'Cadu', last_name = 'Stephan', username = 'Cadu'
WHERE staff_id = 3;

-- alterando mais de uma linha (condição fixa)
UPDATE actor
SET first_name = 'JOE'
WHERE actor_id IN (1, 2, 3);

-- alterando mais de uma linha (alteração individual)
UPDATE actor
SET first_name = (
CASE actor_id
	WHEN 1 THEN 'ONE'
	WHEN 2 THEN 'TWO'
    WHEN 3 THEN 'THREE'
    ELSE first_name
    END
);

-- alterando sequencialmente com ORDER BY e LIMIT
UPDATE staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update DESC
LIMIT 2;

-- sobre --safe-updates (ou --i-am-a-dummy)
--  -> exige que seja incluída uma KEY para realizar o comando
--  -> caso não seja colocado LIMIT, usa o padrão de 1000
--  -> produz erro caso tenha que examinar mais de 1mi de linhas
--  -> é modificável (ex: SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;)