# Frontend Development - Hands_On_3

## Module

Frontend Development

## Hands-On Title

JavaScript ES6+ & DOM Manipulation

---

## Objective

The objective of this hands-on is to understand modern JavaScript (ES6+) features and use them to build interactive web pages. The exercise focuses on working with ES6 modules, array methods, DOM manipulation, dynamic rendering, and event handling to create a responsive Student Portal application.

---

# Task 1 - ES6+ Syntax Practice

## Objective

Practice modern JavaScript syntax using ES6+ features.

## Features Implemented

- Created a `data.js` module containing an array of course objects.
- Imported course data using ES6 `import`.
- Used object destructuring to extract course properties.
- Implemented template literals for formatted output.
- Used `Array.map()` to create formatted course strings.
- Used `Array.filter()` to retrieve courses with credits greater than or equal to 4.
- Used `Array.reduce()` to calculate total enrolled credits.
- Implemented arrow functions throughout the application.
- Displayed results in the browser console.

---

# Task 2 - DOM Selection & Dynamic Rendering

## Objective

Render course data dynamically using JavaScript.

## Features Implemented

- Selected HTML elements using `querySelector()`.
- Dynamically created course cards using `createElement()`.
- Assigned CSS classes using `className`.
- Built HTML content using template literals.
- Added course cards to the page using `appendChild()`.
- Used `DocumentFragment` for efficient DOM updates.
- Calculated and displayed total enrolled credits dynamically.

---

# Task 3 - Event Listeners & Interactivity

## Objective

Add interactivity to the Student Portal using JavaScript event handling.

## Features Implemented

- Added a search input to filter courses dynamically.
- Implemented real-time search using the `input` event.
- Added a **Sort by Credits** button.
- Sorted courses in descending order of credits.
- Re-rendered the course grid dynamically after search and sort operations.
- Used event delegation to detect clicked course cards.
- Displayed selected course name and grade dynamically.
- Updated the webpage without requiring page reloads.

---

# Folder Structure

```text
Hands_On_3
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
│   ├── app.js
│   └── data.js
│
├── task3
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── data.js
│
└── Readme.md
```

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- ES6 Modules
- DOM Manipulation
- Event Listeners
- Visual Studio Code
- Live Server

---

# Expected Output

## Task 1

- Course data displayed in the browser console.
- Formatted course list using `map()`.
- Filtered course list using `filter()`.
- Total credits calculated using `reduce()`.

## Task 2

- Course cards generated dynamically using JavaScript.
- Total enrolled credits displayed below the course grid.
- No hardcoded course cards in HTML.

## Task 3

- Search courses dynamically.
- Sort courses by credits.
- Display selected course details.
- Interactive and responsive Student Portal.

---

# Screenshots

The following screenshots are included in the **Screenshots** folder:

- Task1_Output.png
- Task2_Output.png
- Task3_Output.png

---

# Learning Outcomes

After completing this hands-on, the following concepts were learned:

- JavaScript ES6+ Features
- Variables (`let`, `const`)
- Arrow Functions
- Template Literals
- Object Destructuring
- ES6 Modules (`import` / `export`)
- Array Methods (`map()`, `filter()`, `reduce()`)
- DOM Selection
- Dynamic DOM Manipulation
- Event Listeners
- Event Delegation
- Dynamic Rendering
- Search and Sort Functionality

---

# Author

**Name:** Ranjani A

**Track:** Python Full Stack Engineer

**Program:** Cognizant Digital Nurture 5.0