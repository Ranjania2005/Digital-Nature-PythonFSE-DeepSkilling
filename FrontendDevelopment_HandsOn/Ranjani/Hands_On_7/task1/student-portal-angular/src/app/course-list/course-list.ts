import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  searchTerm = '';

  courses = [

    {
      name:'Data Structures',
      code:'CS101',
      credits:4,
      grade:'A'
    },

    {
      name:'Database Management',
      code:'CS102',
      credits:3,
      grade:'A+'
    },

    {
      name:'Operating Systems',
      code:'CS103',
      credits:4,
      grade:'B+'
    },

    {
      name:'Computer Networks',
      code:'CS104',
      credits:3,
      grade:'A'
    },

    {
      name:'Machine Learning',
      code:'CS105',
      credits:4,
      grade:'A+'
    }

  ];

}