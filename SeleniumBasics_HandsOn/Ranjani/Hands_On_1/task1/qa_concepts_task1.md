# QA Concepts - Hands-On 1

# Task 1 - Map Testing Types to a Real System

## System: Course Management API

The Course Management API is used by college administrators to manage course information. It allows users to create, update, view, and delete course details.

---

# 1. Testing Types and Test Cases

## Unit Testing

### Test Case: Validate Course Creation Function

### Description:

Test a single function responsible for validating course details before creating a new course.

### Test Scenario:

Verify whether the course creation function correctly validates mandatory fields such as:

- Course Name
- Course Code
- Course Duration

### Test Data:

```
Course Name: Python Full Stack
Course Code: PFS101
Duration: 6 Months
```

### Expected Result:

The function should accept valid course details and create the course object successfully.

### Testing Classification:

Functional Testing

---

# Integration Testing

## Test Case: Verify API Endpoint and Database Integration

### Description:

Test whether the Course Management API correctly communicates with the database while creating a new course.

### Test Steps:

1. Send a POST request to `/api/courses/`.
2. Provide valid course details.
3. API validates the request data.
4. Database stores the course information.

### Expected Result:

The course details should be stored successfully in the database and the API should return a success response.

### Testing Classification:

Functional Testing

---

# System Testing

## Test Case: Verify Complete Course Creation Workflow

### Description:

Test the complete end-to-end flow of course creation from user request to database response.

### Test Steps:

1. Administrator enters course details.
2. Request is sent to the API.
3. API processes the request.
4. Database saves the course information.
5. Response is returned to the administrator.

### Expected Result:

The newly created course should be available in the course management system.

### Testing Classification:

Functional Testing

---

# User Acceptance Testing (UAT)

## Test Case: Verify Course Creation from Administrator Perspective

### Description:

Test whether a college administrator can successfully create and manage courses through the application.

### Test Steps:

1. Admin logs into the portal.
2. Opens course management section.
3. Creates a new course.
4. Views the created course.

### Expected Result:

The administrator should be able to create and view courses successfully.

### Testing Classification:

Functional Testing

---

# 2. Functional and Non-Functional Testing

## Functional Testing Example

### Test Case:

Verify that the POST `/api/courses/` endpoint creates a course successfully with valid input data.

### Purpose:

To check whether the application performs the required functionality correctly.

---

## Non-Functional Testing Example

### Performance Testing

### Test Case:

Check the response time of the Course Management API when multiple users access the system simultaneously.

### Scenario:

100 users send course-related requests at the same time.

### Expected Result:

The API should handle multiple requests efficiently and respond within the acceptable response time.

### Testing Classification:

Non-Functional Testing

---

# 3. Black-Box Testing vs White-Box Testing

## Black-Box Testing

Black-box testing is a testing technique where the tester verifies application functionality without knowing the internal source code or implementation details.

### Example:

A QA tester sends API requests and checks whether the returned responses match the expected results.

### Performed By:

QA Testers

---

## White-Box Testing

White-box testing is a testing technique where the tester has knowledge about the internal code structure and logic.

### Example:

A developer tests individual functions and checks whether the code logic works correctly.

### Performed By:

Developers

---

# 4. Test Cases for POST /api/courses/ Endpoint

| Test Case ID | Description | Preconditions | Test Steps | Expected Result | Actual Result | Pass/Fail |
|--------------|-------------|---------------|------------|-----------------|---------------|-----------|
| TC_001 | Create course with valid details | API should be running | Send POST request with valid course information | Course should be created successfully | | |
| TC_002 | Create course without course name | API should be running | Send POST request without course name field | API should return validation error message | | |
| TC_003 | Create duplicate course | Course with same code already exists | Send POST request with duplicate course code | API should reject duplicate course creation | | |

---

# Conclusion

This task helped understand different testing levels, testing classifications, and how QA professionals design test cases for real-world systems.
