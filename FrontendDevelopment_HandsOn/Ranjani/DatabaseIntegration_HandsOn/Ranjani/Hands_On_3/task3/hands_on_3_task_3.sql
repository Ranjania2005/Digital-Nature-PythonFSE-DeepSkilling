
USE college_db;
SET autocommit = 0;
SELECT @@autocommit;
START TRANSACTION;

INSERT INTO students
(first_name, last_name, email, date_of_birth, department_id, enrollment_year)
VALUES
('Kiran', 'Kumar', 'kiran.kumar@college.edu', '2003-12-15', 1, 2023);

SELECT *
FROM students
WHERE email='kiran.kumar@college.edu';

SAVEPOINT student_inserted;

UPDATE students
SET enrollment_year = 2024
WHERE email='kiran.kumar@college.edu';

SELECT *
FROM students
WHERE email='kiran.kumar@college.edu';

ROLLBACK TO SAVEPOINT student_inserted;

SELECT *
FROM students
WHERE email='kiran.kumar@college.edu';

COMMIT;

SELECT *
FROM students
WHERE email='kiran.kumar@college.edu';

START TRANSACTION;

DELETE FROM students
WHERE email='kiran.kumar@college.edu';

SELECT *
FROM students
WHERE email='kiran.kumar@college.edu';



ROLLBACK;

SELECT *
FROM students
WHERE email='kiran.kumar@college.edu';

SET autocommit = 1;

SELECT @@autocommit;
