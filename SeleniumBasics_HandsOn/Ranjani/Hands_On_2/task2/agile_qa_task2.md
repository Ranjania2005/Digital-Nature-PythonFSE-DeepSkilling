# QA Concepts & Selenium Basics - Hands-On 2

# Task 2 - Agile QA and Shift-Left Testing

## Objective

To understand how QA engineers work in Agile teams and how Shift-Left testing helps identify defects earlier in the Software Development Life Cycle.

---

# 1. Problems with Testing After Development in Waterfall

In a traditional Waterfall model, testing starts only after development is completed.

For the Course Management API project, this approach can cause the following problems:

---

## Problem 1: Late Defect Detection

### Description:

Defects found during testing after development require more time and effort to fix.

### Example:

If the course creation requirement is misunderstood, the issue may only be found during system testing.

### Impact:

- Increased development cost.
- More rework required.

---

## Problem 2: Requirement Misunderstanding

### Description:

QA involvement happens very late, so unclear requirements may not be identified early.

### Example:

The requirement does not specify whether duplicate course codes should be allowed.

### Impact:

- Incorrect implementation.
- Additional changes required.

---

## Problem 3: Limited Time for Testing

### Description:

Testing gets reduced time because development consumes most of the project schedule.

### Example:

API performance and security testing may be skipped before release.

### Impact:

- Quality issues may reach production.

---

# 2. QA Role in Agile Ceremonies

QA engineers actively participate throughout Agile development.

---

# Sprint Planning

## QA Activities:

- Understand user stories.
- Define acceptance criteria.
- Identify required test scenarios.
- Estimate testing effort.

### Example:

User Story:

"As a college admin, I want to create a course."

QA defines:

- Course name validation.
- Duplicate course code validation.
- Successful course creation scenario.

---

# Daily Standup

## QA Activities:

- Share testing progress.
- Report blocking issues.
- Communicate defects.

### Example:

QA informs the team:

"Course API testing is blocked because the latest build is unavailable."

---

# Sprint Review

## QA Activities:

- Perform demo testing.
- Verify completed user stories.
- Confirm acceptance criteria.

### Example:

QA verifies that the admin can create and view courses successfully.

---

# Sprint Retrospective

## QA Activities:

- Discuss testing challenges.
- Suggest process improvements.
- Improve quality practices.

### Example:

Team decides to add more automated API tests in future sprints.

---

# 3. Shift-Left Testing Practices

Shift-Left testing means moving testing activities earlier in the SDLC instead of waiting until the end.

---

# Practice 1: Requirement Review for Testability

## Description:

QA reviews requirements before development starts.

## Application to Course Management API:

QA verifies:

- Required course fields are clearly defined.
- Validation rules are documented.
- Expected API responses are specified.

## Benefit:

Prevents requirement-related defects.

---

# Practice 2: Writing Test Cases Before Code (TDD/BDD)

## Description:

Test scenarios are prepared before implementation.

## Application to Course Management API:

QA writes scenarios such as:

- Creating a valid course.
- Rejecting duplicate course codes.
- Handling missing fields.

## Benefit:

Developers understand expected behavior clearly.

---

# Practice 3: Static Code Analysis

## Description:

Code is analyzed without execution to identify issues.

## Application to Course Management API:

Tools can detect:

- Code quality issues.
- Security vulnerabilities.
- Coding standard violations.

## Benefit:

Improves code quality before testing.

---

# Practice 4: API Contract Testing Before Integration

## Description:

API request and response formats are verified before connecting systems.

## Application to Course Management API:

Verify:

- API endpoint names.
- Request fields.
- Response structure.
- Status codes.

## Benefit:

Prevents integration failures.

---

# 4. Acceptance Criteria Using Given-When-Then Format

## User Story:

"As a college admin, I want to create a new course, so that students can enroll in it."

---

# Scenario 1: Successful Course Creation

```gherkin
Given the admin is logged into the Course Management system

When the admin enters valid course details and submits the request

Then a new course should be created successfully

And the course should be available for student enrollment
```

---

# Scenario 2: Duplicate Course Code

```gherkin
Given a course with the same course code already exists

When the admin tries to create another course with the same code

Then the system should display a duplicate course code error

And the course should not be created
```

---

# Scenario 3: Missing Required Fields

```gherkin
Given the admin is creating a new course

When the admin submits the form without mandatory fields

Then the system should display validation messages

And the course should not be created
```

---

# Conclusion

This task helped understand Agile QA practices, Shift-Left testing principles, and how QA engineers collaborate with development teams throughout the software development process.