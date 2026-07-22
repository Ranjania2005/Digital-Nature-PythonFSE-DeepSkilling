import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseData {

  private courses: Course[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'John Smith',
      duration: '6 Weeks',
      description: 'Learn Angular components, services and routing.'
    },
    {
      id: 2,
      title: 'React Basics',
      instructor: 'Emma Wilson',
      duration: '5 Weeks',
      description: 'Learn React components and state management.'
    },
    {
      id: 3,
      title: 'Python Programming',
      instructor: 'David Brown',
      duration: '8 Weeks',
      description: 'Learn Python programming from basics.'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }
}