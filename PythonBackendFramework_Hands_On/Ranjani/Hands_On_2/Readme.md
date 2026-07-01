# Python Backend Frameworks - Hands_On_2

## Objective

The objective of this hands-on is to understand Django Models, Database Migrations, and Django ORM (Object Relational Mapping). This exercise demonstrates how to design database models, create database tables using migrations, and perform CRUD operations using Django ORM.

---

## Project Details

- **Framework:** Django
- **Language:** Python
- **Database:** SQLite3
- **Project Name:** coursemanager
- **Application Name:** courses

---

## Task 1 - Define Models and Run Migrations

### Models Created

- Department
- Course
- Student
- Enrollment

### Steps Performed

- Created Django models.
- Registered the application in `INSTALLED_APPS`.
- Generated migration files using:

```bash
python manage.py makemigrations
```

- Applied migrations using:

```bash
python manage.py migrate
```

- Verified migrations using:

```bash
python manage.py showmigrations
```

### Expected Outcome

Database tables were successfully created and migrations were applied without errors.

---

## Task 2 - Django ORM Queries

### Operations Performed

- Created Department records
- Created Course records
- Created Student records
- Created Enrollment records
- Retrieved records using ORM
- Filtered records
- Updated records
- Deleted records
- Verified query results

### Django ORM Methods Used

- `objects.create()`
- `objects.all()`
- `objects.filter()`
- `objects.get()`
- `save()`
- `delete()`
- `count()`

### Expected Outcome

Successfully performed CRUD operations using Django ORM without writing SQL queries.

---


# Task 3 - Django Admin Interface

## Objective

Configure the Django Admin interface for efficient management of application data.

## Operations Performed

- Created a Django superuser.
- Registered all models in the Django Admin panel.
- Customized the Course admin using:
  - `list_display`
  - `search_fields`
  - `list_filter`
- Added sample records using the Admin Interface.
- Verified the `unique_together` constraint on the Enrollment model.

## Commands Used

```bash
python manage.py createsuperuser
python manage.py runserver
```

## Admin Features Implemented

### list_display

- name
- code
- credits
- department

### search_fields

- name
- code

### list_filter

- department

## Expected Outcome

- Courses displayed with custom columns.
- Search functionality works.
- Department filtering works.
- Duplicate enrollment is prevented by validation.


## Folder Structure

```
Hands_On_2
│
├── coursemanager
│   ├── manage.py
│   ├── db.sqlite3
│   ├── coursemanager
│   └── courses
│
├── Screenshots
│   ├── Task1_Expected_Output.png
│   └── Task2_Expected_Output_1.png
│   └── Task2_Expected_Output_2.png
|   ├── Task3_Admin_Page.png
│   ├── Task3_Course_View.png
│   ├── Task3_Department.png
│   └── Task3_Student.png
└── README.md
```

---

## Learning Outcome

After completing this hands-on, I learned:

- Creating Django models
- Understanding model relationships
- Running migrations
- Working with SQLite database
- Performing CRUD operations using Django ORM
- Using the Django shell for database operations

---

## Author

**Name:** Ranjani A

**Course:** Cognizant Digital Nurture 4.0 – Python Full Stack Engineer
