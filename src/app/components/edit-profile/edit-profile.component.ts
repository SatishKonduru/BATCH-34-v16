import { CanDeactivate } from '@angular/router';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  preserveWhitespaces: true,
})
export class EditProfileComponent {
  myName: '';
  // saved = false;
  isSaved = true;
  user = {
    name: 'Satish Konduru',
    email: 'satish@gmail.com',
    bio: 'Full Stack AI Developer',
  };
  constructor(private _dialog: MatDialog) {}
  // save() {
  //   this.saved = true;
  //   alert('Profile saved Succssfully');
  // }

  saveChanges() {
    this.isSaved = true;
    alert('Profile Saved Successfully');
  }
  onInputChange() {
    this.isSaved = false;
  }
  // the following method will be used by canDeactivate guard
  // hasUnsavedChanges(): boolean {
  //   return !this.saved;
  // }

  // This will call by CanActivate Guard
  canDeactivate(): boolean | Observable<boolean> {
    if (this.isSaved) {
      return true;
    }
    const config = {
      width: '350px',
      data: {
        title: 'Unsaved Changes!',
        message:
          'You have Unsaved Changes. Do you really want to leave this Page?',
      },
    };
    const dialogRef = this._dialog.open(ConfirmDialogComponent, config);

    return dialogRef.afterClosed().pipe(map((result) => !!result));
  }
}
