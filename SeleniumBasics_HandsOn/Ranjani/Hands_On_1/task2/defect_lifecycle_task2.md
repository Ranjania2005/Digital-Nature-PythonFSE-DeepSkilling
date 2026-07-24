# QA Concepts - Hands-On 1

# Task 2 - Defect Lifecycle & Severity Classification

---

# 1. Defect Lifecycle

The defect lifecycle describes the different stages a defect goes through from identification to closure.

## Defect Lifecycle Flow

```
New
 |
 ↓
Assigned
 |
 ↓
Open
 |
 ↓
Fixed
 |
 ↓
Retest
 |
 ↓
Verified
 |
 ↓
Closed
```

---

## Defect States Description

### 1. New

The defect is identified by the tester and reported in the defect tracking system.

Example:

QA tester reports that course creation API returns an error.

---

### 2. Assigned

The defect is assigned to the responsible developer for investigation.

---

### 3. Open

The developer starts analyzing the defect and works on finding the root cause.

---

### 4. Fixed

The developer fixes the issue and marks the defect as resolved.

---

### 5. Retest

The QA tester verifies whether the reported issue has been fixed.

---

### 6. Verified

QA confirms that the defect has been successfully resolved.

---

### 7. Closed

The defect is permanently closed after successful verification.

---

# Rejected Path

A defect may be rejected when:

- The reported issue is not a valid bug.
- The expected behavior is incorrect.
- The issue cannot be reproduced.

Flow:

```
New
 |
 ↓
Rejected
```

---

# Deferred Path

A defect may be deferred when:

- The defect is valid but not planned for the current release.
- The fix is postponed due to lower priority.

Flow:

```
New
 |
 ↓
Assigned
 |
 ↓
Deferred
```

---

# 2. Severity and Priority Classification

## Bug (a)

### Issue:

POST `/api/courses/` returns 500 Internal Server Error for all requests.

### Severity:

Critical

### Priority:

P1

### Justification:

- The core course creation functionality is completely unavailable.
- All users are affected.
- Immediate fixing is required.

---

## Bug (b)

### Issue:

Course names longer than 150 characters are silently truncated without an error.

### Severity:

Medium

### Priority:

P2

### Justification:

- The system still works.
- Data accuracy is affected.
- Users may lose important information.

---

## Bug (c)

### Issue:

The Swagger documentation page contains a spelling mistake.

### Severity:

Low

### Priority:

P4

### Justification:

- Does not affect application functionality.
- Only impacts documentation quality.

---

## Bug (d)

### Issue:

Login with correct credentials occasionally returns 401 error on the first attempt.

### Severity:

High

### Priority:

P1

### Justification:

- Login reliability is affected.
- Users may not be able to access the system.
- Intermittent authentication issues require urgent investigation.

---

# 3. Defect Report

## Defect ID

DEF-001

---

## Title

POST /api/courses/ returns 500 Internal Server Error for all requests

---

## Environment

- Operating System: Windows
- Browser: Chrome
- API Testing Tool: Postman

---

## Build Version

Version 1.0

---

## Severity

Critical

---

## Priority

P1

---

## Steps to Reproduce

1. Start the Course Management API.
2. Open Postman.
3. Send a POST request to:

```
/api/courses/
```

4. Provide valid course information.
5. Submit the request.

---

## Expected Result

The API should create the course successfully and return a success response.

---

## Actual Result

The API returns:

```
500 Internal Server Error
```

for every course creation request.

---

## Attachments

Screenshot of 500 error

---

# 4. Difference Between Severity and Priority

## Severity

Severity defines how much impact a defect has on the functionality of the application.

Example:

A payment failure in an e-commerce application has high severity because users cannot complete purchases.

---

## Priority

Priority defines how urgently the defect needs to be fixed.

Example:

A spelling mistake on the CEO dashboard may have low severity but high priority because it affects important business users.

---

# Example: High Severity but Low Priority

A rarely used report generation feature crashing may have high severity because the feature fails completely, but it may have low priority if the feature is not required immediately.

---

# Conclusion

This task helped understand defect lifecycle management, severity and priority classification, and professional defect reporting practices used in software testing.