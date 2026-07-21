# Frontend Development - Hands_On_5

## Module

Frontend Development

## Hands-On Title

React Fundamentals — Components, Props, State & Hooks

---

## Objective

The objective of this hands-on is to understand the fundamentals of React by building a Student Portal application using reusable components, JSX, props, state management, and React Hooks. This exercise introduces component-based architecture, dynamic rendering, controlled components, and lifecycle management using the `useEffect` hook.

---

# Task 1 - Project Setup & First Components

## Objective

Set up a React application using Vite and build reusable components using JSX and props.

## Features Implemented

- Created a React application using Vite.
- Removed the default Vite boilerplate.
- Created reusable functional components.
- Developed a Header component with navigation links.
- Passed the site name using props.
- Created a Footer component.
- Created a reusable CourseCard component.
- Displayed course information using props.
- Styled the application using CSS.

---

# Task 2 - State with useState and Dynamic Lists

## Objective

Manage application state using the `useState` hook and render dynamic course data.

## Features Implemented

- Created course data in a separate file.
- Managed course data using `useState`.
- Rendered course cards dynamically using `map()`.
- Implemented a search box for filtering courses.
- Updated the search term using `onChange`.
- Added an Enroll button to each course.
- Lifted the enrollment state to the parent component.
- Displayed the enrolled course count in the Header.
- Used unique keys while rendering lists.

---

# Task 3 - useEffect Hook & Lifecycle

## Objective

Fetch course data from an external API and understand component lifecycle using `useEffect`.

## Features Implemented

- Fetched course data from the JSONPlaceholder API.
- Converted API data into course objects.
- Displayed a loading message while fetching data.
- Implemented error handling using `try/catch`.
- Created a StudentProfile component.
- Managed local state for form inputs.
- Built controlled form inputs using `useState`.
- Used a dependency array with `useEffect`.
- Logged course updates to the browser console whenever course data changed.

---

# Folder Structure

```text
Hands_On_5
│
├── Screenshots
│   ├── Task1_Output.png
│   ├── Task2_Output.png
│   └── Task3_Output.png
│
├── task1
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── task2
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── data
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── task3
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── Readme.md
```

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- JSX
- React Hooks (`useState`, `useEffect`)
- Vite
- Fetch API
- JSONPlaceholder API
- Visual Studio Code
- npm

---

# Expected Output

## Task 1

- Student Portal header displayed.
- Navigation menu displayed.
- One CourseCard displayed using props.
- Footer displayed successfully.

## Task 2

- Five course cards displayed dynamically.
- Search box filters courses instantly.
- Enroll button updates enrolled course count.
- Header displays the correct enrolled course count.

## Task 3

- Loading message displayed while fetching data.
- Course cards loaded from the API.
- Error message displayed if the API request fails.
- Student Profile form updates as the user types.
- Browser console logs **"Courses updated"** whenever the courses state changes.

---

# Screenshots

The following screenshots are included in the **Screenshots** folder:

- Task1_Output.png
- Task2_Output.png
- Task3_Output.png

---

# Learning Outcomes

After completing this hands-on, the following concepts were learned:

- React Project Setup using Vite
- JSX Syntax
- Functional Components
- Component Reusability
- Props
- State Management using `useState`
- Dynamic Rendering with `map()`
- Conditional Rendering
- Controlled Components
- Event Handling
- Search Filtering
- Lifting State Up
- React Hooks
- `useEffect`
- Fetch API Integration
- Loading and Error States
- React Component Lifecycle
- API Data Rendering

---

# APIs Used

- JSONPlaceholder Posts API

---

# Author

**Name:** Ranjani A

**Track:** Python Full Stack Engineer

**Program:** Cognizant Digital Nurture 5.0