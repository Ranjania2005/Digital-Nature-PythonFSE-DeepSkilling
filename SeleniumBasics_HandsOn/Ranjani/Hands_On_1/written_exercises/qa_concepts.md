# QA Concepts - Hands-On 1

## Task 1: Map Testing Types to a Real System

## System: Course Management API

The Course Management API allows college administrators to create, update, view, and delete course information.

---

# 1. Testing Types and Test Cases

## Unit Testing

### Test Case:

Verify the course validation function.

### Description:

Test whether the course creation function correctly validates required fields such as course name, course code, and duration.

### Example:

Input:
Course Name = "Python Full Stack"
Course Code = "PFS101"
Duration = 6 months


Expected Result:

The function should accept valid course details and create the course object successfully.

Testing Type:

Functional Testing

---

## Integration Testing

### Test Case:

Verify POST /api/courses/ API endpoint with database integration.

### Description:

Check whether the API correctly receives course details and stores them in the database.

### Example:

Steps:

1. Send POST request with course details.
2. API validates the data.
3. Database stores the course record.

Expected Result:

Course information should be saved successfully and returned in the response.

Testing Type:

Functional Testing

---

## System Testing

### Test Case:

Verify complete course creation workflow.

### Description:

Test the complete flow from user request to database response.

### Steps:

1. Admin sends course creation request.
2. API processes the request.
3. Database stores course information.
4. API returns success response.

Expected Result:

New course should be created and visible in the course list.

Testing Type:

Functional Testing

---

## User Acceptance Testing (UAT)

### Test Case:

Verify course management from college administrator perspective.

### Description:

A college admin creates a new course and checks whether the course appears correctly in the portal.

Expected Result:

Admin should be able to successfully create and view courses.

Testing Type:

Functional Testing

---

# 2. Functional and Non-Functional Testing

## Functional Testing Example

Checking whether the POST /api/courses/ endpoint creates a new course correctly.

Question answered:

"Does the system perform the required functionality?"

---

## Non-Functional Testing Example

### Performance Testing

Check whether the Course Management API can handle multiple simultaneous requests.

Example:

100 users creating or viewing courses at the same time.

Expected Result:

API should respond within acceptable response time without failure.

---

# 3. Black-Box Testing vs White-Box Testing

## Black-Box Testing

Black-box testing is a testing approach where testers verify the functionality of an application without knowing the internal source code or implementation details.

Example:

A QA tester sends API requests and checks whether the response matches expected results.

Usually performed by:

QA Testers

---

## White-Box Testing

White-box testing is a testing approach where the tester has knowledge of the internal code structure and implementation.

Example:

A developer tests individual functions and checks code logic.

Usually performed by:

Developers

---

# 4. Test Cases for POST /api/courses/

| Test Case ID | Description | Preconditions | Test Steps | Expected Result | Actual Result | Pass/Fail |
|--------------|-------------|---------------|------------|-----------------|---------------|-----------|
| TC_001 | Create course with valid details | API is available | Send POST request with valid course data | Course should be created successfully | | |
| TC_002 | Create course without course name | API is available | Send POST request without course name | API should return validation error | | |
| TC_003 | Create duplicate course | Existing course already exists | Send POST request with duplicate course code | API should reject duplicate entry | | |
