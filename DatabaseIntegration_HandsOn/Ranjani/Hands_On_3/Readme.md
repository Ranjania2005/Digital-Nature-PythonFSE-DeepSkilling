# Hands-On 3: Advanced SQL – Subqueries, Views and Transactions

## Objective

The objective of this hands-on is to explore advanced SQL concepts by implementing subqueries, creating and managing views, and performing transaction control operations. This exercise demonstrates how to write efficient SQL queries, create reusable virtual tables, and ensure data consistency using transactions.

---

## Technologies Used

* MySQL Community Server 8.0
* MySQL Workbench
* Visual Studio Code
* SQL (Advanced Queries, Views & Transactions)

---

## Folder Structure

```text
Hands_On_3
│
├── task1
│   └── hands_on_3_task1.sql
│
├── task2
│   └── hands_on_3_task2.sql
│
├── task3
│   └── hands_on_3_task3.sql
│
├── Screenshots
│
└── README.md
```

---

# Task 1 – Advanced SQL Using Subqueries

### Objective

Write advanced SQL queries using different types of subqueries to retrieve meaningful information from the database.

### Operations Performed

* Retrieved students enrolled in more courses than the average.
* Identified courses where every enrolled student received grade 'A'.
* Displayed the highest-paid professor in each department.
* Retrieved departments whose average professor salary exceeds a specified value.

### SQL Concepts Used

* Scalar Subqueries
* Correlated Subqueries
* Derived Tables
* NOT EXISTS
* Aggregate Functions
* GROUP BY
* HAVING

---

# Task 2 – Creating and Managing Views

### Objective

Create reusable SQL views for simplifying complex queries and understanding view management.

### Operations Performed

* Created a student enrollment summary view.
* Created a course statistics view.
* Retrieved records from the created views.
* Attempted to update a complex view and observed why it is not updatable.
* Dropped existing views.
* Recreated a single-table view using `WITH CHECK OPTION`.
* Verified the recreated view.

### SQL Concepts Used

* CREATE VIEW
* SELECT from Views
* DROP VIEW
* WITH CHECK OPTION
* Aggregate Views
* Updatable and Non-Updatable Views

---

# Task 3 – Transaction Management

### Objective

Understand transaction processing and maintain database consistency using transaction control commands.

### Operations Performed

* Disabled auto-commit mode.
* Started a transaction.
* Inserted a new student record.
* Created a savepoint.
* Updated the inserted record.
* Rolled back to the savepoint.
* Committed the transaction.
* Demonstrated a complete rollback.
* Restored auto-commit mode.

### SQL Concepts Used

* START TRANSACTION
* COMMIT
* ROLLBACK
* SAVEPOINT
* ROLLBACK TO SAVEPOINT
* AUTOCOMMIT

---

# Learning Outcomes

After completing this hands-on, I learned to:

* Write advanced SQL queries using different types of subqueries.
* Retrieve data using correlated and non-correlated subqueries.
* Create and manage SQL views.
* Understand the limitations of updatable views.
* Use `WITH CHECK OPTION` to enforce view conditions.
* Perform transaction management using COMMIT and ROLLBACK.
* Use SAVEPOINT to partially undo changes within a transaction.
* Ensure database consistency during data modification operations.

---

# Result

Successfully implemented advanced SQL concepts including subqueries, views, and transaction management using MySQL. All three tasks were executed successfully, and the outputs were verified using MySQL Workbench.
