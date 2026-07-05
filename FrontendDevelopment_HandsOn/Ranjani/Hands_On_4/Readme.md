# Frontend Development - Hands_On_4

## Module

Frontend Development

## Hands-On Title

Async JavaScript, Fetch API & API Integration

---

## Objective

The objective of this hands-on is to understand asynchronous programming in JavaScript and integrate external APIs into a web application. The exercise focuses on working with Promises, async/await, Fetch API, error handling, loading states, and Axios to retrieve and display data dynamically.

---

# Task 1 - Promises and async/await

## Objective

Understand asynchronous JavaScript using Promises and async/await.

## Features Implemented

- Created a `fetchUser()` function using the Fetch API with Promise chaining.
- Parsed JSON responses using `.then()`.
- Rewrote the same functionality using `async/await`.
- Implemented error handling using `try/catch`.
- Simulated a network delay using `Promise` and `setTimeout()`.
- Displayed a loading message while course data was being fetched.
- Rendered course cards only after the Promise resolved.
- Used `Promise.all()` to fetch multiple users simultaneously.

---

# Task 2 - Fetch API with Error Handling

## Objective

Build a reusable API layer with proper error handling and user feedback.

## Features Implemented

- Created a reusable `apiFetch()` function.
- Used the Fetch API to retrieve data from JSONPlaceholder.
- Checked `response.ok` before processing responses.
- Implemented `try/catch` for robust error handling.
- Displayed a loading indicator while fetching data.
- Rendered notification cards dynamically.
- Simulated a 404 error using an invalid API endpoint.
- Displayed a user-friendly error message.
- Added a Retry button to reload data after an error.

---

# Task 3 - Introduction to Axios

## Objective

Use Axios for API communication and compare it with the Fetch API.

## Features Implemented

- Added Axios using a CDN.
- Created API requests using `axios.get()`.
- Retrieved posts using query parameters.
- Configured request timeout.
- Added an Axios request interceptor.
- Logged API request information before every request.
- Rendered API data dynamically.
- Compared Fetch API and Axios using code comments.

---

# Folder Structure

```text
Hands_On_4
│
├── Screenshots
│   ├── Task1_Output.png
│   ├── Task2_Output.png
│   └── Task3_Output.png
│
├── task1
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── data.js
│
├── task2
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── task3
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
└── Readme.md
```

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Promises
- Async/Await
- Fetch API
- Axios
- JSONPlaceholder API
- Visual Studio Code
- Live Server

---

# Expected Output

## Task 1

- Loading message displayed before rendering courses.
- Course cards displayed after a simulated delay.
- Browser console displays Promise chaining output.
- Browser console displays async/await output.
- Browser console displays `Promise.all()` results.

## Task 2

- Notification cards loaded dynamically from the API.
- Loading indicator displayed during API requests.
- Friendly error message shown for invalid API requests.
- Retry button reloads notifications successfully.

## Task 3

- Posts belonging to User 1 displayed dynamically.
- Axios request interceptor logs API calls in the browser console.
- API requests use query parameters.
- Comparison between Fetch API and Axios included in the code.

---

# Screenshots

The following screenshots are included in the **Screenshots** folder:

- Task1_Output.png
- Task2_Output.png
- Task3_Output.png

---

# Learning Outcomes

After completing this hands-on, the following concepts were learned:

- JavaScript Promises
- Async/Await
- Promise Chaining
- Promise.all()
- Fetch API
- API Integration
- JSON Data Handling
- Error Handling using try/catch
- Loading State Management
- Dynamic DOM Rendering
- Axios
- Axios Interceptors
- Query Parameters
- HTTP Request Handling

---

# APIs Used

- JSONPlaceholder Users API
- JSONPlaceholder Posts API

---

# Author

**Name:** Ranjani A

**Track:** Python Full Stack Engineer

**Program:** Cognizant Digital Nurture 5.0