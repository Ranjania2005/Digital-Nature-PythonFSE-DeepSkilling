# QA Concepts & Selenium Basics - Hands_On_3

## Module

QA Concepts & Selenium Basics

---

## Hands-On Title

Test Automation Process, Lifecycle & Framework Types

---

# Objective

The objective of this hands-on is to understand the automation testing process, identify suitable test cases for automation, calculate automation ROI, analyze flaky tests, and compare different automation framework approaches.

This exercise focuses on automation planning and framework selection before implementing Selenium automation.

---

# Task 1 - Automation Decision and Test Case Selection

## Objective

Understand how to decide whether a test case should be automated and identify suitable automation candidates.

---

## Features Implemented

- Documented automation decision criteria:

  - Repetition Frequency
  - Regression Importance
  - Test Stability
  - Data-Driven Requirement
  - Risk and Business Impact

- Applied automation criteria to:

  - POST /api/courses/ endpoint validation

- Classified Course Management API test cases as:

  - Automate
  - Manual

- Covered scenarios:

  - CRUD regression testing
  - Exploratory testing
  - Performance testing
  - UI login testing
  - Swagger documentation validation
  - Smoke testing

- Explained:

  - Test Automation ROI
  - Break-even calculation
  - Maintenance overhead

- Documented flaky tests:

  - Definition
  - Example
  - Prevention strategies

---

# Task 2 - Compare Automation Framework Types

## Objective

Understand different Selenium automation framework architectures and select the suitable framework for a project.

---

## Features Implemented

- Compared five automation framework types:

  - Linear Framework
  - Modular Framework
  - Data-Driven Framework
  - Keyword-Driven Framework
  - Hybrid Framework

- Documented for each framework:

  - Description
  - Advantage
  - Disadvantage
  - Course Management system example

- Recommended a suitable framework for the Course Management frontend.

- Selected:

```
Hybrid Framework
```

based on requirements:

- Multiple login data combinations
- Reusable login functionality
- Support for technical and non-technical users

- Designed Hybrid Framework folder structure containing:

  - Test files
  - Page Object files
  - Test data
  - Utility files
  - Configuration files
  - Reports

---

# Folder Structure

```
Hands_On_3
│
├── Task_1
│   └── automation_decision_task1.md
│
├── Task_2
│   └── framework_comparison_task2.md
│
└── README.md
```

---

# Technologies Used

- Markdown
- QA Automation Concepts
- Selenium Framework Concepts
- Test Automation Planning
- Page Object Model Concepts

---

# Expected Output

## Task 1

Document containing:

- Automation decision criteria
- Test case selection
- ROI calculation
- Flaky test analysis

---

## Task 2

Document containing:

- Framework comparison
- Framework recommendation
- Hybrid framework architecture

---

# Learning Outcomes

After completing this hands-on, the following concepts were learned:

- Test Automation Decision Making
- Automation Suitability Analysis
- Regression Automation
- Test Automation ROI
- Flaky Test Handling
- Selenium Framework Types
- Hybrid Framework Design
- Automation Framework Architecture

---

# Author

**Name:** Ranjani A

**Track:** Python Full Stack Engineer

**Program:** Cognizant Digital Nurture 5.0