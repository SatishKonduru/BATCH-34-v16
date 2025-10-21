import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService
  ) {}
  courseList = [];

  courseIds: string[] = [];
  courseId: number;
  ngOnInit() {
    this.getCourseDetails();

    this._activatedRoute.paramMap.subscribe((params) => {
      if (params) {
        this.courseId = parseInt(params.get('id'));
      }
    });

    // this.courseIds = Object.keys(this.courseList[0]);
    // console.log(this.courseIds);
  }

  onSelect(id: any) {
    console.log('Selected Course: ', id);
    // using Route Parameters
    this._router.navigate(['/selectedCourse', JSON.stringify(id)]);

    // Using Query Parameters
    // this._router.navigate(['/selectedCourse'], {
    //   queryParams: { selectedCourse: JSON.stringify(course) },
    // });
  }

  getCourseDetails() {
    this._courseService.courseNames().subscribe((res) => {
      this.courseList = res;
      this.courseIds = Object.keys(this.courseList[0]);
    });
  }
}
