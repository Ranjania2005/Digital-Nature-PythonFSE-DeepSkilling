
USE college_db;
CREATE TABLE student_audit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    action_type VARCHAR(20),
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    old_email VARCHAR(100),
    new_email VARCHAR(100)
);

DELIMITER $$
CREATE TRIGGER trg_student_email_update
AFTER UPDATE ON students
FOR EACH ROW
BEGIN
    IF OLD.email <> NEW.email THEN
        INSERT INTO student_audit
        (
            student_id,
            action_type,
            old_email,
            new_email
        )
        VALUES
        (
            OLD.student_id,
            'UPDATE',
            OLD.email,
            NEW.email
        );
    END IF;
END$$

DELIMITER ;

UPDATE students
SET email = 'arjun.mehta.updated@college.edu'
WHERE student_id = 1;

SELECT * FROM student_audit;

DELIMITER $$
CREATE TRIGGER trg_student_insert
AFTER INSERT ON students
FOR EACH ROW
BEGIN
    INSERT INTO student_audit
    (
        student_id,
        action_type,
        new_email
    )
    VALUES
    (
        NEW.student_id,
        'INSERT',
        NEW.email
    );
END$$

DELIMITER ;

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
    'Akhil',
    'Varma',
    'akhil.varma@college.edu',
    '2004-05-18',
    2,
    2023
);

SELECT * FROM student_audit
ORDER BY audit_id;

SHOW TRIGGERS;

DROP TRIGGER trg_student_email_update;

DROP TRIGGER trg_student_insert;

SHOW TRIGGERS;

