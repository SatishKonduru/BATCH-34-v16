import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css'],
})
export class SelectedCourseComponent implements OnInit {
  myCourse: any;
  constructor(private _activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    // for Route Parametes
    // this._activatedRoute.paramMap.subscribe((params) => {
    //   let getParams = params.get('course');
    //   this.myCourse = JSON.parse(getParams);
    // });

    // for Query Parameters OLD STYLE
    // this._activatedRoute.queryParams.subscribe(
    //   (p) => (this.myCourse = JSON.parse(p['selectedCourse']))
    // );

    this._activatedRoute.queryParamMap.subscribe(
      (p) => (this.myCourse = JSON.parse(p.get('selectedCourse')))
    );
  }
}
