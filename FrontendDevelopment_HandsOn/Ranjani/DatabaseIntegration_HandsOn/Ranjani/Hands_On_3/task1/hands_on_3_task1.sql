USE college_db;

SELECT
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    COUNT(e.course_id) AS total_courses
FROM students s
JOIN enrollments e
ON s.student_id = e.student_id
GROUP BY s.student_id, s.first_name, s.last_name
HAVING COUNT(e.course_id) >
(
    SELECT AVG(course_count)
    FROM
    (
        SELECT COUNT(*) AS course_count
        FROM enrollments
        GROUP BY student_id
    ) AS avg_table
);

SELECT
    c.course_name,
    c.course_code
FROM courses c
WHERE NOT EXISTS
(
    SELECT 1
    FROM enrollments e
    WHERE e.course_id = c.course_id
      AND e.grade <> 'A'
      AND e.grade IS NOT NULL
);

SELECT
    p.prof_name,
    d.dept_name,
    p.salary
FROM professors p
JOIN departments d
ON p.department_id = d.department_id
WHERE p.salary =
(
    SELECT MAX(salary)
    FROM professors
    WHERE department_id = p.department_id
);
