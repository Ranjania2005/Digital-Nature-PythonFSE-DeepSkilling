# Frontend Development - Hands_On_7

## Name
**Ranjani A**

## Course
Frontend Development

## Hands-On 7
**Angular Components, Routing & Reactive Forms**

---

# Objective

The objective of this hands-on is to understand Angular application development concepts including components, services, routing, and reactive forms.

This exercise demonstrates building Angular standalone applications, implementing component communication, managing data using services, navigating between views, and creating validated forms using Angular Reactive Forms.

---

# Task 1 – Angular Components and Data Binding

## Aim

To understand Angular component creation and data binding concepts.

## Features Implemented

- Created Angular components.
- Used Angular component structure.
- Implemented component templates.
- Used interpolation and property binding.
- Applied CSS styling for components.
- Displayed dynamic data in Angular templates.

## Concepts Covered

- Angular Components
- Component Templates
- Data Binding
- Property Binding
- Angular CLI Component Generation

## Expected Output

- Angular application displays component data successfully.
- Components render their respective templates.
- Data is displayed dynamically using Angular binding concepts.

---

# Task 2 – Student Portal Application

## Aim

To develop a Student Portal application using Angular components, services, dependency injection, and component communication.

## Features Implemented

- Created Angular standalone components.
- Header Component for application title display.
- Course List Component for displaying available courses.
- Course Card Component for individual course details.
- Created Course model using TypeScript interface.
- Implemented Course Data service.
- Used dependency injection to access service data.
- Used Input binding for component communication.
- Displayed course information dynamically using `*ngFor`.
- Added CSS styling for course cards and layout.

## Components Created

### Header Component

- Displays Student Portal heading.
- Displays course management information.

### Course List Component

- Retrieves course information from service.
- Displays available courses.

### Course Card Component

- Receives course details using Input decorator.
- Displays individual course information.

### Course Data Service

- Stores course details.
- Provides course data to components.

## Expected Output

- Student Portal heading is displayed.
- Available courses are shown as cards.
- Each card displays:
  - Course title
  - Instructor name
  - Duration
  - Description

---

# Task 3 – Angular Routing & Reactive Forms

## Aim

To implement Angular routing between views and create a student profile form using Angular Reactive Forms.

## Features Implemented

### Angular Routing

- Configured Angular routes.
- Implemented navigation between views.
- Used RouterOutlet.
- Used routerLink for navigation.

## Routes Implemented

```
/          → CourseListComponent

/profile  → StudentProfileComponent
```

---

## Reactive Form Implementation

Created Student Profile form using Angular Reactive Forms.

### Form Fields

### Name

Validation:

- Required validator.

### Email

Validation:

- Required validator.
- Email format validator.

### Semester

Validation:

- Required validator.
- Minimum value: 1.
- Maximum value: 8.

---

## Form Features Implemented

- Created FormGroup in component class.
- Used FormControl validation.
- Used formGroup directive.
- Used formControlName binding.
- Displayed inline validation messages.
- Disabled Submit button until form becomes valid.
- Logged submitted form values in console.

## Expected Output

- User can navigate between course page and profile page.
- Student profile form is displayed at `/profile`.
- Invalid inputs display validation messages.
- Submit button becomes enabled only when all fields are valid.

---

# Technologies Used

- Angular 21.2.18
- Angular CLI
- TypeScript
- HTML5
- CSS3
- Angular Router
- Angular Reactive Forms

---

# Folder Structure

```
Hands_On_7
│
├── task1
│   ├── Angular Components
│   ├── Data Binding
│   └── Templates
│
├── task2
│   └── student-portal-angular
│       │
│       ├── Header Component
│       ├── Course List Component
│       ├── Course Card Component
│       ├── Course Data Service
│       └── Course Model
│
├── task3
│   └── student-profile-angular
│       │
│       ├── Course List Component
│       ├── Student Profile Component
│       ├── Angular Routing
│       └── Reactive Form Validation
│
└── README.md
```

---

# Learning Outcome

After completing this hands-on, I learned to:

- Create Angular standalone components.
- Understand Angular component architecture.
- Use Angular data binding techniques.
- Share data between components using Input binding.
- Create and use Angular services.
- Implement dependency injection.
- Configure Angular routing.
- Navigate between different views.
- Build forms using Reactive Forms.
- Apply form validation using Angular Validators.
- Manage user input and display validation messages.

---

# Result

Successfully implemented Angular components, services, routing, and reactive forms for the Student Portal application.

The outputs for all tasks were verified successfully, and the applications were executed without errors.