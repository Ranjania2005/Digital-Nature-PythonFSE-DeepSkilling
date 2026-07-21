# Frontend Development - Hands_On_6

## Name
**Ranjani A**

## Course
Frontend Development

## Hands-On 6
**React Routing & State Management**

---

# Objective

The objective of this hands-on is to understand React Router, Context API, and Redux Toolkit for building modern Single Page Applications (SPA). This exercise demonstrates page navigation, global state management, and Redux-based application architecture.

---

# Task 1 – Multi-Page Navigation with React Router

## Aim

To create a multi-page React application using React Router v6.

## Features Implemented

- BrowserRouter configuration
- React Router Routes
- Home Page
- Courses Page
- Course Detail Page
- Profile Page
- Navigation using Link
- Dynamic routing using useParams()
- Programmatic navigation using useNavigate()

## Expected Output

- Home page opens by default.
- Clicking Courses displays all courses.
- Clicking a course opens its detail page.
- Clicking Enroll redirects the user to the Profile page.

---

# Task 2 – Global State using Context API

## Aim

To manage application-wide enrollment data without prop drilling.

## Features Implemented

- EnrollmentContext using createContext()
- EnrollmentProvider
- useContext Hook
- Global enrolled courses list
- Enroll Course
- Remove Course
- Header enrollment count updates automatically

## Expected Output

- Clicking Enroll adds the course.
- Header count updates automatically.
- Profile page displays enrolled courses.
- Clicking Remove deletes the course from the list.

---

# Task 3 – Redux Toolkit

## Aim

To replace Context API with Redux Toolkit for scalable state management.

## Features Implemented

- configureStore()
- createSlice()
- Provider
- useSelector()
- useDispatch()
- Enroll Reducer
- Unenroll Reducer
- Redux DevTools support

## Expected Output

- Enrolling a course updates the Redux store.
- Header count updates automatically.
- Profile page displays enrolled courses.
- Removing a course updates the Redux state.
- Redux DevTools shows enroll and unenroll actions.

---

# Technologies Used

- React
- Vite
- JavaScript (ES6)
- React Router DOM v6
- Context API
- Redux Toolkit
- React Redux
- CSS3

---

# Folder Structure

```
Hands_On_6
│
├── task1
│   ├── React Router
│   ├── Home
│   ├── Courses
│   ├── Course Details
│   └── Profile
│
├── task2
│   ├── Context API
│   ├── Enrollment Context
│   ├── Enroll
│   └── Remove Course
│
├── task3
│   ├── Redux Toolkit
│   ├── Store
│   ├── Slice
│   ├── useSelector
│   ├── useDispatch
│   └── Redux DevTools
│
└── README.md
```

---

# Learning Outcome

After completing this hands-on, I learned to:

- Build Single Page Applications using React Router.
- Navigate between pages without reloading.
- Share state globally using Context API.
- Manage application state using Redux Toolkit.
- Dispatch Redux actions.
- Read Redux state using useSelector().
- Debug Redux state using Redux DevTools.
- Organize React applications into reusable components.

---

# Result

Successfully implemented React Routing, Context API, and Redux Toolkit concepts for the Student Portal application and verified the outputs for all three tasks.