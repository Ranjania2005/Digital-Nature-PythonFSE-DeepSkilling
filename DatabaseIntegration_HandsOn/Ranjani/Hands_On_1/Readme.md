# Hands-On 1: Schema Design & Core SQL – DDL and Normalization

## Objective

The objective of this hands-on is to design and implement the database schema for a **Student Course Registration System** using MySQL. This exercise covers database creation, table creation with constraints, normalization concepts, and schema modification using DDL commands.

---

## Technologies Used

* MySQL Community Server 8.0
* MySQL Workbench
* Visual Studio Code
* SQL (DDL)

---

## Folder Structure

```text
Hands_On_1
│
├── task1
│   └── hands_on_1_task1.sql
│
├── task2
│   └── hands_on_1_task2.sql
│
├── task3
│   └── hands_on_1_task3.sql
│
├── Screenshots
│
└── README.md
```

---

# Task 1 – Create Database and Tables

### Objective

Create the complete `college_db` database and define all required tables with appropriate constraints.

### Tables Created

* departments
* students
* courses
* enrollments
* professors

### Constraints Implemented

* PRIMARY KEY
* FOREIGN KEY
* NOT NULL
* UNIQUE

### Verification

The database schema was verified using:

* `SHOW TABLES;`
* `DESCRIBE table_name;`

---

# Task 2 – Verify Normalization

### Objective

Analyze the database schema to ensure it satisfies the normalization rules.

### Normalization Verified

* First Normal Form (1NF)
* Second Normal Form (2NF)
* Third Normal Form (3NF)

### Analysis Performed

* Verified atomic values.
* Confirmed full functional dependency.
* Verified absence of transitive dependencies.
* Documented the normalization analysis using SQL comments.

---

# Task 3 – Alter and Extend the Schema

### Objective

Modify the existing schema using `ALTER TABLE` statements without affecting existing data.

### Operations Performed

* Added `phone_number` column to the `students` table.
* Added `max_seats` column with a default value to the `courses` table.
* Added a CHECK constraint on the `grade` column.
* Renamed `hod_name` to `head_of_dept`.
* Removed the `phone_number` column to simulate a schema rollback.

### Verification

The updated schema was verified using `DESCRIBE` statements.

---

# Learning Outcomes

After completing this hands-on, I learned to:

* Design a relational database schema.
* Create tables using SQL DDL statements.
* Apply database constraints effectively.
* Implement referential integrity using foreign keys.
* Understand and verify database normalization (1NF, 2NF, and 3NF).
* Modify an existing database schema using `ALTER TABLE`.
* Verify schema changes using MySQL commands.

---

# Result

Successfully created and modified the **Student Course Registration System** database schema in MySQL. All tasks were executed successfully, and the outputs were verified through MySQL Workbench.
