1 - Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.

SELECT 
    CONCAT(Employee.first_name,
            ' ',
            Employee.last_name) AS employees_name,
    CONCAT(Manager.first_name,
            ' ',
            Manager.last_name) AS managers_name
FROM
    hr.employees AS Employee
        INNER JOIN
    hr.employees AS Manager ON Manager.manager_id = Employee.employee_id
WHERE
    Employee.department_id <> Manager.department_id

2 - Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.

SELECT 
    CONCAT(Manager.first_name,
            ' ',
            Manager.last_name) AS managers_name,
    COUNT(*)
FROM
    hr.employees AS Manager
        INNER JOIN
    hr.employees AS Employee ON Employee.manager_id = Manager.employee_id
GROUP BY Manager.employee_id