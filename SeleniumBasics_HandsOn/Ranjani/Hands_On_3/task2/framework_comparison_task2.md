# QA Concepts & Selenium Basics - Hands-On 3

# Task 2 - Compare Automation Framework Types

## Objective

To understand different automation framework architectures, their advantages and disadvantages, and select the suitable framework approach for a Selenium-based Course Management system.

---

# 1. Automation Framework Types Comparison

---

# 1. Linear Framework

## Description

A Linear Automation Framework is the simplest framework where test scripts are created sequentially. Each test case contains all required steps including setup, execution, and validation.

It is mainly used for small projects with limited test cases.

## Advantage

- Simple to create and understand.
- Requires minimum framework knowledge.

## Disadvantage

- Poor code reusability.
- Maintenance becomes difficult when test cases increase.

## Example in Course Management System

A small project can use a Linear framework to automate a simple course creation test where login, course creation, and validation steps are written in a single script.

---

# 2. Modular Framework

## Description

A Modular Framework divides the application into separate modules and creates reusable scripts for each module.

Common modules include:

- Login module
- Course module
- Student module

## Advantage

- Improves code reusability.
- Easier maintenance.

## Disadvantage

- Requires initial framework design effort.

## Example in Course Management System

Login functionality can be created once and reused across course management and student enrollment tests.

---

# 3. Data-Driven Framework

## Description

A Data-Driven Framework separates test data from test scripts. Test cases read input values from external files such as Excel, CSV, or databases.

## Advantage

- Supports testing with multiple data sets.
- Reduces duplicate test scripts.

## Disadvantage

- Requires additional data management.

## Example in Course Management System

Testing course creation with multiple course names, codes, and durations using Excel test data.

---

# 4. Keyword-Driven Framework

## Description

A Keyword-Driven Framework uses keywords to represent actions. Testers can create tests using predefined keywords without writing code.

Example keywords:

- Click
- Enter Text
- Submit
- Verify

## Advantage

- Allows non-technical testers to create test cases.
- Improves test readability.

## Disadvantage

- Requires time to build keyword libraries.

## Example in Course Management System

A QA team can create course creation tests using keywords like Login, EnterCourseDetails, ClickSubmit, and VerifyCourse.

---

# 5. Hybrid Framework

## Description

A Hybrid Framework combines multiple framework approaches such as Modular, Data-Driven, and Keyword-Driven frameworks.

It provides better scalability and flexibility for large projects.

## Advantage

- Highly reusable.
- Supports complex applications.
- Suitable for enterprise projects.

## Disadvantage

- Requires more initial development effort.
- More framework maintenance is required.

## Example in Course Management System

A Selenium framework can use Page Objects for reusable modules, Excel files for test data, and keywords for common actions.

---

# 2. Framework Recommendation for Course Management Frontend

## Project Requirements

The team needs to:

- Test login with 50 different username/password combinations.
- Reuse login steps across 20 test cases.
- Allow both technical and non-technical team members to write tests.

---

# Recommended Framework

## Hybrid Framework

---

# Justification

A Hybrid Framework is the best choice because it combines the benefits of multiple frameworks.

---

## Data-Driven Approach

Used for:

- Testing 50 different username/password combinations.

Example:

Login credentials stored in Excel or CSV files.

---

## Modular Approach

Used for:

- Reusing login steps across multiple test cases.

Example:

Login functionality is created as a reusable module.

---

## Keyword-Driven Approach

Used for:

- Supporting non-technical testers.

Example:

Testers can use keywords such as:

```
Login
Enter Username
Enter Password
Click Submit
Verify Dashboard
```

---

# 3. Hybrid Framework Folder Structure

A Selenium Hybrid Framework can be organized as:

```
CourseManagementAutomation
│
├── tests
│   ├── test_login.py
│   ├── test_courses.py
│   └── test_students.py
│
├── pages
│   ├── LoginPage.py
│   ├── CoursePage.py
│   └── StudentPage.py
│
├── test_data
│   ├── login_data.xlsx
│   └── course_data.xlsx
│
├── utilities
│   ├── excel_reader.py
│   ├── logger.py
│   └── screenshot.py
│
├── config
│   └── config.ini
│
├── reports
│
├── drivers
│   └── chromedriver.exe
│
├── requirements.txt
│
└── README.md
```

---

# Folder Explanation

## tests

Contains actual automation test scripts.

Example:

- Login tests
- Course creation tests

---

## pages

Contains Page Object Model classes.

Example:

- LoginPage
- CoursePage

---

## test_data

Stores external test data.

Example:

- User credentials
- Course details

---

## utilities

Contains reusable helper functions.

Example:

- Excel reading
- Logging
- Screenshot capture

---

## config

Stores environment-related settings.

Example:

- Browser details
- Application URL

---

## reports

Stores execution reports and test results.

---

# Conclusion

The Hybrid Framework is the most suitable approach for large Selenium projects because it provides reusability, scalability, data management, and better collaboration between technical and non-technical team members.