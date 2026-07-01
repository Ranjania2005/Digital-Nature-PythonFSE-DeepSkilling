# Hands-On 3: Django REST Views, URL Routing & Forms

## Objective
This hands-on focuses on developing RESTful APIs using Django REST Framework (DRF). It demonstrates the use of serializers, API views, ViewSets, routers, and custom actions for building a Course Management System.

---

## Task 1: Serializers and Basic API Views

### Description
Implemented Django REST Framework serializers for all models and created API endpoints using APIView.

### Implemented

- Created ModelSerializers for:
  - Department
  - Course
  - Student
  - Enrollment

- Implemented API Views:
  - GET all courses
  - GET course by ID
  - POST new course
  - PUT update course
  - DELETE course

- Configured URL routing for all endpoints.

### API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/courses/ | List all courses |
| POST | /api/courses/ | Create a course |
| GET | /api/courses/<id>/ | Retrieve a course |
| PUT | /api/courses/<id>/ | Update a course |
| DELETE | /api/courses/<id>/ | Delete a course |

### Testing

Verified all endpoints using Postman.

---

## Task 2: ViewSets and Routers

### Description

Refactored APIViews into ModelViewSets and configured automatic routing using Django REST Framework routers.

### Implemented

- CourseViewSet
- StudentViewSet
- EnrollmentViewSet

Configured DefaultRouter for automatic URL generation.

Implemented a custom action:

```
GET /api/courses/<id>/students/
```

This endpoint returns all students enrolled in a specific course.

### API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/courses/ | List courses |
| POST | /api/courses/ | Create course |
| GET | /api/courses/<id>/ | Retrieve course |
| PUT | /api/courses/<id>/ | Update course |
| DELETE | /api/courses/<id>/ | Delete course |
| GET | /api/students/ | List students |
| GET | /api/enrollments/ | List enrollments |
| GET | /api/courses/<id>/students/ | List students enrolled in a course |

### Testing

Tested all CRUD operations and the custom endpoint using Postman.

---

## Technologies Used

- Python 3.13
- Django 6
- Django REST Framework
- SQLite
- Postman

---

## Outcome

Successfully implemented REST APIs using Django REST Framework with:

- ModelSerializers
- APIViews
- ModelViewSets
- DefaultRouter
- CRUD Operations
- Custom API Actions
- Postman Testing

All required endpoints returned the expected HTTP status codes and JSON responses.