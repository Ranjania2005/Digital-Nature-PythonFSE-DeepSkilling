# QA Concepts & Selenium Basics - Hands_On_1

## Module

QA Concepts & Selenium Basics

---

## Hands-On Title

QA Concepts, Functional Testing & Defect Lifecycle

---

# Objective

The objective of this hands-on is to understand the fundamental concepts of software quality assurance, different testing levels, functional and non-functional testing, defect management process, and professional test case documentation.

This exercise builds the foundation required for understanding software testing practices before moving into Selenium automation.

---

# Task 1 - Map Testing Types to a Real System

## Objective

Understand different testing levels and apply them to a real-world Course Management API system.

---

## Features Implemented

- Identified testing scenarios for:
  - Unit Testing
  - Integration Testing
  - System Testing
  - User Acceptance Testing (UAT)

- Classified testing types into:
  - Functional Testing
  - Non-Functional Testing

- Added a non-functional testing example:
  - Performance Testing

- Explained:
  - Black-Box Testing
  - White-Box Testing

- Created formal test cases for:

```
POST /api/courses/
```

with the following fields:

- Test Case ID
- Description
- Preconditions
- Test Steps
- Expected Result
- Actual Result
- Pass/Fail

---

# Task 2 - Defect Lifecycle & Severity Classification

## Objective

Understand how defects are identified, tracked, resolved, and prioritized in a professional QA process.

---

## Features Implemented

- Documented complete defect lifecycle:

```
New
 ↓
Assigned
 ↓
Open
 ↓
Fixed
 ↓
Retest
 ↓
Verified
 ↓
Closed
```

- Explained:
  - Rejected defect flow
  - Deferred defect flow

- Classified Course Management API defects based on:

  - Severity
  - Priority

- Covered defect scenarios:

  - API returning 500 error
  - Course name truncation issue
  - Swagger documentation typo
  - Intermittent login failure

- Created a complete defect report containing:

  - Defect ID
  - Title
  - Environment
  - Build Version
  - Severity
  - Priority
  - Steps to Reproduce
  - Expected Result
  - Actual Result
  - Attachments

- Explained the difference between:
  - Severity
  - Priority

---

# Folder Structure

```
Hands_On_1
│
├── Task_1
│   └── qa_concepts_task1.md
│
├── Task_2
│   └── defect_lifecycle_task2.md
│
└── README.md
```

---

# Technologies Used

- Markdown
- Software Testing Concepts
- QA Documentation Practices
- Defect Management Concepts

---

# Expected Output

## Task 1

- Document containing:
  - Testing types with examples
  - Functional and non-functional classification
  - Black-box vs White-box explanation
  - Formal API test cases

---

## Task 2

- Document containing:
  - Complete defect lifecycle
  - Severity and priority classification
  - Defect report
  - Severity vs Priority comparison

---

# Learning Outcomes

After completing this hands-on, the following concepts were learned:

- Software Quality Assurance fundamentals
- Testing levels
- Functional Testing
- Non-Functional Testing
- Black-Box Testing
- White-Box Testing
- Test Case Documentation
- Defect Lifecycle
- Severity Classification
- Priority Classification
- Professional Defect Reporting

---

# Author

**Name:** Ranjani A

**Track:** Python Full Stack Engineer

**Program:** Cognizant Digital Nurture 5.0