# Hands-On 2: Writing SQL Queries – DML, Joins & Aggregations

## Objective

The objective of this hands-on is to perform data manipulation and retrieval operations on the **Student Course Registration System** database using MySQL. This exercise covers DML operations, filtering, joins, aggregate functions, grouping, and summary reports.

---

## Technologies Used

* MySQL Community Server 8.0
* MySQL Workbench
* Visual Studio Code
* SQL (DML & Queries)

---

## Folder Structure

```text
Hands_On_2
│
├── task1
│   └── hands_on_2_task1.sql
│
├── task2
│   └── hands_on_2_task2.sql
│
├── task3
│   └── hands_on_2_task3.sql
│
├── task4
│   └── hands_on_2_task4.sql
│
├── Screenshots
│
└── README.md
```

---

# Task 1 – Insert, Update and Delete Data

### Objective

Perform Data Manipulation Language (DML) operations while maintaining database consistency.

### Operations Performed

* Inserted the sample data into:

  * departments
  * students
  * courses
  * enrollments
  * professors
* Added two additional student records.
* Updated the grade of a student enrollment.
* Deleted enrollment records where the grade was NULL.
* Verified record counts using `SELECT COUNT(*)`.

### Result

The database was successfully populated and updated according to the given requirements.

---

# Task 2 – Single Table Queries and Filtering

### Objective

Retrieve data from individual tables using filtering and sorting techniques.

### Queries Performed

* Retrieved students enrolled in the year 2022.
* Listed courses having more than 3 credits.
* Displayed professors whose salary was between 80,000 and 95,000.
* Retrieved students whose email ends with `@college.edu`.
* Counted students based on their enrollment year.

### SQL Concepts Used

* SELECT
* WHERE
* ORDER BY
* LIKE
* BETWEEN
* COUNT()
* GROUP BY

---

# Task 3 – Multi-Table Joins

### Objective

Retrieve related information by combining multiple tables using SQL joins.

### Queries Performed

* Displayed each student's name with their department.
* Retrieved enrollment details along with student and course information.
* Listed students who are not enrolled in any course.
* Displayed course-wise enrollment counts.
* Listed departments along with their professors and salaries.

### SQL Concepts Used

* INNER JOIN
* LEFT JOIN
* Multiple Table JOIN
* GROUP BY
* COUNT()

---

# Task 4 – Aggregations and Grouping

### Objective

Generate analytical reports using aggregate functions.

### Queries Performed

* Calculated total enrollments for each course.
* Calculated average professor salary department-wise.
* Retrieved departments having a budget greater than 600000.
* Displayed the grade distribution for course CS101.
* Listed departments having more than two students.

### SQL Concepts Used

* COUNT()
* AVG()
* ROUND()
* GROUP BY
* HAVING
* Aggregate Reporting

---

# Learning Outcomes

After completing this hands-on, I learned to:

* Perform INSERT, UPDATE, and DELETE operations.
* Retrieve records using filtering and sorting.
* Use comparison and pattern matching operators.
* Work with INNER JOIN and LEFT JOIN.
* Retrieve data from multiple related tables.
* Generate summary reports using aggregate functions.
* Apply GROUP BY and HAVING clauses effectively.
* Analyze relational data using SQL queries.

---

# Result

Successfully performed DML operations, filtering, joins, and aggregation queries on the **Student Course Registration System** database using MySQL. All four tasks were executed successfully, and the outputs were verified using MySQL Workbench.
