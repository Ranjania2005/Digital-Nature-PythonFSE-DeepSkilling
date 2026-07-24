# Frontend Development - Hands_On_10

## Module
Frontend Development

## Hands-On Title
API Integration & Advanced State Management

---

## Objective

The objective of this hands-on is to understand advanced API integration techniques and state management patterns used in modern frontend applications.

This exercise focuses on creating a centralized API service layer, managing asynchronous operations using Redux Toolkit, implementing advanced Pinia patterns in Vue, and handling application-level errors using global error handling mechanisms.

---

# Task 1 - Build a Centralised API Service Layer

## Objective

Create a reusable and maintainable API layer that separates API communication logic from frontend components.

## Features Implemented

- Created a centralized API service structure.
- Configured a reusable API client.
- Implemented Axios-based API communication.
- Added API functions:
  - `getAllCourses()`
  - `getCourseById(id)`
  - `enrollStudent(studentId, courseId)`
- Added request interceptor.
- Added mock Authorization token handling.
- Added response interceptor.
- Implemented standardized error handling.
- Separated API logic from UI components.

## Folder Structure

```
src
│
├── api
│   ├── apiClient.js
│   └── courseApi.js
│
├── components
│
└── application files
```

## Expected Output

- All API calls are handled through a centralized API layer.
- Components consume reusable API functions.
- Error handling is standardized across API requests.
- Base URL changes can be managed from a single location.

---

# Task 2 - Advanced Redux Toolkit Async Thunks

## Objective

Implement asynchronous API handling using Redux Toolkit and manage loading, success, and error states efficiently.

## Framework Used

React + Redux Toolkit

---

## Features Implemented

- Created Redux store configuration.
- Created course slice.
- Implemented `createAsyncThunk()`.
- Integrated asynchronous API calls.
- Managed API request lifecycle states.

## Redux Async Flow

```
Component

    ↓

Dispatch Async Thunk

    ↓

API Request

    ↓

Redux Store Update

    ↓

Component Re-render
```

## Redux Lifecycle Handling

```
pending
    |
    ↓
loading = true


fulfilled
    |
    ↓
courses updated
    |
    ↓
loading = false


rejected
    |
    ↓
error message stored
    |
    ↓
loading = false
```

---

## Redux Selectors Implemented

Created selectors:

- `selectCourses`
- `selectCoursesLoading`
- `selectCoursesError`

Components access Redux data using selectors instead of directly accessing the store structure.

---

## Error Handling Test

- Changed the API URL temporarily to an invalid endpoint.
- Verified rejected action execution.
- Displayed error message when API request failed.

## Expected Output

- Courses load successfully through Redux async thunk.
- Loading state is displayed during API calls.
- Error messages are displayed when API calls fail.
- Components remain clean without direct API calls.

---

# Task 3 - Pinia Advanced Patterns & Global Error Handling

## Objective

Implement advanced state management patterns using Vue Pinia and understand global error handling.

## Framework Used

Vue 3 + Pinia

---

## Features Implemented

### Pinia Enrollment Store

Created a Pinia store to manage course enrollment state.

## Folder Structure

```
src
│
├── api
│   └── courseApi.js
│
├── stores
│   └── enrollment.js
│
└── components
    └── Enrollment.vue
```

---

## Async Action Implementation

Implemented:

```
fetchAndEnroll(courseId)
```

The action performs API communication and updates the store state.

## Pinia Data Flow

```
Component

    ↓

Pinia Action

    ↓

API Request

    ↓

Update Store State

    ↓

Reactive UI Update
```

---

## storeToRefs() Implementation

Used:

```javascript
storeToRefs(store)
```

to extract Pinia store properties while maintaining Vue reactivity.

Reactive states implemented:

- enrolledCourse
- loading
- error

---

## Reset Store State

Implemented:

```javascript
store.$reset()
```

to clear enrollment data and restore the initial store state.

---

# Global Error Handling

## Objective

Handle unexpected Vue application errors globally.

## Implementation

Added:

```javascript
app.config.errorHandler
```

## Features

- Captures Vue runtime errors.
- Logs errors in browser console.
- Displays fallback error message to users.

---

# Framework State Management Comparison

| Framework | State Management | Key Features |
|-----------|------------------|--------------|
| React | Redux Toolkit | Uses slices, reducers, middleware, selectors, and async thunks. Suitable for large-scale applications. |
| Angular | NgRx | Uses Actions, Reducers, Effects, and Selectors following Redux architecture. Provides strong application structure. |
| Vue | Pinia | Lightweight state management with less boilerplate and built-in Vue reactivity support. |

---

# Folder Structure

```
Hands_On_10
│
├── Screenshots
│   ├── Task1_Output.png
│   ├── Task2_Output.png
│   ├── Task2_Error_Test.png
│   └── Task3_Output.png
│
├── task1
│   └── Centralised API Service Project
│
├── task2
│   └── student-portal-react-redux
│
├── task3
│   └── student-portal-vue-pinia
│
└── Readme.md
```

---

# Technologies Used

- React
- Redux Toolkit
- Vue 3
- Pinia
- JavaScript
- Axios
- Fetch API
- Vite
- Visual Studio Code
- Browser Developer Tools

---

# Expected Output

## Task 1

- Centralized API service layer created.
- API requests handled through reusable functions.
- Standardized API error handling implemented.

## Task 2

- Redux Toolkit async thunk implementation completed.
- Course data loaded using Redux state management.
- Loading and error states handled successfully.

## Task 3

- Pinia store created for enrollment management.
- Async Pinia actions implemented.
- `storeToRefs()` used for maintaining reactivity.
- `$reset()` used for clearing store state.
- Global Vue error handling implemented.

---

# Screenshots

The following screenshots are included in the **Screenshots** folder:

- Task1_Output.png
- Task2_Output.png
- Task2_Error_Test.png
- Task3_Output.png

---

# Learning Outcomes

After completing this hands-on, the following concepts were learned:

- Centralized API Service Architecture
- API Interceptors
- Async API Integration
- Redux Toolkit createAsyncThunk
- Redux Selectors
- Loading and Error State Management
- Vue Pinia Store Management
- Pinia Async Actions
- storeToRefs() Usage
- Global Error Handling
- Comparison of React Redux, Angular NgRx, and Vue Pinia

---

# Author

**Name:** Ranjani A

**Track:** Python Full Stack Engineer

**Program:** Cognizant Digital Nurture 5.0