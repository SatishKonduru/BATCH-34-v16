import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  courseList = [
    { id: 1, name: 'Angular', tutor: 'Satish' },
    { id: 2, name: 'React', tutor: 'RSK' },
    { id: 3, name: 'Angular Materail', tutor: 'Satish Konduru' },
    { id: 4, name: 'Bootstrap', tutor: 'Renu' },
    { id: 5, name: 'NodeJS', tutor: 'Nagesh' },
  ];

  courseIds: string[] = [];
  ngOnInit() {
    this.courseIds = Object.keys(this.courseList[0]);
    console.log(this.courseIds);
  }
}
