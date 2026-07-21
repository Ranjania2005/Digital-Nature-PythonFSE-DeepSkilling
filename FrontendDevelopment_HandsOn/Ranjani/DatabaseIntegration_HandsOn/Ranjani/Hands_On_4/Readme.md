# Hands-On 4: Stored Procedures, Functions and Triggers

## Objective

The objective of this hands-on is to understand and implement MySQL database programming features, including stored procedures, user-defined functions, and triggers. These database objects help automate business logic, improve code reusability, and maintain data integrity.

---

## Technologies Used

* MySQL Community Server 8.0
* MySQL Workbench
* Visual Studio Code
* SQL (Stored Procedures, Functions & Triggers)

---

## Folder Structure

```text
Hands_On_4
│
├── task1
│   └── hands_on_4_task1.sql
│
├── task2
│   └── hands_on_4_task2.sql
│
├── task3
│   └── hands_on_4_task3.sql
│
├── Screenshots
│
└── README.md
```

---

# Task 1 – Stored Procedures

### Objective

Create and execute stored procedures to retrieve and insert student information.

### Operations Performed

* Created a stored procedure to retrieve students by department.
* Executed the procedure using different department IDs.
* Created a stored procedure to insert a new student record.
* Executed the insertion procedure.
* Verified the inserted record.
* Displayed existing stored procedures.
* Dropped the stored procedures after verification.

### SQL Concepts Used

* CREATE PROCEDURE
* IN Parameters
* CALL
* DELIMITER
* SHOW PROCEDURE STATUS
* DROP PROCEDURE

---

# Task 2 – User-Defined Functions

### Objective

Create reusable SQL functions that return calculated values based on input parameters.

### Operations Performed

* Created user-defined functions.
* Used input parameters for calculations.
* Returned computed values using the `RETURN` statement.
* Executed functions using `SELECT`.
* Verified the function outputs.
* Removed functions after testing.

### SQL Concepts Used

* CREATE FUNCTION
* RETURN
* DECLARE
* SET
* SELECT Function Calls
* DROP FUNCTION

---

# Task 3 – Database Triggers

### Objective

Automatically record changes made to student records using database triggers.

### Operations Performed

* Created the `student_audit` table for storing audit records.
* Created an `AFTER UPDATE` trigger to log email changes.
* Updated student email information and verified audit entries.
* Created an `AFTER INSERT` trigger to record newly inserted students.
* Inserted a new student and verified audit records.
* Displayed all available triggers.
* Dropped the triggers after successful testing.

### SQL Concepts Used

* CREATE TRIGGER
* AFTER UPDATE
* AFTER INSERT
* OLD and NEW Keywords
* SHOW TRIGGERS
* DROP TRIGGER

---

# Learning Outcomes

After completing this hands-on, I learned to:

* Create and execute stored procedures with input parameters.
* Encapsulate reusable database logic using stored procedures.
* Develop user-defined functions that return calculated values.
* Automate database operations using triggers.
* Use the `OLD` and `NEW` pseudo-records within triggers.
* Maintain audit logs automatically whenever database records are modified.
* Manage database objects by creating, testing, and dropping procedures, functions, and triggers.

---

# Result

Successfully implemented MySQL stored procedures, user-defined functions, and database triggers. All three tasks were executed successfully, and the outputs were verified using MySQL Workbench.
