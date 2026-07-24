# QA Concepts & Selenium Basics - Hands-On 3

# Task 1 - Automation Decision and Test Case Selection

## Objective

To understand when a test case should be automated, select suitable automation candidates, calculate automation ROI, and identify flaky tests in automation suites.

---

# 1. Criteria for Deciding Whether a Test Case Should Be Automated

Automation should be selected based on business value, repeatability, and technical feasibility.

---

## Criterion 1: Repetition Frequency

### Description:

Tests that are executed repeatedly are good candidates for automation.

### Application to Course Management API:

The POST `/api/courses/` API validation test runs frequently during every regression cycle.

### Decision:

Automate

### Reason:

Automation reduces repeated manual effort.

---

## Criterion 2: Regression Importance

### Description:

Tests that verify existing functionality after code changes should be automated.

### Application to Course Management API:

After every API update, course creation functionality should be verified.

### Decision:

Automate

### Reason:

Prevents existing features from breaking.

---

## Criterion 3: Test Stability

### Description:

Stable and predictable test scenarios are suitable for automation.

### Application to Course Management API:

Creating a course with valid input always follows the same expected behavior.

### Decision:

Automate

### Reason:

Stable tests provide reliable automation results.

---

## Criterion 4: Data-Driven Requirement

### Description:

Tests requiring multiple data combinations benefit from automation.

### Application to Course Management API:

Testing course creation with multiple course names, codes, and durations.

### Decision:

Automate

### Reason:

Automation can execute multiple data sets efficiently.

---

## Criterion 5: Risk and Business Impact

### Description:

High-risk functionalities should be automated to ensure continuous validation.

### Application to Course Management API:

Course creation affects student enrollment and course availability.

### Decision:

Automate

### Reason:

Failure can impact important business operations.

---

# 2. Test Case Automation Selection

## (a) Regression test for all CRUD endpoints after every code change

### Decision:

Automate

### Justification:

- Executed repeatedly.
- Validates existing functionality.
- Saves manual testing time.

---

## (b) Exploratory testing of a new search feature

### Decision:

Manual

### Justification:

- Requires human observation.
- New features may have unexpected behaviors.
- Tester creativity is required.

---

## (c) Performance test: 100 concurrent users calling GET /api/courses/

### Decision:

Automate

### Justification:

- Requires repeated execution with multiple users.
- Manual execution is difficult.
- Performance tools can simulate users.

---

## (d) UI test for the login form

### Decision:

Automate

### Justification:

- Login is a repetitive and important workflow.
- Regression testing requires frequent validation.

---

## (e) Verify API documentation (Swagger) is accurate

### Decision:

Manual

### Justification:

- Documentation quality requires human review.
- Understanding business meaning is required.

---

## (f) Smoke test: Verify API is reachable after deployment

### Decision:

Automate

### Justification:

- Runs after every deployment.
- Quick validation of system availability.

---

# 3. Test Automation ROI

## Definition

Test Automation ROI (Return on Investment) measures the benefit gained from automation compared to the cost of creating and maintaining automated tests.

It helps determine whether automation provides enough value compared to manual testing.

---

## Given:

Automation development time:

```
4 hours
```

Manual execution time:

```
30 minutes = 0.5 hours
```

---

## Calculation

Cost of automation:

```
4 hours
```

Savings per manual execution:

```
0.5 hours
```

Number of runs required to recover automation cost:

```
4 / 0.5 = 8 runs
```

---

## Result:

The automation pays for itself after:

```
8 executions
```

---

## Maintenance Overhead

After the 10th run, 20% maintenance overhead is added.

Manual execution saving:

```
0.5 hours
```

Maintenance overhead:

```
20% of 0.5 = 0.1 hours
```

Effective saving after 10 runs:

```
0.5 - 0.1 = 0.4 hours
```

Even with maintenance cost, automation continues providing benefits after the break-even point.

---

# 4. Flaky Test Analysis

## Definition

A flaky test is an automated test that produces inconsistent results without any change in the application code.

A flaky test may pass sometimes and fail sometimes.

---

## Example

A Selenium login test fails occasionally because the page loads slowly and the script tries to click the login button before it becomes available.

---

# Strategies to Prevent or Fix Flaky Tests

## 1. Use Explicit Waits

Instead of fixed delays, use Selenium explicit waits to wait for elements to become available.

Example:

Wait until a button is clickable before performing an action.

---

## 2. Maintain Stable Test Data

Use consistent test data and avoid dependency on changing data.

Example:

Create dedicated test users for automation.

---

## 3. Improve Test Isolation

Each test should run independently without depending on previous test results.

Example:

Reset application state before every test execution.

---

# Conclusion

This task helped understand automation decision criteria, selecting suitable automation candidates, calculating automation ROI, and handling flaky tests in Selenium automation frameworks.