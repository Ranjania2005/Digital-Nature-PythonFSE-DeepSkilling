import { Component, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: Course;

}