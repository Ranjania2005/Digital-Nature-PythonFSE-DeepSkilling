import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../course';
import { CourseData } from '../course-data';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {

  courses: Course[] = [];

  constructor(private courseData: CourseData) {}

  ngOnInit() {
    this.courses = this.courseData.getCourses();
  }

}