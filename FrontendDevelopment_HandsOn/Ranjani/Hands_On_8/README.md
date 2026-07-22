# Frontend Development - Hands_On_8

## Name
**Ranjani A**

## Course
Frontend Development

## Hands-On 8
**Vue.js — Composition API, Vue Router & Pinia**

---

# Objective

The objective of this hands-on is to understand Vue 3 application development using Composition API, Vue Router, and Pinia state management.

This exercise demonstrates component creation, reactive data handling, SPA navigation, and centralized state management using Vue 3.

---

# Task 1 – Vue 3 Components & Reactive Data

## Aim

To create reusable Vue components and implement reactive state using Composition API.

## Features Implemented

- Vue 3 Single File Components (SFC)
- Components using `<template>`, `<script setup>`, and `<style scoped>`
- CourseCard component
- Props using defineProps()
- Reactive data using ref()
- Course rendering using v-for
- Dynamic course display

## Expected Output

- Courses are displayed dynamically.
- Course details are shown using reusable components.
- Reactive data updates the UI automatically.

---

# Task 2 – Vue Router for Navigation

## Aim

To implement client-side routing between different views.

## Features Implemented

- Vue Router configuration
- Home View
- Courses View
- Course Detail View
- Profile View
- RouterLink navigation
- Dynamic route using course id
- Programmatic navigation using router.push()
- Navigation guard using beforeEach()

## Expected Output

- Navigation works without page reload.
- `/courses` displays courses.
- `/courses/:id` displays course details.
- Enroll redirects to profile page.

---

# Task 3 – Pinia State Management

## Aim

To manage shared enrollment state using Pinia.

## Features Implemented

- Pinia store creation
- defineStore()
- Reactive enrolledCourses state
- enroll action
- unenroll action
- Computed totalCredits
- Store usage across components
- Header enrollment count update
- Profile enrolled course display

## Expected Output

- Enrolling a course updates the Pinia store.
- Header count increases automatically.
- Profile page shows enrolled courses.
- Total credits are calculated.
- Removing a course updates the state.

---

# Technologies Used

- Vue 3
- Vite
- JavaScript (ES6)
- Vue Router
- Pinia
- Vue DevTools
- CSS3

---

# Folder Structure

```
Hands_On_8
│
├── task1
│   └── student-portal-vue
│       ├── Components
│       ├── Composition API
│       └── Reactive Data
│
├── task2
│   └── student-portal-vue
│       ├── Vue Router
│       ├── Views
│       └── Navigation
│
├── task3
│   └── student-portal-vue
│       ├── Pinia Store
│       ├── Enrollment Management
│       └── State Management
│
└── README.md
```

---

# Learning Outcome

After completing this hands-on, I learned to:

- Create Vue 3 components.
- Use Composition API with script setup.
- Manage reactive data using ref().
- Build Single Page Applications using Vue Router.
- Create dynamic routes.
- Perform programmatic navigation.
- Manage global application state using Pinia.
- Create reusable and maintainable Vue applications.

---

# Result

Successfully implemented Vue 3 Components, Vue Router navigation, and Pinia state management concepts for the Student Portal application and verified the expected outputs.