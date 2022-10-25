1-  Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

SELECT 
    m.title, bo.domestic_sales, bo.international_sales
FROM
    Pixar.BoxOffice AS bo
        INNER JOIN
    Pixar.Movies AS m ON m.id = bo.movie_id

2 - Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

SELECT 
    m.title,
    (bo.domestic_sales + bo.international_sales) AS sales
FROM
    Pixar.BoxOffice AS bo
        INNER JOIN
    Pixar.Movies AS m ON bo.movie_id = m.id
WHERE
    international_sales > domestic_sales

3 - Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT 
    m.title, bo.rating
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS bo ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

4 - Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Pixar.Theater AS t
        LEFT JOIN
    Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY t.name

5 - Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética

SELECT 
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    t.name,
    t.location
FROM
    Pixar.Theater AS t
        RIGHT JOIN
    Pixar.Movies AS m ON t.id = m.theater_id
ORDER BY t.name;

6 - Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.

SELECT 
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    t.name,
    t.location,
    bo.rating,
    bo.domestic_sales,
    bo.international_sales
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.Theater AS t ON t.id = m.id
        INNER JOIN
    Pixar.BoxOffice AS bo ON bo.movie_id = m.id
WHERE
    m.theater_id IS NOT NULL
        AND bo.rating > 8

