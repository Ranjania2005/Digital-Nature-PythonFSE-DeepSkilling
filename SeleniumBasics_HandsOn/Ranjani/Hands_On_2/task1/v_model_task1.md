# QA Concepts & Selenium Basics - Hands-On 2

# Task 1 - V-Model Mapping

## Objective

To understand the relationship between Software Development Life Cycle (SDLC) and Testing Development Life Cycle (TDLC) by mapping development phases with corresponding testing phases using the V-Model.

---

# 1. V-Model Diagram

The V-Model represents the relationship between development activities and testing activities.

```
              Requirements
                    |
                    |
        Acceptance Test Planning
                    |
                    |
              System Design
                    |
                    |
        System Testing Preparation
                    |
                    |
           Architecture Design
                    |
                    |
      Integration Testing Preparation
                    |
                    |
             Module Design
                    |
                    |
          Unit Testing Preparation
                    |
                    |
                 Coding
                    |
                    |
                  /   \
                 /     \
                /       \
       Unit Testing   Integration Testing
              \             /
               \           /
                \         /
              System Testing
                    |
                    |
            Acceptance Testing
```

---

# SDLC and TDLC Phase Mapping

| SDLC Phase | Corresponding TDLC Phase | Test Artifact Produced |
|------------|--------------------------|------------------------|
| Requirements Analysis | Acceptance Testing | Acceptance Test Plan, User Acceptance Criteria |
| System Design | System Testing | System Test Plan, System Test Scenarios |
| Architecture Design | Integration Testing | Integration Test Plan, API Test Scenarios |
| Module Design | Unit Testing | Unit Test Cases, Component Test Cases |
| Coding | Execution of Unit Tests | Tested Source Code |

---

# 2. Test Artifacts Produced During SDLC Phases

## Requirements Phase

### Development Activity:

Understanding business requirements and user expectations.

### QA Artifact:

- Acceptance Test Plan
- Acceptance Criteria
- Requirement Traceability Matrix

Example:

For Course Management API:

Requirement:

"Admin should create a new course."

QA prepares acceptance criteria to verify course creation functionality.

---

## System Design Phase

### Development Activity:

Designing overall system architecture.

### QA Artifact:

- System Test Plan
- End-to-End Test Scenarios

Example:

Verify communication between frontend, API, and database.

---

## Architecture Design Phase

### Development Activity:

Designing interaction between different modules.

### QA Artifact:

- Integration Test Cases
- API Test Scenarios

Example:

Verify Course API correctly communicates with the database.

---

## Module Design Phase

### Development Activity:

Designing individual components.

### QA Artifact:

- Unit Test Cases
- Component Test Scenarios

Example:

Verify course validation function.

---

## Coding Phase

### Development Activity:

Developers implement the application.

### QA Activity:

- Execute unit testing
- Review test coverage
- Validate implemented features

---

# 3. Entry and Exit Criteria for TDLC Phases

# Unit Testing

## Entry Criteria

- Code development is completed.
- Individual modules are available.
- Developer environment is ready.
- Unit test cases are prepared.

## Exit Criteria

- All unit test cases are executed.
- All critical unit defects are fixed.
- Required code coverage is achieved.

---

# Integration Testing

## Entry Criteria

- Individual modules are tested successfully.
- Integrated components are available.
- Integration test cases are prepared.

## Exit Criteria

- All integration test cases are completed.
- Communication between modules works correctly.
- No critical integration defects remain.

---

# System Testing

## Entry Criteria

- Complete application build is available.
- Integration testing is completed.
- Test environment is configured.

## Exit Criteria

- All system test cases are executed.
- Functional and non-functional testing is completed.
- Critical and high severity defects are closed.

---

# Acceptance Testing

## Entry Criteria

- System testing is completed.
- Application meets business requirements.
- Stable build is provided.

## Exit Criteria

- Business users approve the application.
- Acceptance criteria are satisfied.
- Product is ready for release.

---

# 4. QA Engagement Points in V-Model

QA should not wait until testing phases begin. QA involvement should start during development activities.

---

## 1. Requirements Review Phase

### QA Activity:

QA reviews requirements and identifies unclear or incomplete requirements.

### Example:

For Course Management API:

Requirement:

"Admin can create courses."

QA identifies required validations:

- Course name should be mandatory.
- Course code should be unique.
- Duration should have valid values.

Benefit:

Defects are prevented before coding begins.

---

## 2. Architecture Design Phase

### QA Activity:

QA reviews system design and prepares integration test scenarios.

### Example:

QA verifies:

- API communication design
- Database interaction
- Error handling approach

Benefit:

Potential integration issues can be identified early.

---

# Conclusion

The V-Model shows that testing activities are planned alongside development activities. Early QA involvement helps identify defects earlier, reduces development cost, and improves software quality.
