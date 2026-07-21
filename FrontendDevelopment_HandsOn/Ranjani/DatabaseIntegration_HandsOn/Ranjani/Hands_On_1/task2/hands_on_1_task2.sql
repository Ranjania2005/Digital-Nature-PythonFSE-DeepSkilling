-- ==========================================================
-- Hands-On 1 - Task 2
-- Verify Normalization (1NF, 2NF, 3NF)
-- ==========================================================

-- 1NF (First Normal Form)
-- The schema satisfies 1NF because each table has a primary key.
-- Every column stores only atomic (single) values.
-- There are no repeating groups or multi-valued attributes.
-- Example violation: storing multiple phone numbers in one field
-- such as '9876543210,9123456789' would violate 1NF.

-- 2NF (Second Normal Form)
-- The schema satisfies 2NF because all non-key attributes
-- are fully dependent on their respective primary keys.
-- In the enrollments table, enrollment_id is the primary key.
-- The combination of student_id and course_id is also a
-- candidate key representing a unique enrollment.
-- Attributes like enrollment_date and grade depend on the
-- enrollment record, not on only one part of a candidate key.

-- 3NF (Third Normal Form)
-- The schema satisfies 3NF because there are no transitive
-- dependencies among non-key attributes.
-- Department information such as dept_name is stored only in
-- the departments table and referenced using department_id.
-- Storing dept_name directly in the students table would
-- introduce redundancy and violate 3NF.
-- This design reduces duplication and maintains data integrity.

-- Analysis of Enrollments Table
-- The enrollments table contains only information related to
-- student-course enrollment.
-- Grade depends directly on the enrollment record.
-- No non-key attribute depends on another non-key attribute.
-- Therefore, the enrollments table satisfies 3NF.