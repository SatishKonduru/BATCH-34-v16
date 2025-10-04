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
    this._activatedRoute.paramMap.subscribe((params) => {
      let getParams = params.get('course');
      this.myCourse = JSON.parse(getParams);
    });
  }
}
