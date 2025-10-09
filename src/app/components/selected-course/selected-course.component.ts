import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css'],
})
export class SelectedCourseComponent implements OnInit {
  myCourse: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {

    // using Snapshot
  //  this.myCourse = JSON.parse( this._activatedRoute.snapshot.paramMap.get('course'))

    // for Route Parametes
    this._activatedRoute.paramMap.subscribe((params) => {
      let getParams = params.get('course');
      this.myCourse = JSON.parse(getParams);
    });

    // for Query Parameters OLD STYLE
    // this._activatedRoute.queryParams.subscribe(
    //   (p) => (this.myCourse = JSON.parse(p['selectedCourse']))
    // );

    // this._activatedRoute.queryParamMap.subscribe(
    //   (p) => (this.myCourse = JSON.parse(p.get('selectedCourse')))
    // );
  }

  goBack() {
    this._router.navigate(['/courseDetails', this.myCourse.id]);
  }
  viewDetails() {
    this._router.navigate(['selectedCourseDetails'], {
      relativeTo: this._activatedRoute,
    });
  }
}
