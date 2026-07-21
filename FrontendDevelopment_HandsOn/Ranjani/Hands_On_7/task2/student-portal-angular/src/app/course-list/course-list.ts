import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../course';
import { CourseService } from '../course-service';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}