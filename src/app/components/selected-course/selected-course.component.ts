import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css'],
})
export class SelectedCourseComponent implements OnInit {
  myCourseID: any;
  snapshotCourseID: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    //  ✅ Live Updates with Subscrbe
    this._activatedRoute.paramMap.subscribe((p) => {
      const data = p.get('id');
      if (data) {
        this.myCourseID = parseInt(data);
      }
    });

    // ❌ Snapshot
    const snapshotData = this._activatedRoute.snapshot.paramMap.get('id');
    if (snapshotData) {
      this.snapshotCourseID = parseInt(snapshotData);
    }
  }

  goBack() {
    this._router.navigate(['/courseDetails', this.myCourseID]);
  }

  previousCourse() {
    const prevId = this.myCourseID - 1;
    if (prevId < 1) return alert('No Previoius Course');

    this._router.navigate(['/selectedCourse', JSON.stringify(prevId)]);
  }
  nextCourse() {
    const nextId = this.myCourseID + 1;
    if (nextId > 5) return alert('No Next Course');
    this._router.navigate(['/selectedCourse', JSON.stringify(nextId)]);
  }
  viewDetails() {
    this._router.navigate(['selectedCourseDetails'], {
      relativeTo: this._activatedRoute,
    });
  }
}
