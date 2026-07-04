
USE college_db;

DELIMITER //

CREATE PROCEDURE GetStudentsByDepartment(IN deptId INT)
BEGIN
    SELECT
        student_id,
        first_name,
        last_name,
        email,
        enrollment_year
    FROM students
    WHERE department_id = deptId;
END //

DELIMITER ;

CALL GetStudentsByDepartment(1);

DELIMITER //
CREATE PROCEDURE AddStudent(
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_dob DATE,
    IN p_department_id INT,
    IN p_enrollment_year INT
)
BEGIN
    INSERT INTO students
    (
        first_name,
        last_name,
        email,
        date_of_birth,
        department_id,
        enrollment_year
    )
    VALUES
    (
        p_first_name,
        p_last_name,
        p_email,
        p_dob,
        p_department_id,
        p_enrollment_year
    );
END //

DELIMITER ;

CALL AddStudent(
    'Neha',
    'Sharma',
    'neha.sharma@college.edu',
    '2004-08-10',
    2,
    2023
);
SELECT *
FROM students
WHERE email = 'neha.sharma@college.edu';

SHOW PROCEDURE STATUS
WHERE Db = 'college_db';

DROP PROCEDURE GetStudentsByDepartment;

DROP PROCEDURE AddStudent;

SHOW PROCEDURE STATUS
WHERE Db = 'college_db';
