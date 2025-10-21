import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(private _courseService: CourseService) {}
  courseList: any = [];
  ngOnInit() {
    this.getCourseNames();
  }
  getCourseNames() {
    this._courseService
      .courseNames()
      .subscribe((res) => (this.courseList = res));
  }
}
